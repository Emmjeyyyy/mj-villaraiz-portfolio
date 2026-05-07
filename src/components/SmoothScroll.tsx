"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LenisScrollTriggerSync() {
  // Feed every Lenis scroll frame into GSAP ScrollTrigger
  useLenis(ScrollTrigger.update);

  useEffect(() => {
    // Give layout time to settle, then refresh all triggers
    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(timer);
  }, []);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true, wheelMultiplier: 1 }}>
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
