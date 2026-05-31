"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Text3D,
  Center,
  Environment,
  Html,
} from '@react-three/drei';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Letter({ char, position, index, startAnimation }: { char: string, position: [number, number, number], index: number, startAnimation: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useThree((state) => state.mouse);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Initial state: Laying flat and pushed back
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2;
      meshRef.current.position.z = -5;
      meshRef.current.scale.set(0, 0, 0);
    }
  }, []);

  useEffect(() => {
    if (!startAnimation || !meshRef.current) return;

    // Entrance Animation
    gsap.to(meshRef.current.rotation, {
      x: 0,
      duration: 1.2,
      delay: index * 0.1, // Reduced delay since loader already handled the wait
      ease: "power4.out"
    });

    gsap.to(meshRef.current.position, {
      z: 0,
      duration: 1.2,
      delay: index * 0.1,
      ease: "power4.out"
    });

    gsap.to(meshRef.current.scale, {
      x: 1, y: 1, z: 1,
      duration: 0.8,
      delay: index * 0.1,
      ease: "back.out(1.7)",
      onComplete: () => setIntroFinished(true)
    });
  }, [index, startAnimation]);

  useFrame(() => {
    if (!meshRef.current || !introFinished) return;

    // Only follow cursor after intro is done
    const targetRotationX = -mouse.y * 0.12;
    const targetRotationY = mouse.x * 0.12;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
  });

  return (
    <Text3D
      ref={meshRef}
      font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
      size={0.9}
      height={0.4}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.08}
      bevelSize={0.03}
      bevelOffset={0}
      bevelSegments={5}
      position={position}
    >
      {char}
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={1}
        roughness={0.32}
        reflectivity={1}
        clearcoat={1}
      />
    </Text3D>
  );
}

function EnvRotation({ y, x = 0 }: { y: number; x?: number }) {
  const scene = useThree((state) => state.scene);
  useEffect(() => {
    if (scene.environmentRotation) {
      scene.environmentRotation.set(x, y, 0);
    }
  }, [scene, y, x]);
  return null;
}

function Scene({ text, startAnimation }: { text: string, startAnimation: boolean }) {
  const chars = text.split('');
  const groupRef = useRef<THREE.Group>(null!);
  const { viewport } = useThree();
  
  // Calculate responsive scale based on viewport width to ensure text fits on mobile
  const baseScale = 1.8;
  const approxTextWidth = 7.5; // Approximate width of "EMMJEYYYY" in three.js units
  const targetWidth = viewport.width * 0.9; // Use 90% of the screen width
  const scale = Math.min(baseScale, targetWidth / approxTextWidth);




  // Custom spacing map for EMMJEYYYY to ensure "equal space" visually
  // These offsets are hand-tuned for the Helvetiker Bold font
  const offsets = useMemo(() => {
    const spacing = 1.35;
    let currentX = 0;
    const pos: number[] = [];

    // Manually adjust for character widths
    chars.forEach((char, i) => {
      pos.push(currentX);
      if (char === 'M') currentX += 1.05;
      else if (char === 'J') currentX += 0.7; // Calibrated for size 0.9
      else if (char === 'E') currentX += 0.8;
      else currentX += 0.85;
    });

    // Calculate total width to center manually
    const totalWidth = currentX;
    return pos.map(p => p - totalWidth / 2 + 0.1); // Adjusted +0.1 to move slightly more to the left
  }, [chars]);

  useEffect(() => {
    if (!groupRef.current) return;

    // Scroll Animation: Letters fly back as we scroll away from Hero
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      }
    });

    tl.to(groupRef.current.position, {
      z: -15,
      y: 2,
      ease: "power2.inOut"
    })
      .to(groupRef.current.rotation, {
        x: -0.4,
        ease: "power2.inOut"
      }, 0);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.0} color="#ffffff" />
      <pointLight position={[-5, 2, 5]} intensity={4.0} color="#ffffff" />

      <group ref={groupRef} position={[0, 0, 0]} scale={[scale, scale, scale]}>
        {chars?.map((char, i) => (
          <Letter
            key={i}
            char={char}
            position={[offsets[i], -0.3, 0]}
            index={i}
            startAnimation={startAnimation}
          />
        ))}
      </group>
      {/* apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
      <Environment preset="studio" />
      <EnvRotation y={49.5} x={10.3} />
    </>
  );
}

export default function Experience({ text = "EMMJEYYYY", startAnimation = false }: { text?: string, startAnimation?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full bg-black">
      <Suspense fallback={<div className="w-full h-full bg-black" />}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 45 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 2]}
          style={{ background: 'black' }}
        >
          <color attach="background" args={['#000000']} />
          <Scene text={text} startAnimation={startAnimation} />
        </Canvas>
      </Suspense>
    </div>
  );
}
