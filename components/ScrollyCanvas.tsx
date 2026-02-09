'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const currentFrameRef = useRef(0);

    const frameCount = 160;

    // Generate image paths
    const imagePaths = useMemo(() => {
        return Array.from({ length: frameCount }, (_, i) => {
            const frameIndex = i.toString().padStart(3, '0');
            return `/sequence/frame_${frameIndex}_delay-0.05s.png`;
        });
    }, []);

    // Store images in ref to avoid state re-renders/stale closures
    const imagesRef = useRef<HTMLImageElement[]>([]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        imagePaths.forEach((path, index) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            loadedImages[index] = img;
        });

        imagesRef.current = loadedImages;
    }, [imagePaths]);

    // Render logic
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const images = imagesRef.current;
        const img = images[index];

        if (canvas && ctx && img) {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw image with object-fit: cover logic
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );

            currentFrameRef.current = index;
        }
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame
                if (isLoaded) {
                    renderFrame(currentFrameRef.current);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        // Initial size
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    // Sync scroll to frame
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (!isLoaded || imagesRef.current.length === 0) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
                <Overlay progress={scrollYProgress} />

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-[#121212] z-50">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                            <p className="text-sm uppercase tracking-widest text-gray-400">Loading Experience...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
