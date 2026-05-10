"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/experience';
import { useLenis } from 'lenis/react';

// Inline SVG components to avoid extra dependencies
const ChevronDown = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronUp = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const calculateTotalXp = (experiences: any[]) => {
  let totalMonths = 0;
  experiences.forEach(exp => {
    const parts = exp.period.split(' - ');
    if (parts.length === 2) {
      const start = new Date(parts[0]);
      const endStr = parts[1];
      const end = (endStr === 'Present' || endStr === 'Ongoing') ? new Date() : new Date(endStr);

      const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      totalMonths += months;
    }
  });
  return totalMonths;
};

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default to your first actual experience
  const lenis = useLenis();
  useEffect(() => {
    if (expandedId && lenis) {
      const timer = setTimeout(() => {
        const elem = document.getElementById(`exp-${expandedId}`);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          const isFullyVisible = rect.top >= 80 && rect.bottom <= window.innerHeight;
          
          // Only scroll if not already fully visible AND we are not at the very top of the page (prevents auto-scroll on load)
          const isAtTop = window.scrollY < 100;
          
          if (!isFullyVisible && !isAtTop) {
            lenis.scrollTo(elem, { offset: -80, duration: 0 });
          }
        }
      }, 350); // Delay to allow layout to settle
      return () => clearTimeout(timer);
    }
  }, [expandedId, lenis]);

  const totalMonths = calculateTotalXp(experiences);
  const totalXp = totalMonths < 12
    ? `${totalMonths} months`
    : `${(totalMonths / 12).toFixed(1)} yrs`;

  return (
    <section className="py-20 bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4"
        >
          <h2 className="text-6xl md:text-8xl font-playfair tracking-tighter uppercase">
            Experience
          </h2>
          <span className="text-xl md:text-2xl font-mono text-white/40 tracking-tighter">{totalXp}</span>
        </motion.div>
      </div>

      <div className="px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
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
                <div className="absolute -left-[110px] top-[2px] w-max text-right hidden md:block flex flex-row items-center justify-end h-4 whitespace-nowrap transform -translate-x-full">
                  <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em]">{exp.period.split(' - ')[0]}</span>
                  {exp.period.includes(' - ') && (
                    <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em]"> — {exp.period.split(' - ')[1]}</span>
                  )}
                </div>

                {/* Year/Period label - Mobile */}
                <div className="md:hidden mb-4 opacity-80">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]">{exp.period}</span>
                </div>

                {/* Experience Card */}
                <div
                  id={`exp-${exp.id}`}
                  className={`group border border-white/5 rounded-2xl p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 cursor-pointer overflow-hidden ${expandedId === exp.id ? 'border-white/60 bg-white/[0.05] shadow-[0_0_8px_rgba(255,255,255,0.4),0_0_15px_rgba(255,255,255,0.1)]' : ''}`}
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

                  <div className="text-white/40 font-mono text-xs uppercase tracking-[0.2em] pb-8 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    {exp.company} <span className="opacity-20">/</span> {exp.location}
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="pt-4 space-y-8">
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

                  <div className="flex items-center gap-3 text-white/20 text-[10px] font-mono uppercase tracking-[0.3em] pt-6">
                    {expandedId === exp.id ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                    {expandedId === exp.id ? 'collapse' : 'expand'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
