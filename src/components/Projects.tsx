"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import { projects } from '@/data/projects';

const LERP_FACTOR = 0.1; // Higher = more immediate catch-up, less damping

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const currentX = useRef(0);
  const rafId = useRef<number>(0);
  const lenis = useLenis();

  // Dragging state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  // Read the target X from Lenis scroll position
  useLenis(({ scroll }) => {
    if (isDragging.current) return; // Don't let scroll update targetX if we're dragging (drag updates scroll)
    
    const trigger = triggerRef.current;
    const section = sectionRef.current;
    if (!trigger || !section) return;

    const triggerTop = trigger.offsetTop;
    const triggerHeight = trigger.offsetHeight - window.innerHeight;
    const scrolled = scroll - triggerTop;

    const progress = Math.max(0, Math.min(1, scrolled / triggerHeight));

    // Find the project cards inside the section
    const cards = section.getElementsByClassName('project-card');
    const lastCard = cards[cards.length - 1] as HTMLElement;

    if (lastCard) {
      // The offset relative to the container plus half its width
      const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2;
      // The amount we need to translate to put that center in the middle of the screen
      const finalX = -(lastCardCenter - window.innerWidth / 2);
      targetX.current = finalX * progress;
    } else {
      const maxX = -(section.scrollWidth - window.innerWidth);
      targetX.current = maxX * progress;
    }
  });

  // Lerp currentX toward targetX every frame for smooth transition
  useEffect(() => {
    const animate = () => {
      const section = sectionRef.current;
      if (section) {
        // Use 1.0 (immediate) during drag, or LERP_FACTOR during scroll
        const factor = isDragging.current ? 1 : LERP_FACTOR;
        currentX.current = lerp(currentX.current, targetX.current, factor);
        
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

  // Handlers for dragging
  const handleDragStart = (clientX: number) => {
    if (!lenis) return;
    isDragging.current = true;
    startX.current = clientX;
    startScroll.current = lenis.scroll;
    
    if (sectionRef.current) {
      sectionRef.current.style.cursor = 'grabbing';
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current || !lenis || !triggerRef.current || !sectionRef.current) return;

    const deltaX = clientX - startX.current;
    const trigger = triggerRef.current;
    const section = sectionRef.current;

    const triggerHeight = trigger.offsetHeight - window.innerHeight;
    
    // Calculate rangeX (same logic as in useLenis)
    const cards = section.getElementsByClassName('project-card');
    const lastCard = cards[cards.length - 1] as HTMLElement;
    let rangeX = section.scrollWidth - window.innerWidth;
    
    if (lastCard) {
      const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2;
      rangeX = lastCardCenter - window.innerWidth / 2;
    }

    const ratio = triggerHeight / rangeX;
    const scrollDelta = -deltaX * ratio; // Drag left = scroll down
    
    const newScroll = startScroll.current + scrollDelta;
    lenis.scrollTo(newScroll, { immediate: true });
    
    // Also update targetX immediately for better responsiveness during drag
    const progress = Math.max(0, Math.min(1, (newScroll - trigger.offsetTop) / triggerHeight));
    
    if (lastCard) {
      const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2;
      const finalX = -(lastCardCenter - window.innerWidth / 2);
      targetX.current = finalX * progress;
    } else {
      const maxX = -(section.scrollWidth - window.innerWidth);
      targetX.current = maxX * progress;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    if (sectionRef.current) {
      sectionRef.current.style.cursor = 'grab';
    }
  };

  return (
    <div ref={triggerRef} className="relative h-[2000vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden border-t border-white/5">
        <div
          ref={sectionRef}
          className="h-full flex flex-row items-center px-[10vw] w-fit will-change-transform cursor-grab active:cursor-grabbing transition-colors duration-300"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Header Card */}
          <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center pr-20 pointer-events-none select-none">
            <h2 className="text-[10vw] font-black tracking-tighter leading-none m-0">MY<br /><span className="text-white/20">PROJECTS</span></h2>
            <div className="flex items-center gap-4 mt-12">
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <div key={project.id} className="project-card aspect-video h-[50vh] md:h-[65vh] flex-shrink-0 mr-[10vw] relative group overflow-hidden select-none">
              <div className="absolute inset-0 bg-white/[0.03] border border-white/10 group-hover:border-white/30 transition-all duration-500" />

              <div className="absolute inset-0 flex items-center justify-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="absolute font-black text-[30vw] opacity-5 select-none pointer-events-none">
                  {String(project.id).padStart(2, '0')}
                </div>
              </div>

              <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 pointer-events-none">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-white/40">{String(project.id).padStart(2, '0')}</span>
                  <div className="w-6 h-[1px] bg-white/20" />
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{project.type}</span>
                  <div className="w-6 h-[1px] bg-white/20" />
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">{project.tag}</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter transition-all duration-500 uppercase">{project.title}</h3>
              </div>
            </div>
          ))}

          <div className="w-[10vw] flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

