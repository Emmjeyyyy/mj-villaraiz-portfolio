"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LiquidMetalBorder from './LiquidMetalBorder';

export interface Button3DProps {
  label?: string;
  elevation?: number;
  pressInset?: number;
  radius?: number;
  motion?: number; // duration in ms
  surfaceColor?: string;
  sideColor?: string;
  textColor?: string;
  borderWidth?: number;
  glareOpacity?: number;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function Button3D({
  label = 'Click Me',
  elevation = 2,
  pressInset = 5,
  radius = 14,
  motion: motionDuration = 160,
  surfaceColor = '#181818',
  sideColor = '#494949',
  textColor = '#e5e7eb',
  borderWidth = 3,
  glareOpacity = 0.075,
  disabled = false,
  type = "button",
  className = "",
  onClick,
  size = 'md'
}: Button3DProps) {
  const sizeClasses = {
    sm: 'px-8 py-2 text-[10px]',
    md: 'px-12 py-4 text-xs',
    lg: 'px-16 py-6 text-sm'
  };

  return (
    <div className={`relative inline-block select-none ${className}`} style={{ borderRadius: `${radius}px` }}>
      {/* The Bottom/Pedestal (The physical side of the button) */}
      <div
        className="absolute w-full h-full"
        style={{
          backgroundColor: sideColor,
          top: `${elevation}px`,
          borderRadius: `${radius}px`
        }}
      />

      {/* The Top/Face (The interactive surface) */}
      <motion.button
        type={type}
        disabled={disabled}
        onClick={onClick}
        initial={false}
        animate={{
          y: -elevation
        }}
        whileHover={!disabled ? {
          y: -elevation + 2
        } : {}}
        whileTap={!disabled ? {
          y: pressInset - elevation,
          boxShadow: 'inset 0 2px 0 rgba(0,0,0,0.4)',
          filter: 'brightness(0.8)'
        } : {}}
        transition={{ duration: motionDuration / 1000 }}
        className={`relative w-full overflow-hidden font-bold uppercase tracking-widest whitespace-nowrap focus:outline-none select-none`}
        style={{
          backgroundColor: 'transparent',
          color: textColor,
          cursor: disabled ? 'not-allowed' : 'pointer',
          borderRadius: `${radius}px`,
          outline: 'none',
          WebkitTapHighlightColor: 'transparent',
          padding: 0
        }}
      >
        <LiquidMetalBorder
          borderRadius={`${radius}px`}
          innerBg={surfaceColor}
          borderWidth={borderWidth}
          className="w-full h-full"
        >
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none"
            style={{ opacity: glareOpacity }}
          />
          <div className={`w-full ${sizeClasses[size]} flex items-center justify-center relative z-10`}>
            <span
              className="bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #E2E8F0 45%, #FFFFFF 50%, #94A3B8 55%, #64748B 100%)',
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {label}
            </span>
          </div>
        </LiquidMetalBorder>
      </motion.button>
    </div>
  );
}
