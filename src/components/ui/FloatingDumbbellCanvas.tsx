'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function RotatingDumbbell() {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/dumbbell.glb');
  const scrollRef = useRef(0);

  useEffect(() => {
    // Traverse scene to set material metallic/roughness properties
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((mat) => {
          if (mat && 'metalness' in mat) {
            (mat as THREE.MeshStandardMaterial).metalness = 0.95;
            (mat as THREE.MeshStandardMaterial).roughness = 0.2;
          }
        });
      }
    });

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scene]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Base slow spin plus scroll driven rotation
      meshRef.current.rotation.y += delta * 0.4 + (scrollRef.current * 0.0008);
      meshRef.current.rotation.x = Math.sin(scrollRef.current * 0.002) * 0.3 + 0.2;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={2.2}
      position={[0, -0.1, 0]}
    />
  );
}

useGLTF.preload('/models/dumbbell.glb');

export default function FloatingDumbbellCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-4, -2, -2]} intensity={2.0} color="#E31837" />
      <RotatingDumbbell />
    </Canvas>
  );
}
