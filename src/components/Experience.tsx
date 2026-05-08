"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/experience';

// Inline SVG components to avoid extra dependencies
const ChevronDown = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const ChevronUp = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default to your first actual experience

  const totalXp = '3 MOS'; // Total time for your internship

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-playfair tracking-tighter uppercase">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-24 pl-10 md:pl-20 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-[49px] md:-left-[89px] top-2 w-4 h-4 rounded-full border-2 border-white/20 bg-black z-10 transition-all duration-500 ${expandedId === exp.id ? 'bg-white border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''}`}
              />
              
              {/* Year/Period label - Desktop */}
              <div className="absolute -left-[180px] md:-left-[240px] top-1 w-32 text-right hidden md:block">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] block">{exp.period.split(' - ')[0]}</span>
                <span className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em] block">— {exp.period.split(' - ')[1]}</span>
              </div>

              {/* Year/Period label - Mobile */}
              <div className="md:hidden mb-4 opacity-40">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em]">{exp.period}</span>
              </div>

              {/* Experience Card */}
              <div 
                className={`group border border-white/5 rounded-2xl p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 cursor-pointer overflow-hidden ${expandedId === exp.id ? 'border-white/20 bg-white/[0.05]' : ''}`}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase group-hover:text-white/90 transition-colors">{exp.role}</h3>
                  <div className="flex-shrink-0">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono text-white/40 uppercase tracking-[0.2em]">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <div className="text-white/40 font-mono text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  {exp.company} <span className="opacity-20">/</span> {exp.location}
                </div>

                <div className="flex items-center gap-3 text-white/20 text-[10px] font-mono uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors group-hover:translate-x-1 duration-300">
                   {expandedId === exp.id ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                   {expandedId === exp.id ? 'collapse' : 'expand'}
                </div>

                <AnimatePresence initial={false}>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="pt-10 space-y-8">
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-4">
                          {exp.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-[10px] font-mono text-white/30 uppercase tracking-tighter hover:bg-white/10 hover:text-white/60 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom XP Summary */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-40 border-t border-white/5 pt-12"
        >
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
             <div className="flex items-center gap-6 w-full md:w-auto flex-1">
               <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] flex-shrink-0">total xp</span>
               <div className="h-[1px] flex-1 bg-white/5 relative overflow-hidden hidden md:block">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '100%' }}
                   viewport={{ once: true }}
                   transition={{ duration: 2.5, ease: "circOut", delay: 0.8 }}
                   className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                 />
                 {/* Current progress indicator as in image */}
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '15%' }} 
                   viewport={{ once: true }}
                   transition={{ duration: 2, ease: "circOut", delay: 1 }}
                   className="absolute top-0 left-0 h-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                 />
               </div>
               <span className="text-xl md:text-2xl font-mono text-white/60 tracking-tighter">{totalXp} yrs</span>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
