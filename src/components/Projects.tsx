"use client";
import React, { useRef, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { useLenis } from 'lenis/react';
import { projects, Project } from '@/data/projects';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const LERP_FACTOR = 0.08; // Adjusted for better responsiveness

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const scrollbarStyles = `
  /* Global and Modal Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    transition: background 0.3s ease;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  /* Firefox support */
  html, .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
  }
`;

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
  useLenis(() => {
    if (isDragging.current) return;

    const trigger = triggerRef.current;
    const section = sectionRef.current;
    if (!trigger || !section) return;

    // Use getBoundingClientRect to get accurate position relative to viewport
    const rect = trigger.getBoundingClientRect();
    const triggerHeight = trigger.offsetHeight - window.innerHeight;

    // Amount the trigger has scrolled past the top of the viewport
    const scrolled = -rect.top;

    // Added a slight delay to allow the 'MY PROJECTS' title to breathe, and an endDelay to rest on the final card
    const delay = window.innerHeight * 0.3;
    const endDelay = window.innerHeight * 0.6; // Holds the last card in place before releasing
    const scrollableHeight = triggerHeight - delay - endDelay;
    const progress = Math.max(0, Math.min(1, (scrolled - delay) / scrollableHeight));

    // Find the project cards inside the section
    const cards = section.getElementsByClassName('project-card');
    const lastCard = cards[cards.length - 1] as HTMLElement;

    if (lastCard) {
      const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2;
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
    const delay = window.innerHeight * 0.3;
    const endDelay = window.innerHeight * 0.6;
    const scrollableHeight = triggerHeight - delay - endDelay;
    const progress = Math.max(0, Math.min(1, (newScroll - trigger.offsetTop - delay) / scrollableHeight));

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
  };

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isMouseInProjectSection, setIsMouseInProjectSection] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Local Lenis for Modal
  useEffect(() => {
    if (!selectedProject) return;

    let localLenis: Lenis | null = null;
    let rafId: number;

    const timeout = setTimeout(() => {
      if (!modalContentRef.current) return;

      localLenis = new Lenis({
        wrapper: modalContentRef.current,
        lerp: 0.1,
        duration: 1.2,
        syncTouch: true,
        smoothWheel: true,
      });

      function raf(time: number) {
        localLenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }, 200); // Increased timeout for stability

    return () => {
      clearTimeout(timeout);
      if (localLenis) {
        localLenis.destroy();
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [selectedProject]);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    setHoveredProject(null); // Clear hover state on click
    lenis?.stop();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    lenis?.start();
    document.body.style.overflow = 'unset';
  };

  return (
    <div
      id="projects"
      ref={triggerRef}
      className="relative h-[3500vh] bg-black scroll-mt-0 overflow-visible"
      onMouseEnter={() => setIsMouseInProjectSection(true)}
      onMouseMove={() => !isMouseInProjectSection && setIsMouseInProjectSection(true)}
      onMouseLeave={() => setIsMouseInProjectSection(false)}
    >
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoveredProject ? 90 : 12,
          height: hoveredProject ? 90 : 12,
          opacity: isMouseInProjectSection && !selectedProject ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <AnimatePresence>
          {hoveredProject && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-white text-[12px] font-bold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              style={{ mixBlendMode: 'normal' }}
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="sticky top-0 h-screen overflow-hidden"
        animate={{
          opacity: selectedProject ? 0.3 : 1,
          scale: selectedProject ? 0.95 : 1,
          filter: selectedProject ? 'blur(10px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div
          ref={sectionRef}
          className="h-full flex flex-row items-center w-fit will-change-transform transition-colors duration-300"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Header Card */}
          <div className="w-[100vw] flex-shrink-0 flex flex-col justify-center items-center pointer-events-none select-none">
            <h2
              className="text-[10vw] font-black tracking-tight leading-none m-0 text-center"
              style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              MY<br />
              <span className="text-white" style={{ WebkitTextStroke: '4.5px white', color: 'transparent' }}>
                PROJECTS
              </span>
            </h2>
          </div>

          {/* Project Cards */}
          {projects.map((project) => {
            const firstImage = project.images && project.images.length > 0
              ? project.images[0]
              : `1.jpg`;
            const imagePath = `/assets/project-imgs/${project.imageFolder}/${firstImage}`;

            return (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                className="project-card aspect-[1.85/1] h-[50vh] md:h-[65vh] flex-shrink-0 mr-[10vw] relative group overflow-hidden select-none cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleCardClick(project)}
              >
                <motion.div
                  layoutId={`bg-${project.id}`}
                  className="absolute inset-0 bg-zinc-900 border border-white/10 group-hover:border-white/30"
                />

                {/* Card Image Background */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000">
                  <img
                    src={imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Title - Stays at Bottom Left */}
                <div className="absolute bottom-10 left-10 md:bottom-13 md:left-16 pointer-events-none">
                  <motion.h3
                    layoutId={`title-${project.id}`}
                    className="text-5xl md:text-7xl font-black tracking-tight uppercase text-white"
                  >
                    <span className="inline-block [-webkit-text-stroke:1.5px_transparent] transition-all duration-700 group-hover:text-transparent group-hover:[-webkit-text-stroke:1.5px_#fff]">
                      {project.title}
                    </span>
                  </motion.h3>
                </div>
              </motion.div>
            );
          })}

          <div className="w-[10vw] flex-shrink-0" />
        </div>
      </motion.div>

      {/* Expanded Project View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={closeModal}
            />

            <motion.div
              layoutId={`card-${selectedProject.id}`}
              ref={modalContentRef}
              className="relative bg-zinc-950 w-full h-full overflow-y-auto custom-scrollbar flex flex-col"
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <motion.div
                layoutId={`bg-${selectedProject.id}`}
                className="absolute inset-0 bg-zinc-950"
              />

              {/* Fixed Close Button always on top-right */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={closeModal}
                className="group flex flex-col items-center gap-2 fixed top-8 right-8 md:top-12 md:right-12 z-50"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <FiX size={24} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Close</span>
              </motion.button>

              {/* Scrollable Container */}
              <div className="relative w-full z-10">
                {/* Expanded Header - Now part of the scroll flow */}
                <div className="p-8 md:p-16 flex justify-between items-end pr-28 md:pr-40">
                  <div className="max-w-4xl">
                    <motion.h2
                      layoutId={`title-${selectedProject.id}`}
                      className="text-6xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.85]"
                    >
                      {selectedProject.title}
                    </motion.h2>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className="max-w-[1400px] mx-auto p-8 md:p-16 pt-0 pb-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    {/* Left Side: Meta & Info */}
                    <div className="lg:col-span-4 space-y-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-6">Description</h4>
                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                          {selectedProject.description || "Project details arriving soon."}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-8">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack?.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {selectedProject.url && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-6">Discovery</h4>
                          <a
                            href={selectedProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 text-white hover:gap-6 transition-all duration-500 group/link"
                          >
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">
                              {selectedProject.url.includes("github.com") ? "View Source" : "Launch Project"}
                            </span>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all duration-500">
                              <FiExternalLink size={16} />
                            </div>
                          </a>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Side: Gallery */}
                    <div className="lg:col-span-8">
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-10">Preview</h4>
                      
                      {selectedProject.imageCount > 0 ? (
                        <div className="relative group w-full">
                          {/* Inner container to hold buttons and the slider frame */}
                          <div className="relative flex items-center justify-center w-full">
                            {/* Left Nav Button */}
                            {selectedProject.imageCount > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageIndex((prev) => (prev === 0 ? selectedProject.imageCount - 1 : prev - 1));
                                }}
                                className="absolute -left-6 md:-left-16 w-12 h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-10"
                              >
                                <FiChevronLeft size={24} />
                              </button>
                            )}

                            {/* Image Container with Slider Animation */}
                            <div className="relative aspect-video overflow-hidden rounded-sm w-full">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={activeImageIndex}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ duration: 0.3 }}
                                  className="w-full h-full flex items-center justify-center"
                                >
                                  {selectedProject.images && selectedProject.images[activeImageIndex] ? (
                                    <img
                                      src={`/assets/project-imgs/${selectedProject.imageFolder}/${selectedProject.images[activeImageIndex]}`}
                                      alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                                      className="w-full h-full object-contain"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/1280x720/000000/FFFFFF?text=Image+Coming+Soon';
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src={`/assets/project-imgs/${selectedProject.imageFolder}/${activeImageIndex + 1}.jpg`}
                                      alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                                      className="w-full h-full object-contain"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/1280x720/000000/FFFFFF?text=Image+Coming+Soon';
                                      }}
                                    />
                                  )}
                                </motion.div>
                              </AnimatePresence>
                            </div>

                            {/* Right Nav Button */}
                            {selectedProject.imageCount > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageIndex((prev) => (prev === selectedProject.imageCount - 1 ? 0 : prev + 1));
                                }}
                                className="absolute -right-6 md:-right-16 w-12 h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-10"
                              >
                                <FiChevronRight size={24} />
                              </button>
                            )}
                          </div>

                          {/* Pagination Indicators */}
                          {selectedProject.imageCount > 1 && (
                            <div className="flex justify-between items-center mt-6">
                              {/* Slide Count Counter */}
                              <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                                {activeImageIndex + 1} / {selectedProject.imageCount}
                              </span>

                              {/* Dot Indicators */}
                              <div className="flex gap-2">
                                {Array.from({ length: selectedProject.imageCount }).map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={() => setActiveImageIndex(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${
                                      i === activeImageIndex 
                                        ? "w-8 bg-white" 
                                        : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="aspect-video bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-4 opacity-20">
                          <div className="w-12 h-[1px] bg-white" />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-center">Visual records pending</span>
                          <div className="w-12 h-[1px] bg-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background ID Watermark Removed */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

