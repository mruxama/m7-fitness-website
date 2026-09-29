import Link from 'next/link';
import Image from 'next/image';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.topAccentBar} />

      <div className={styles.inner}>
        {/* Column 1: Brand Info */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoLink} aria-label="M7 Fitness Home">
            <Image
              src="/logo-transparent.png"
              alt="M7 Fitness"
              width={160}
              height={50}
              className={styles.logoImg}
            />
          </Link>

          <p className={styles.tagline}>
            Everything You Need, Under One Roof. Tajpura&apos;s premier solar-powered fitness club.
          </p>

          <div className={styles.socialGroup}>
            <a
              href="https://instagram.com/m7fitness.official"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="M7 Fitness on Instagram"
            >
              <div className={styles.socialIconBox}>
                <Image src="/icons/instagram.svg" alt="" width={18} height={18} />
              </div>
              <span>@m7fitness.official</span>
            </a>
            <a
              href="https://www.facebook.com/share/1BdYouT9Ve/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="M7 Fitness on Facebook"
            >
              <div className={styles.socialIconBox}>
                <Image src="/icons/facebook.svg" alt="" width={18} height={18} />
              </div>
              <span>Facebook Page</span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links Navigation */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>QUICK NAVIGATION</h3>
          <nav className={styles.navGrid} aria-label="Footer navigation">
            {[
              { href: '/', label: 'HOME' },
              { href: '/about', label: 'ABOUT US' },
              { href: '/facilities', label: 'FACILITIES' },
              { href: '/shifts', label: 'SHIFT TIMINGS' },
              { href: '/membership', label: 'MEMBERSHIPS' },
              { href: '/merchandise', label: 'MERCHANDISE' },
              { href: '/contact', label: 'CONTACT US' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className={styles.footerLink}>
                <span className={styles.linkDot}>•</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Key Features */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>KEY HIGHLIGHTS</h3>
          <ul className={styles.highlightsList}>
            <li>
              <div className={styles.highlightIconBox}>
                <Image src="/icons/hero-solar.svg" alt="" width={20} height={20} />
              </div>
              <span>100% Solar Powered</span>
            </li>
            <li>
              <div className={styles.highlightIconBox}>
                <Image src="/icons/hero-timings.svg" alt="" width={20} height={20} />
              </div>
              <span>Ladies Shift (10AM – 4:30PM)</span>
            </li>
            <li>
              <div className={styles.highlightIconBox}>
                <Image src="/icons/hero-trainer.svg" alt="" width={20} height={20} />
              </div>
              <span>Certified Expert Trainers</span>
            </li>
            <li>
              <div className={styles.highlightIconBox}>
                <Image src="/icons/hero-barbell.svg" alt="" width={20} height={20} />
              </div>
              <span>Manual Strength & Cardio</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info (Get in Touch) */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>GET IN TOUCH</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <div className={styles.contactIconBox}>
                <Image src="/icons/location.svg" alt="Location" width={22} height={22} className={styles.contactIcon} />
              </div>
              <div className={styles.contactTextWrap}>
                <span className={styles.contactLabel}>LOCATION</span>
                <span className={styles.contactValue}>Main Canal Service Road, Near Shalimar Grand Marquee, Tajpura, Lahore</span>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIconBox}>
                <Image src="/icons/phone.svg" alt="Phone" width={22} height={22} className={styles.contactIcon} />
              </div>
              <div className={styles.contactTextWrap}>
                <span className={styles.contactLabel}>PHONE / CALL</span>
                <a href="tel:+923055726889" className={styles.contactValue}>+92 3055726889</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIconBox}>
                <Image src="/icons/mail.svg" alt="Email" width={22} height={22} className={styles.contactIcon} />
              </div>
              <div className={styles.contactTextWrap}>
                <span className={styles.contactLabel}>EMAIL ADDRESS</span>
                <a href="mailto:M7fitnessofficial@gmail.com" className={styles.contactValue}>M7fitnessofficial@gmail.com</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIconBox}>
                <Image src="/icons/hero-clock.svg" alt="Hours" width={22} height={22} className={styles.contactIcon} />
              </div>
              <div className={styles.contactTextWrap}>
                <span className={styles.contactLabel}>TRAINING HOURS</span>
                <span className={styles.contactValue}>Open Daily 6:00 AM – 1:00 AM</span>
              </div>
            </li>
          </ul>

          <a
            href={buildWhatsAppUrl(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerWaBtn}
          >
            <div className={styles.waBtnIconBox}>
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
            </div>
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} M7 Fitness Lahore. All rights reserved.
          </p>
          <p className={styles.address}>
            Main Canal Service Road, Tajpura, Lahore, Punjab, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}

