'use client';

import { motion } from 'framer-motion';

export default function UnderConstruction() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-none"
        >
            <div className="bg-red-600/20 backdrop-blur-xl border border-red-500/30 text-white px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.3)] flex items-center gap-4 animate-pulse-slow">
                <div className="relative">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>
                <div>
                    <p className="font-bold text-sm tracking-uppercase text-red-100">
                        WORK IN PROGRESS
                    </p>
                    <p className="text-xs text-red-200/70 font-mono">
                        System on Full Fire soon.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
