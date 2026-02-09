'use client';

import { motion } from 'framer-motion';

import { portfolioData } from '@/data/portfolio';

const projects = portfolioData.projects;

export default function Projects() {
    return (
        <section className="relative min-h-screen bg-[#121212] text-white py-24 px-6 md:px-12 z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">{project.year}</span>
                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{project.category}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>

                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
