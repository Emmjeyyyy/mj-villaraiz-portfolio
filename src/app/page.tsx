"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeScene from "@/components/ThreeScene";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.to(".scroll-indicator", {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef} className="relative min-h-screen bg-[#050505] text-white selection:bg-indigo-500 selection:text-white">
      {/* Background Three.js Scene */}
      <div className="fixed inset-0 z-0 opacity-40">
        <ThreeScene />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div ref={textRef} className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 block text-sm font-medium uppercase tracking-[0.3em] text-indigo-400"
          >
            Digital Portfolio 2026
          </motion.span>
          <h1 className="mb-8 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
            CRAFTING <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              EXPERIENCES
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-zinc-400 md:text-xl">
            A fusion of design, code, and 3D motion. Built with Next.js, Three.js, and GSAP.
          </p>
        </div>

        <div className="scroll-indicator absolute bottom-12 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
      </section>

      {/* Content Sections for Scrolling */}
      <section className="relative z-10 py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="group relative"
            >
              <h2 className="text-4xl font-bold md:text-6xl mb-6">IMMERSE</h2>
              <p className="text-xl text-zinc-400 max-w-2xl">
                High-performance 3D visuals integrated seamlessly into the web. Using React Three Fiber for declarative 3D scenes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="group relative text-right ml-auto"
            >
              <h2 className="text-4xl font-bold md:text-6xl mb-6">ANIMATE</h2>
              <p className="text-xl text-zinc-400 max-w-2xl ml-auto">
                Fluid motion and scroll-triggered animations powered by GSAP and Framer Motion for a premium feel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="group relative"
            >
              <h2 className="text-4xl font-bold md:text-6xl mb-6">SMOOTH</h2>
              <p className="text-xl text-zinc-400 max-w-2xl">
                Lenis smooth scroll ensures every interaction feels buttery soft and consistent across all browsers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6 border-t border-zinc-900 bg-black">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold italic tracking-tighter">MV.PORTFOLIO</div>
          <div className="flex gap-8 text-zinc-500 text-sm">
            <a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          </div>
          <div className="text-zinc-600 text-sm">
            © 2026 MJ Villaraiz
          </div>
        </div>
      </footer>
    </main>
  );
}
