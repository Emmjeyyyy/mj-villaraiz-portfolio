"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[3/2] border border-white/10 bg-black overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
              {/* This is where your image goes. Using the generated placeholder for now. */}
              <img
                src="/assets/pfp/skeleton%20chrome.jpg"
                alt="MJ Villaraiz"
                className="w-full h-full object-contain scale-100 group-hover:scale-120 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative metallic elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-white/20 z-0" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-white/20 z-0" />
          </motion.div>

          {/* Right: Info Container */}
          <div className="flex flex-col items-start self-start pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-1">MJ VILLARAIZ</h2>
              <h3 className="text-xl md:text-2xl font-mono text-white/40 tracking-[0.2em] uppercase mb-8">Full Stack Developer</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col gap-4 max-w-lg"
            >
              {[
                { id: '01', text: <>Learning <span className="text-white">Laravel</span>, <span className="text-white">React</span>, and <span className="text-white">Three.js</span> for 3D web development.</> },
                { id: '02', text: <>Creating small game projects and immersive interactive experiences.</> },
                { id: '03', text: <span className="italic">"I have a habit of turning <span className="not-italic text-white">bugs into features</span>."</span> }
              ].map((item) => (
                <div key={item.id} className="grid grid-cols-[2.5rem_1fr] gap-4 group pb-4 border-b border-white/[0.03] last:border-0">
                  <span className="font-mono text-[9px] text-white/40 mt-1.5 group-hover:text-white/80 transition-colors">{item.id}</span>
                  <p className="text-sm md:text-[15px] text-white/50 leading-relaxed font-light group-hover:text-white transition-all duration-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase block mb-4">The Arsenal</span>
            <h2 className="text-5xl font-black tracking-tighter">SKILLS</h2>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {['React', 'Next.js', 'Three.js', 'GSAP', 'Tailwind', 'TypeScript', 'Node.js', 'PostgreSQL', 'Figma'].map((skill) => (
              <div key={skill} className="py-4 border-b border-white/10 flex justify-between items-end group cursor-crosshair">
                <span className="text-lg font-bold group-hover:chrome-text transition-all">{skill}</span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Expertise</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <Experience />
      </section>

      <Projects />

      {/* Other Section */}
      <section id="other" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter opacity-10 mb-8">CONTACT</h2>
          <p className="text-xl text-white/60 mb-12">Interested in collaborating? Let's connect.</p>
          <a href="mailto:hello@mjvillaraiz.com" className="inline-block px-12 py-4 border border-white text-sm font-mono tracking-[0.3em] hover:bg-white hover:text-black transition-all">
            INITIATE_CONTACT
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-black tracking-tighter">MJ VILLARAIZ</h3>
            <span className="text-white/20 font-mono text-[9px] mt-2 uppercase tracking-widest">© 2026 Digital Portfolio</span>
          </div>

          <div className="flex gap-12 font-mono text-[10px] tracking-widest">
            <a href="#" className="hover:text-white transition-colors text-white/40">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors text-white/40">GITHUB</a>
            <a href="#" className="hover:text-white transition-colors text-white/40">TWITTER</a>
          </div>

          <div className="hidden md:block text-right font-mono text-[9px] text-white/20 leading-tight">
            SYSTEM_STATUS: ONLINE<br />
            RENDER_ENGINE: NEXT_JS_15
          </div>
        </div>
      </footer>
    </main>
  );
}
