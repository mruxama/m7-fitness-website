'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './FloatingDumbbell3D.module.css';

const CanvasContainer = dynamic(() => import('./FloatingDumbbellCanvas'), {
  ssr: false,
});

export default function FloatingDumbbell3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container} title="3D M7 Dumbbell (Scroll to rotate)" aria-label="3D Floating Dumbbell">
      <div className={styles.inner}>
        <CanvasContainer />
      </div>
      <div className={styles.glow} />
    </div>
  );
}
