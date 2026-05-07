"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Wireframe } from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.z = time * 0.1;
    
    wireRef.current.rotation.y = -time * 0.3;
    wireRef.current.rotation.x = time * 0.15;
  });

  return (
    <group>
      {/* Central Core */}
      <Sphere ref={meshRef} args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="#ad0013"
          roughness={0.2}
          metalness={0.8}
          distort={0.4}
          speed={2}
          emissive="#ad0013"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Outer Wireframe */}
      <mesh ref={wireRef}>
        <octahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#ad0013" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Orbiting Rings */}
      <group rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.5, 0.01, 16, 100]} />
          <meshBasicMaterial color="#ad0013" transparent opacity={0.3} />
        </mesh>
      </group>
      
      <group rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[2.8, 0.01, 16, 100]} />
          <meshBasicMaterial color="#ad0013" transparent opacity={0.1} />
        </mesh>
      </group>

      {/* Point Lights */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff0000" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ad0013" />
    </group>
  );
}

export default function TechCore() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Core />
        </Float>
      </Canvas>
    </div>
  );
}
