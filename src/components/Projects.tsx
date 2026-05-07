"use client";

import React, { useRef, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { projects } from '@/data/projects';



const LERP_FACTOR = 0.06; // Lower = smoother/slower catch-up

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const currentX = useRef(0);
  const rafId = useRef<number>(0);

  // Read the target X from Lenis scroll position
  useLenis(({ scroll }) => {
    const trigger = triggerRef.current;
    const section = sectionRef.current;
    if (!trigger || !section) return;

    const triggerTop = trigger.offsetTop;
    const triggerHeight = trigger.offsetHeight - window.innerHeight;
    const scrolled = scroll - triggerTop;

    const progress = Math.max(0, Math.min(1, scrolled / triggerHeight));
    const maxX = -(section.scrollWidth - window.innerWidth);
    targetX.current = maxX * progress;
  });

  // Lerp currentX toward targetX every frame for smooth transition
  useEffect(() => {
    const animate = () => {
      const section = sectionRef.current;
      if (section) {
        currentX.current = lerp(currentX.current, targetX.current, LERP_FACTOR);
        // Only update DOM if there's a meaningful difference
        if (Math.abs(currentX.current - targetX.current) > 0.01) {
          section.style.transform = `translateX(${currentX.current}px)`;
        } else {
          section.style.transform = `translateX(${targetX.current}px)`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <div ref={triggerRef} className="relative h-[700vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden border-t border-white/5">
        <div
          ref={sectionRef}
          className="h-full flex flex-row items-center px-[10vw] w-fit will-change-transform"
        >
          {/* Header Card */}
          <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center pr-20">
            <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase mb-4">Portfolio_v2.0</span>
            <h2 className="text-[10vw] font-black tracking-tighter leading-none m-0">SELECTED<br /><span className="text-white/20">WORKS</span></h2>
            <div className="flex items-center gap-4 mt-12">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest animate-pulse">Scroll to Explore</span>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <div key={project.id} className="h-[65vh] w-[85vw] md:w-[70vw] flex-shrink-0 mr-[10vw] relative group overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.03] border border-white/10 group-hover:border-white/30 transition-all duration-500" />

              <div className="absolute inset-0 flex items-center justify-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
                <div className="w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="absolute font-black text-[30vw] opacity-5 select-none pointer-events-none">
                  {String(project.id).padStart(2, '0')}
                </div>
              </div>

              <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-white/40">{String(project.id).padStart(2, '0')}</span>
                  <div className="w-6 h-[1px] bg-white/20" />
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{project.type}</span>
                  <div className="w-6 h-[1px] bg-white/20" />
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">{project.tag}</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter group-hover:italic transition-all duration-500 uppercase">{project.title}</h3>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-10 right-10 md:top-16 md:right-16"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500">
                  <span className="text-xl md:text-3xl">→</span>
                </div>
              </a>
            </div>
          ))}

          {/* End Spacing */}
          <div className="w-[10vw] flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
