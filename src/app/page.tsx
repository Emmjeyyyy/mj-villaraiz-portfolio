"use client";

import React, { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ShaderBorder from "@/components/ShaderBorder";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "@/components/Skills";
import Loader from "@/components/Loader";
import { useProgress } from '@react-three/drei';
import Contact from "@/components/Contact";
import Certificates from "@/components/Certificates";
import { FiX, FiDownload } from "react-icons/fi";

export default function Home() {
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);
  const [pulsesDone, setPulsesDone] = useState(false);
  const [canExit, setCanExit] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    if (isCvOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCvOpen]);

  useEffect(() => {
    // Reset scroll to top on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (progress === 100 && pulsesDone) {
      // First, trigger the move to navbar
      const moveTimer = setTimeout(() => {
        setShowLoader(false);
        
        // Then, wait for the logo transition (1.2s) before starting 3D text
        const animTimer = setTimeout(() => {
          setCanExit(true);
        }, 1200);
        return () => clearTimeout(animTimer);
      }, 500); 
      
      return () => clearTimeout(moveTimer);
    }
  }, [progress, pulsesDone]);

  return (
    <>
      <AnimatePresence>
        {showLoader && <Loader key="loader" onComplete={() => setPulsesDone(true)} />}
      </AnimatePresence>
      <main className="relative bg-black">
        <Navbar isLoading={showLoader} />

        <section id="home">
          <Hero startAnimation={canExit} />
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 pt-24 pb-32 px-6 max-w-7xl mx-auto scroll-mt-[10vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Left: Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative lg:top-[6px]"
            >
              <ShaderBorder>
                <div className="relative z-10 w-full aspect-[3/2] bg-black overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
                  {/* This is where your image goes. Using the generated placeholder for now. */}
                  <img
                    src="/assets/pfp/skeleton%20chrome.jpg"
                    alt="MJ VILLARAIZ"
                    className="w-full h-full object-contain scale-100 group-hover:scale-120 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </ShaderBorder>
              {/* Decorative metallic elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-white/20 z-0" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-white/20 z-0" />
            </motion.div>

            {/* Right: Info Container */}
            <div className="flex flex-col items-start relative lg:top-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-bold mb-1 leading-none">
                  <span className="text-[55px] md:text-[65px] -ml-1 md:-ml-1.5" style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif' }}>MJ VINZ CARLOS</span>
                  <br />
                  <span className="text-[65px] md:text-[104px] -ml-1 md:-ml-1.5" style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', WebkitTextStroke: '1.5px white', color: 'transparent' }}>VILLARAIZ</span>
                  <br />
                  <span className="text-2xl md:text-[44px] font-playfair inline-block whitespace-nowrap  mb-2 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #aaa 0%, #aaa 40%, #fff 50%, #aaa 60%, #aaa 100%)', backgroundSize: '200% auto', animation: 'shimmer 6s infinite linear reverse' }}>FULL-STACK DEVELOPER</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-col gap-4 max-w-lg"
              >
                {[
                  { id: '01', text: <>Learning <span className="text-white">Laravel</span>, <span className="text-white">React</span>, and <span className="text-white">Three.js</span> for 3D web development.</> },
                  { id: '02', text: <>Creating <span className="not-italic text-white">small projects</span> and <span className="not-italic text-white">immersive interactive</span> experiences.</> },
                  { id: '03', text: <span>Turning <span className="not-italic text-white">bugs into features</span>.</span> }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 group pb-4 border-b border-white/[0.03] last:border-0 w-full">
                    <div className="grid grid-cols-[1.5rem_1fr] gap-2 flex-1">
                      <span className="font-mono text-[9px] text-white mt-[8px] transition-colors">{item.id}</span>
                      <p className="text-sm md:text-[17px] text-white/50 leading-relaxed font-light group-hover:text-white transition-all duration-500">
                        {item.text}
                      </p>
                    </div>
                    {item.id === '03' && (
                      <button
                        onClick={() => setIsCvOpen(true)}
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white text-white hover:text-black px-4 py-2 rounded-full border border-white/10 hover:border-white transition-all duration-300 group/cv text-xs font-bold uppercase tracking-widest shrink-0 ml-4"
                      >
                        <span>View CV</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cv:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        <Skills />

        <section id="experience" className="pt-[100px] scroll-mt-0">
          <Experience />
          <Certificates />
        </section>

        <Projects />

        <Contact />

        {/* Footer */}
        <footer className="relative z-10 py-12 px-12 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-black tracking-tighter">
                <span style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif' }}>MJ </span>
                <span>VINZ CARLOS VILLARAIZ</span>
              </h3>
              <span className="text-white/20 font-mono text-[9px] mt-2 uppercase tracking-widest">© 2026 Digital Portfolio</span>
            </div>

            <div className="flex gap-12 font-mono text-[10px] tracking-widest">
              <a href="https://www.linkedin.com/in/mj-vinz-carlos-villaraiz-01bb60322/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-white/40">LINKEDIN</a>
              <a href="https://github.com/Emmjeyyyy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-white/40">GITHUB</a>
              <a href="https://www.instagram.com/emmmmjeyyy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-white/40">INSTAGRAM</a>
            </div>


          </div>
        </footer>

        {/* Custom CV Modal Viewer */}
        <AnimatePresence>
          {isCvOpen && (
            <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
                onClick={() => setIsCvOpen(false)}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-5xl h-[85vh] bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col z-10 shadow-2xl"
              >
                {/* Header Bar */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-black/50 backdrop-blur-sm">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Curriculum Vitae</span>
                    <span className="text-[10px] font-mono text-white/40">MJ VINZ CARLOS VILLARAIZ.pdf</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="/assets/CV/05-26-26/MJ%20VINZ%20CARLOS%20VILLARAIZ(with%20projects).pdf"
                      download
                      className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-white flex items-center justify-center"
                      title="Download PDF"
                    >
                      <FiDownload size={16} />
                    </a>
                    <button
                      onClick={() => setIsCvOpen(false)}
                      className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-white flex items-center justify-center"
                      title="Close"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 w-full bg-zinc-900 overflow-hidden">
                  <iframe
                    src="/assets/CV/05-26-26/MJ%20VINZ%20CARLOS%20VILLARAIZ(with%20projects).pdf#toolbar=0&navpanes=0"
                    className="w-full h-full border-none"
                    title="PDF Viewer"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
