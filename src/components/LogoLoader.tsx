"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoLoaderProps {
  className?: string;
  size?: number;
}

export default function LogoLoader({ className = "", size = 64 }: LogoLoaderProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.img
        src="/assets/svg%20icons/MJLOGO%20noBG.svg"
        alt="Loading..."
        style={{ width: size, height: size }}
        className="object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
