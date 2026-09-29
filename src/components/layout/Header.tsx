'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import { getInitialTheme, applyTheme } from '@/lib/theme';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/facilities', label: 'FACILITIES' },
  { href: '/membership', label: 'MEMBERSHIP' },
  { href: '/merchandise', label: 'PRODUCTS' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTheme(getInitialTheme());
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Official Logo */}
          <Link href="/" className={styles.logo} onClick={closeMobile} aria-label="M7 Fitness Home">
            <Image
              src="/logo-transparent.png"
              alt="M7 Fitness Logo"
              width={140}
              height={44}
              priority
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation links */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className={styles.actions}>
            <button
              className={styles.themeBtn}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <Image
                src={theme === 'dark' ? '/icons/sun.svg' : '/icons/moon.svg'}
                alt="Theme Toggle"
                width={18}
                height={18}
              />
            </button>

            <a
              href={buildWhatsAppUrl(WA_MESSAGES.join)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.joinBtn}
            >
              JOIN NOW
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Image
                src={mobileOpen ? '/icons/close.svg' : '/icons/menu.svg'}
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`} aria-hidden={!mobileOpen}>
        <div className={styles.mobileHeader}>
          <Image src="/logo-transparent.png" alt="M7 Fitness" width={130} height={40} />
          <button className={styles.closeBtn} onClick={closeMobile} aria-label="Close menu">
            <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
        <nav className={styles.mobileNavContent} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={closeMobile}>
              {link.label}
            </Link>
          ))}
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.join)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileJoinBtn}
            onClick={closeMobile}
          >
            JOIN NOW ON WHATSAPP
          </a>
        </nav>
      </div>

      {/* Overlay Backdrop */}
      {mobileOpen && <div className={styles.overlay} onClick={closeMobile} aria-hidden="true" />}
    </>
  );
}
