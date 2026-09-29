import type { Metadata } from 'next';
import { facilities } from '@/data/facilities';
import Image from 'next/image';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Facilities & Amenities',
  description: 'Explore M7 Fitness facilities — solar-powered AC, strength floor, cardio zone, kickboxing, recovery lounge, and in-house café bar in Tajpura, Lahore.',
};

export default function FacilitiesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHero}>
        <ScrollReveal direction="up">
          <div className={styles.inner}>
            <span className="section-label">Everything Included</span>
            <h1 className="heading-xl">World-Class <span className={styles.crimson}>Facilities</span></h1>
            <p className={styles.desc}>Every amenity you need, under one solar-powered roof.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Facilities Detail */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {facilities.map((f, i) => (
              <ScrollReveal key={f.id} direction="up" delay={(i % 4) * 100 + 100}>
                <article className={`${styles.card} glass`} aria-label={f.title}>
                  <div className={styles.cardVisual}>
                    <Image src={f.icon} alt="" width={48} height={48} />
                    {f.highlight && <span className={styles.highlight}>{f.highlight}</span>}
                  </div>
                  <div className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</div>
                  <h2 className={styles.cardTitle}>{f.title}</h2>
                  <p className={styles.cardDesc}>{f.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <h2 className={`heading-md ${styles.centeredH2}`}>Additional <span className={styles.crimson}>Amenities</span></h2>
          </ScrollReveal>
          <div className={styles.amenityList}>
            {[
              { icon: '/icons/lockers.svg', label: 'Secure Day Lockers' },
              { icon: '/icons/parking.svg', label: 'Dedicated Parking (Bikes & Cars)' },
              { icon: '/icons/ac.svg', label: 'Fully Air-Conditioned Floors' },
              { icon: '/icons/bolt.svg', label: 'Free Wi-Fi on All Plans' },
              { icon: '/icons/shield.svg', label: 'Professional Hygiene Standards' },
              { icon: '/icons/users.svg', label: 'Dedicated Shift Privacy' },
            ].map((a, i) => (
              <ScrollReveal key={a.label} direction="up" delay={i * 80 + 100}>
                <div className={`${styles.amenityItem} glass`}>
                  <Image src={a.icon} alt="" width={22} height={22} />
                  <span>{a.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal direction="scale">
            <div className={styles.ctaBox}>
              <h2 className="heading-xl">Experience It <span className={styles.crimson}>Yourself</span></h2>
              <p>Book a One-Day Trial Pass and see every facility firsthand.</p>
              <a href={buildWhatsAppUrl(WA_MESSAGES.trial)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} />
                Book Trial Pass
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

