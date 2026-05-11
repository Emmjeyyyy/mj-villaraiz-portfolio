"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  finished?: boolean;
}

export default function Loader({ finished }: LoaderProps) {

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <motion.img
          layoutId="main-logo"
          src="/assets/svg%20icons/MJLOGO%20noBG.svg"
          alt="Loading..."
          className="w-24 h-24 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={finished ? { 
            opacity: 1, 
            scale: 1 
          } : {
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={finished ? { duration: 0.5 } : {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
