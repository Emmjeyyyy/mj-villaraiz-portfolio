"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  useEffect(() => {
    // Disable scrolling when the loader is active
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when the loader finishes/unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.1, 1]
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: {
            duration: 1.5,
            repeat: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }
        }}
        onAnimationComplete={() => {
          onComplete();
        }}
      >
        <motion.img
          layoutId="main-logo"
          src="/assets/svg%20icons/MJLOGO%20noBG%20new.svg"
          alt="Loading..."
          className="w-24 h-24 object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
