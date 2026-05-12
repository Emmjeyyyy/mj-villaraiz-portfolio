"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

// Dynamically import the 3D Experience to avoid SSR issues with Three.js
const ThreeDExperience = dynamic(() => import('./ThreeDText/Experience'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
});

export default function Hero({ startAnimation }: { startAnimation: boolean }) {
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
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* 3D Text Background Layer */}
      <div className="absolute inset-0 z-0 w-full h-full bg-black">
        <ThreeDExperience text="EMMJEYYYY" startAnimation={startAnimation} />
      </div>

    </section>
  );
}
