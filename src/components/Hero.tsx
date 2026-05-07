"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

// Dynamically import the 3D Experience to avoid SSR issues with Three.js
const ThreeDExperience = dynamic(() => import('./ThreeDText/Experience'), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for metadata elements
      gsap.from(".meta-element", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* 3D Text Background Layer */}
      <div className="absolute inset-0 z-0 w-full h-full bg-black">
        <ThreeDExperience text="EMMJEYYYY" />
      </div>

      {/* UI Overlay Layer */}
      <div className="hero-content relative z-10 w-full h-full pointer-events-none flex flex-col justify-between px-12 py-12 min-h-screen">
        {/* Top Meta */}
        <div className="flex justify-between items-start pt-12">
          <div className="meta-element flex flex-col gap-1">
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase">Interactive System v2.6</span>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" />
              <span className="text-[9px] font-mono text-white/40">3D_ENGINE_ACTIVE</span>
            </div>
          </div>
          
          <div className="meta-element text-right">
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase">Portfolio Edition</span>
            <div className="text-[9px] font-mono text-white/40 mt-1">EST. 2026</div>
          </div>
        </div>


        {/* Bottom Meta */}
        <div className="flex justify-between items-end border-t border-white/5 pt-6">
          <div className="meta-element font-mono text-[9px] text-white/30 space-y-1">
            <div>LOC: 121.05° E, 14.58° N</div>
            <div>STATUS: READY_TO_DEPLOY</div>
          </div>
          
          <div className="meta-element flex flex-col items-end">
            <span className="text-[10px] font-mono text-white/60 mb-2 tracking-[0.2em]">SCROLL_TO_EXPLORE</span>
            <div className="w-6 h-6 border-[0.5px] border-white/20 rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-[1px] h-3 bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
