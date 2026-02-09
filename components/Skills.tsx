'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
    return (
        <section className="relative min-h-screen bg-[#121212] text-white py-32 px-6 md:px-12 z-20 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">

                {/* Skills Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        {portfolioData.skills.headline}
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl">
                        {portfolioData.skills.description}
                    </p>
                </motion.div>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-32">
                    {portfolioData.skills.techStack.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-default min-h-[100px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                            <span className="text-gray-200 text-sm md:text-base font-medium tracking-wide text-center z-10 group-hover:text-white group-hover:font-bold transition-all">{skill}</span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-[2rem] p-12 md:p-24 overflow-hidden relative"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[100px] pointer-events-none" />

                    <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">
                        {portfolioData.social.message}
                    </h3>

                    <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10 italic">
                        {portfolioData.social.note}
                    </p>

                    <a
                        href={portfolioData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span>Connect on LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
