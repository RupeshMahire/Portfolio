'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

interface OverlayProps {
    progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
    // Parallax opacity and y-offset for each section

    // Section 1: Intro (0% - 20%)
    const opacity1 = useTransform(progress, [0, 0.1, 0.2], [0, 1, 0]);
    const y1 = useTransform(progress, [0, 0.2], [0, -50]);

    // Section 2: "I build..." (30% - 50%)
    const opacity2 = useTransform(progress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const y2 = useTransform(progress, [0.25, 0.45], [50, -50]);

    // Section 3: "Bridging..." (60% - 80%)
    const opacity3 = useTransform(progress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const y3 = useTransform(progress, [0.55, 0.75], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center select-none">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center text-center px-4"
            >
                <div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl mb-4">
                        {portfolioData.personal.name}
                    </h1>
                    <p className="text-lg md:text-2xl font-light text-gray-200 tracking-widest uppercase drop-shadow-md">
                        {portfolioData.personal.title}
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-24"
            >
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl">
                        Specializing in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 drop-shadow-none">
                            AIML, RAG, & LLMs.
                        </span>
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-xl drop-shadow-md font-medium">
                        {portfolioData.skills.description}
                    </p>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-6 md:px-24 text-right"
            >
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl">
                        From <span className="italic font-serif font-light text-blue-200">{portfolioData.personal.location}</span> <br />
                        to the World.
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-100 drop-shadow-md font-medium">
                        {portfolioData.personal.certification}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
