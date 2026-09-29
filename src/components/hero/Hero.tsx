'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './Hero.module.css';

const HERO_HIGHLIGHTS = [
  {
    icon: '/icons/hero-clock.svg',
    stat: '19',
    label: 'Hours Daily',
  },
  {
    icon: '/icons/hero-solar.svg',
    stat: '100%',
    label: 'Power Backup',
  },
  {
    icon: '/icons/hero-barbell.svg',
    stat: 'Premium',
    label: 'Equipment',
  },
  {
    icon: '/icons/hero-trainer.svg',
    stat: 'Expert',
    label: 'Trainers',
  },
  {
    icon: '/icons/hero-timings.svg',
    stat: 'Men | Ladies | Co-Ed',
    label: 'Dedicated Timings',
  },
];

const SLIDES = [
  {
    id: 0,
    tag: 'M7 FITNESS LAHORE',
    line1: 'STRONGER',
    line2: 'THAN',
    line3: 'YESTERDAY',
    subtitle: 'Premium Training. Dedicated Community. Unstoppable You.',
    ctaPrimary: 'EXPLORE MEMBERSHIPS',
    primaryLink: '/membership',
    ctaSecondary: 'BOOK A VISIT',
  },
  {
    id: 1,
    tag: 'CLEAN SOLAR POWER',
    line1: 'ZERO LOAD',
    line2: 'SHEDDING',
    line3: '100% SOLAR',
    subtitle: 'Uninterrupted power for heavy training, full AC cooling, and audio pumps.',
    ctaPrimary: 'VIEW FACILITIES',
    primaryLink: '/facilities',
    ctaSecondary: 'BOOK A VISIT',
  },
  {
    id: 2,
    tag: 'DEDICATED SHIFTS',
    line1: 'EXCLUSIVE',
    line2: 'LADIES ONLY',
    line3: '10AM - 4:30PM',
    subtitle: 'Private & comfortable shift for women with female certified trainers.',
    ctaPrimary: 'CHECK SHIFT TIMINGS',
    primaryLink: '/shifts',
    ctaSecondary: 'BOOK A VISIT',
  },
  {
    id: 3,
    tag: 'VIP AMENITIES',
    line1: 'VIP RECOVERY',
    line2: '& FREE',
    line3: 'KICKBOXING',
    subtitle: 'Specialized recovery zone, massage perks, and expert combat training.',
    ctaPrimary: 'EXPLORE PACKAGES',
    primaryLink: '/membership',
    ctaSecondary: 'BOOK A VISIT',
  },
  {
    id: 4,
    tag: 'ALWAYS OPEN',
    line1: '19 HOURS',
    line2: 'DAILY ACCESS',
    line3: '6AM - 1AM',
    subtitle: 'Train on your terms, morning, afternoon, or late night.',
    ctaPrimary: 'JOIN ON WHATSAPP',
    primaryLink: '/contact',
    ctaSecondary: 'BOOK A VISIT',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = SLIDES[activeSlide];

  return (
    <section className={styles.hero} aria-label="Hero Section">
      {/* Background Image & Motion */}
      <div className={styles.bgWrapper}>
        <Image
          src="/hero-banner.png"
          alt="M7 Fitness Gym Interior"
          fill
          priority
          quality={98}
          className={styles.bgImage}
        />
        <div className={styles.bgVignette} />
        <div className={styles.redGlowOverlay} />

        {/* Floating Particles */}
        <div className={styles.particlesWrap} aria-hidden="true">
          <div className={`${styles.particle} ${styles.p1}`} />
          <div className={`${styles.particle} ${styles.p2}`} />
          <div className={`${styles.particle} ${styles.p3}`} />
          <div className={`${styles.particle} ${styles.p4}`} />
          <div className={`${styles.particle} ${styles.p5}`} />
        </div>
      </div>

      <div className={styles.container}>
        {/* Left Side Content */}
        <div className={`${styles.mainContent} ${isTransitioning ? styles.slideFadeOut : styles.slideFadeIn}`}>
          {/* Sub-badge */}
          <div className={styles.badge}>
            <Image src="/icons/flame.svg" alt="" width={16} height={16} className={styles.flameIcon} />
            <span className={styles.badgeText}>{current.tag}</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.line1}>{current.line1}</span>
            <br />
            <span className={styles.line2}>{current.line2}</span>
            <br />
            <span className={styles.line3}>
              {current.line3}
              <span className={styles.titleGlowBar} />
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>{current.subtitle}</p>

          {/* Action CTAs */}
          <div className={styles.ctaGroup}>
            <Link href={current.primaryLink} className={styles.primaryBtn}>
              <span>{current.ctaPrimary}</span>
              <Image src="/icons/arrow-right.svg" alt="" width={16} height={16} className={styles.btnIcon} />
              <div className={styles.btnShine} />
            </Link>

            <a
              href={buildWhatsAppUrl(WA_MESSAGES.visit)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <Image src="/icons/visit-icon.svg" alt="" width={18} height={18} className={styles.visitIcon} />
              <span>BOOK A VISIT</span>
            </a>
          </div>
        </div>

        {/* Right Functional Clickable Vertical Slider Indicator */}
        <div className={styles.verticalDots} aria-label="Hero slider pagination">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`${styles.dotBtn} ${activeSlide === idx ? styles.dotBtnActive : ''}`}
              aria-label={`Switch to slide ${slide.tag}`}
              title={slide.tag}
            >
              <span className={styles.dotNum}>{`0${idx + 1}`}</span>
              <span className={styles.dotDot} />
              <span className={styles.dotTooltip}>{slide.tag}</span>
            </button>
          ))}
        </div>

        {/* Bottom Feature Highlights Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.highlightsGrid}>
            {HERO_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className={styles.highlightItem}>
                <div className={styles.iconBox}>
                  <Image src={item.icon} alt="" width={26} height={26} className={styles.highlightIcon} />
                  <div className={styles.iconBoxGlow} />
                </div>
                <div className={styles.highlightText}>
                  <div className={styles.statNum}>{item.stat}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
                {idx < HERO_HIGHLIGHTS.length - 1 && <div className={styles.divider} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
