"use client";

import React, { useEffect, useRef } from "react";

interface LiquidMetalBorderProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  innerBg?: string;
  borderWidth?: number;
}

export default function LiquidMetalBorder({
  children,
  className = "",
  borderRadius = "0px",
  innerBg = "black",
  borderWidth = 2
}: LiquidMetalBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mount: any;

    const initShader = async () => {
      try {
        // Use new Function to bypass Turbopack's attempt to resolve the URL import
        const { liquidMetalFragmentShader, ShaderMount } = await new Function('url', 'return import(url)')("https://esm.sh/@paper-design/shaders");

        if (containerRef.current) {
          mount = new ShaderMount(
            containerRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 1.0,
              u_softness: 0.6,
              u_shiftRed: 0.0,
              u_shiftBlue: 0.0,
              u_distortion: 0.1,
              u_contour: 0,
              u_angle: 190,
              u_scale: 2.5,
              u_shape: 0,
              u_offsetX: 0.0,
              u_offsetY: 0.0
            },
            undefined,
            0.6
          );
        }
      } catch (error) {
        console.error("Failed to load LiquidMetal shader:", error);
      }
    };

    initShader();

    return () => {
      if (mount && mount.dispose) {
        mount.dispose();
      }
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ borderRadius, padding: `${borderWidth}px` }}>
      {/* The shader container as a background for the border */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 pointer-events-none"
        id="liquid-metal"
      />
      {/* The content container that masks the center, leaving only the border visible */}
      <div
        className="relative z-10 w-full h-full"
        style={{ borderRadius: `calc(${borderRadius} - ${borderWidth}px)`, background: innerBg }}
      >
        {children}
      </div>
    </div>
  );
}
