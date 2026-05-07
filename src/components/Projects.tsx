"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

export default function Projects() {
  const projects = [
    { id: 1, title: "PROJECT_CORE_01", type: "WEB_PLATFORM" },
    { id: 2, title: "PROJECT_CORE_02", type: "SYSTEM_ARCH" },
    { id: 3, title: "PROJECT_CORE_03", type: "VISUAL_ENGINE" },
    { id: 4, title: "PROJECT_CORE_04", type: "DATA_VISUAL" },
  ];

  return (
    <section id="projects" className="relative z-10 py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-20">
        <ScrollReveal>
          <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase block mb-4">Selected Works</span>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">PROJECTS</h2>
        </ScrollReveal>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-[16/10] bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] font-mono text-white/40 block mb-2">00{project.id} // {project.type}</span>
              <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <span className="text-xs">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
