'use client';

import { useEffect, useRef, ReactNode } from 'react';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add(styles.active);
          }, delay);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass =
    direction === 'up'
      ? styles.dirUp
      : direction === 'down'
      ? styles.dirDown
      : direction === 'left'
      ? styles.dirLeft
      : direction === 'right'
      ? styles.dirRight
      : styles.dirScale;

  return (
    <div ref={ref} className={`${styles.reveal} ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
