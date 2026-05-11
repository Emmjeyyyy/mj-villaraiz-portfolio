"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <motion.img
          src="/assets/svg%20icons/MJLOGO%20noBG.svg"
          alt="Loading..."
          className="w-24 h-24 object-contain"
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
    </motion.div>
  );
}
