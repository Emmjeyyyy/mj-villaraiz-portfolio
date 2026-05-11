"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'OTHER', href: '#other' },
];


export default function Navbar({ isLoading }: { isLoading: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem && lenis) {
      lenis.scrollTo(elem, { offset: 0, duration: 1.2 });
    } else {
      elem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md' : 'py-8 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-0.5">
          {!isLoading && (
            <motion.img
              layoutId="main-logo"
              src="/assets/svg%20icons/MJLOGO%20noBG.svg"
              alt="MJ Logo"
              className="w-11 h-11 object-contain"
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            />
          )}
        </div>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[10px] font-mono tracking-[0.3em] text-white/50 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="md:hidden">
          {/* Simple mobile menu toggle could go here */}
          <span className="text-[10px] font-mono text-white/50 underline">MENU</span>
        </div>
      </div>
    </motion.nav>
  );
}
