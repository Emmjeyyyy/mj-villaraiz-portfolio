"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiEye } from 'react-icons/fi';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdf: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "ReactJS For Beginners",
    issuer: "Simplilearn",
    date: "2026",
    image: "/assets/certs/reactjs/reactjs.png",
    pdf: "/assets/certs/reactjs/reactjs.pdf",
    skills: ["React.js", "Component Design", "State Management"]
  },
  {
    id: 2,
    title: "Basics of Web Scraping",
    issuer: "Simplilearn",
    date: "2026",
    image: "/assets/certs/webscraping/webscraping.png",
    pdf: "/assets/certs/webscraping/webscraping.pdf",
    skills: ["Python", "BeautifulSoup", "Data Harvesting", "Automation"]
  },
  {
    id: 3,
    title: "Product Development & Management",
    issuer: "Udemy",
    date: "2026",
    image: "/assets/certs/product-development/Product_Development_and_Management.jpg",
    pdf: "/assets/certs/product-development/Product_Development_and_Management.pdf",
    skills: ["Agile Strategy", "Lifecycle Management", "Product Planning"]
  },
  {
    id: 4,
    title: "Python Complete Course",
    issuer: "Udemy",
    date: "2026",
    image: "/assets/certs/python-complete-course/Python_Complet_Course_For_Beginners.jpg",
    pdf: "/assets/certs/python-complete-course/Python_Complet_Course_For_Beginners.pdf",
    skills: ["Core Python", "Algorithm Design", "Scripting basics"]
  }
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="pb-32 bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4"
        >
          <h2 className="text-6xl md:text-8xl font-playfair tracking-tighter uppercase">
            Certifications
          </h2>
        </motion.div>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden min-h-[220px]"
            >
              {/* External Link Icon - Top Right of Card */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 z-10"
                title="Verify Certificate"
              >
                <FiExternalLink size={12} />
              </a>

              {/* Left Side: Preview Image Container */}
              <div 
                className="group/img relative w-full md:w-[38%] aspect-[1.5/1] md:aspect-auto md:h-full min-h-[160px] overflow-hidden bg-black flex items-center justify-center cursor-pointer border-b md:border-b-0 md:border-r border-white/5"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain opacity-100 group-hover/img:opacity-40 group-hover/img:scale-[1.03] transition-all duration-700 p-2 md:p-3"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0.1';
                  }}
                />
                <div className="absolute inset-0 bg-transparent group-hover/img:bg-black/45 transition-colors duration-500 rounded-l-2xl" />
                
                {/* Floating Eye indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:scale-115 transition-all">
                    <FiEye size={18} />
                  </div>
                </div>
              </div>

              {/* Right Side: Core details */}
              <div className="w-full md:w-[62%] p-6 md:p-8 flex flex-col justify-center">
                <div>
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">{cert.date}</span>
                  
                  <h3 
                    className="text-lg md:text-xl font-bold tracking-tight uppercase text-white group-hover:text-white transition-colors mt-2 mb-1 cursor-pointer pr-8"
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    {cert.title}
                  </h3>
                  
                  <div className="text-white/40 font-mono text-[10px] uppercase tracking-[0.15em] mb-6">
                    {cert.issuer}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[9px] font-mono text-white/30 uppercase tracking-tight hover:bg-white/10 hover:text-white/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-50 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <FiX size={20} />
            </button>

            {/* Certificate Preview Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate Zoom"
                className="max-w-full max-h-full object-contain rounded-md shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
