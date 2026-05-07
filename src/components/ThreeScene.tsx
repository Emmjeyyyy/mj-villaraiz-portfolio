"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere, AdaptiveEvents, AdaptiveDpr } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#4338ca"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-screen w-full">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        
        <EffectComposer enableNormalPass={false} multisampling={0}>
          <Bloom 
            luminanceThreshold={1} 
            mipmapBlur 
            intensity={0.5} 
            radius={0.3} 
          />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

        <AdaptiveEvents />
        <AdaptiveDpr pixelated />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
