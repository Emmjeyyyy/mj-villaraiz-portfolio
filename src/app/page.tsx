"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left: Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[4/3] border border-white/10 bg-white/[0.02] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
              {/* This is where your image goes. Using the generated placeholder for now. */}
              <img 
                src="file:///C:/Users/USER/.gemini/antigravity/brain/b738116b-f177-4221-9f3f-0a51f0c92f9b/profile_placeholder_chrome_1778131933958.png" 
                alt="MJ Villaraiz"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative metallic elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-white/20 z-0" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-white/20 z-0" />
          </motion.div>

          {/* Right: Info Container */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase mb-6 block">Biography_v1.0</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">MJ VILLARAIZ</h2>
              <h3 className="text-xl md:text-2xl font-mono text-white/40 tracking-[0.2em] uppercase mb-12">Full Stack Developer</h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-8 max-w-lg"
            >
              <div className="flex gap-6 group">
                <span className="font-mono text-[10px] text-white/20 mt-1">01</span>
                <p className="text-sm md:text-base text-white/60 leading-relaxed font-light group-hover:text-white transition-colors">
                  Learning <span className="text-white">Laravel</span>, <span className="text-white">React</span>, and <span className="text-white">Three.js</span> for interactive 3D web development.
                </p>
              </div>

              <div className="flex gap-6 group">
                <span className="font-mono text-[10px] text-white/20 mt-1">02</span>
                <p className="text-sm md:text-base text-white/60 leading-relaxed font-light group-hover:text-white transition-colors">
                  Creating small game projects and immersive interactive experiences.
                </p>
              </div>

              <div className="flex gap-6 group">
                <span className="font-mono text-[10px] text-white/20 mt-1">03</span>
                <p className="text-sm md:text-base text-white/60 leading-relaxed font-light italic group-hover:text-white transition-colors">
                  "I have a habit of turning <span className="not-italic text-white">bugs into features</span>."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Projects />


      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
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

      {/* Other Section */}
      <section id="other" className="relative z-10 py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
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
