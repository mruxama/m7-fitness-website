'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Dumbbell model with idle + scroll animation
function DumbbellModel({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const { scene } = useGLTF('/models/dumbbell.glb');
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            const m = mat as THREE.MeshStandardMaterial;
            m.metalness = 0.85;
            m.roughness = 0.15;
            m.envMapIntensity = 1.5;
          });
        } else if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.metalness = 0.85;
          mat.roughness = 0.15;
          mat.envMapIntensity = 1.5;
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const scroll = scrollY.current;

    // Idle float
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.06 - 0.1;
    // Idle subtle rotation
    groupRef.current.rotation.y = t * 0.12 + scroll * 0.002;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.04 + scroll * 0.001;
    // Scroll-driven z approach (desktop only)
    if (!isMobile) {
      groupRef.current.position.z = Math.min(scroll * 0.003, 1.5);
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={isMobile ? 1.4 : 1.8} />
    </group>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      {/* Crimson rim */}
      <pointLight position={[-4, 2, -3]} intensity={3} color="#DC2626" />
      {/* Cool fill */}
      <pointLight position={[4, -2, 2]} intensity={1} color="#ffffff" />
      {/* Bottom crimson bounce */}
      <pointLight position={[0, -3, 0]} intensity={0.8} color="#B91C1C" />
    </>
  );
}

export default function Hero3D() {
  const scrollY = useRef(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const onScroll = () => { scrollY.current = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dpr: [number, number] = isMobile ? [1, 1.5] : [1, 2];

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Lighting />
      <DumbbellModel scrollY={scrollY} />
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.3}
        scale={6}
        blur={2}
        color="#DC2626"
      />
      <Environment preset="studio" />
    </Canvas>
  );
}

useGLTF.preload('/models/dumbbell.glb');
