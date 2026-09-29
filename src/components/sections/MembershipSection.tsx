'use client';

import Image from 'next/image';
import { packages } from '@/data/membership';
import { buildWhatsAppUrl, WA_MESSAGES, waUrl, WaMessageKey } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './MembershipSection.module.css';

export default function MembershipSection() {
  return (
    <section className={styles.section} id="membership" aria-labelledby="membership-heading">
      <div className={styles.container}>

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">MEMBERSHIP PLANS</span>
            <h2 id="membership-heading" className="heading-xl">
              Choose Your <span className={styles.crimson}>Plan</span>
            </h2>
            <p className={styles.sub}>
              Transparent pricing with zero hidden fees. All plans include 100% solar power reliability, free Wi-Fi, and kickboxing floor access.
            </p>
          </div>
        </ScrollReveal>

        {/* Package Cards Grid */}
        <div className={styles.grid}>
          {packages.map((pkg, idx) => (
            <ScrollReveal key={pkg.id} direction="up" delay={idx * 120 + 100}>
              <article
                className={`${styles.card} ${pkg.isVip ? styles.vipCard : ''}`}
                aria-label={`${pkg.name}: ${pkg.tagline}`}
              >
                {/* Card Top Header & Badge Row */}
                <div className={styles.topRow}>
                  <div className={styles.cardHeader}>
                    <span className={styles.pkgId}>{pkg.name}</span>
                    <h3 className={styles.pkgName}>{pkg.tagline}</h3>
                  </div>

                  {pkg.badge && (
                    <div className={`${styles.badge} ${pkg.isVip ? styles.badgeVip : pkg.isStudent ? styles.badgeStudent : ''}`}>
                      {pkg.isVip && <Image src="/icons/crown.svg" alt="" width={14} height={14} />}
                      <span>{pkg.badge}</span>
                    </div>
                  )}
                </div>

                {/* Pricing Area */}
                <div className={styles.pricing}>
                  <div className={styles.priceRow}>
                    <span className={styles.priceVal}>Rs. {pkg.monthly.toLocaleString()}</span>
                    <span className={styles.perMonth}>/month</span>
                  </div>

                  <div className={styles.admission}>
                    <Image src="/icons/check.svg" alt="" width={16} height={16} className={styles.checkIcon} />
                    <span>Rs. {pkg.admission.toLocaleString()} one-time admission</span>
                  </div>

                  {pkg.baseValue > pkg.monthly && (
                    <div className={styles.savings}>
                      <span className={styles.crossed}>Rs. {pkg.baseValue.toLocaleString()}</span>
                      <span className={styles.saveLabel}>Save Rs. {(pkg.baseValue - pkg.monthly).toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Inclusions List */}
                <div className={styles.inclusionsWrap}>
                  <span className={styles.inclusionsTitle}>WHAT&apos;S INCLUDED:</span>
                  <ul className={styles.inclusions} aria-label="Package inclusions">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className={styles.inclusion}>
                        <Image src="/icons/check.svg" alt="Included" width={16} height={16} className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <a
                  href={waUrl(pkg.waKey as WaMessageKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.ctaBtn} ${pkg.isVip ? styles.ctaVip : styles.ctaStandard}`}
                >
                  <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} />
                  <span>{pkg.isVip ? 'JOIN VIP NOW' : `JOIN ${pkg.tagline.toUpperCase()}`}</span>
                </a>

                {/* VIP Ambient Glow */}
                {pkg.isVip && <div className={styles.vipGlow} aria-hidden="true" />}
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Trial Pass Banner */}
        <ScrollReveal direction="up" delay={400}>
          <div className={styles.trialBanner}>
            <div className={styles.trialContent}>
              <div className={styles.trialIconBox}>
                <Image src="/icons/hero-trainer.svg" alt="" width={32} height={32} />
              </div>
              <div>
                <h3 className={styles.trialTitle}>Not sure yet? Try us first.</h3>
                <p className={styles.trialDesc}>Book a One-Day Trial Pass and experience M7 Fitness before committing to a full membership.</p>
              </div>
            </div>
            <a
              href={buildWhatsAppUrl(WA_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.trialBtn}
            >
              <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} />
              <span>BOOK TRIAL PASS</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
