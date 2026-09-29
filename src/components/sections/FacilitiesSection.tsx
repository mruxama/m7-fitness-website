'use client';

import Image from 'next/image';
import { facilities } from '@/data/facilities';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './FacilitiesSection.module.css';

export default function FacilitiesSection() {
  return (
    <section className={styles.section} id="facilities" aria-labelledby="facilities-heading">
      <div className={styles.container}>

        {/* Header */}
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">Why Train Here</span>
            <h2 id="facilities-heading" className="heading-xl">World-Class <span className={styles.crimson}>Facilities</span></h2>
            <p className={styles.sub}>
              Every amenity built for serious training — powered by solar energy and engineered for zero interruptions.
            </p>
          </div>
        </ScrollReveal>

        {/* Facilities Grid */}
        <div className={styles.grid}>
          {facilities.map((facility, i) => (
            <ScrollReveal key={facility.id} direction="up" delay={(i % 4) * 100 + 100}>
              <article
                className={`${styles.card} glass`}
                aria-label={facility.title}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Image src={facility.icon} alt="" width={30} height={30} />
                  </div>
                  {facility.highlight && (
                    <span className={styles.highlight}>{facility.highlight}</span>
                  )}
                </div>
                <h3 className={styles.cardTitle}>{facility.title}</h3>
                <p className={styles.cardDesc}>{facility.description}</p>
                <div className={styles.cardNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal direction="up" delay={400}>
          <div className={styles.note}>
            <Image src="/icons/lockers.svg" alt="" width={18} height={18} />
            <span>Secure day lockers & dedicated parking included with all memberships.</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
