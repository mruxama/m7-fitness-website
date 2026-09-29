import type { Metadata } from 'next';
import Image from 'next/image';
import { packages } from '@/data/membership';
import { buildWhatsAppUrl, WA_MESSAGES, waUrl, WaMessageKey } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Membership Plans & Pricing',
  description: 'View all M7 Fitness membership plans in Lahore. Plans from Rs. 3,500/month with free kickboxing and Wi-Fi. Student discounts available.',
};

export default function MembershipPage() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHero}>
        <ScrollReveal direction="up">
          <div className={styles.inner}>
            <span className="section-label">Join M7 Fitness</span>
            <h1 className="heading-xl">Membership <span className={styles.crimson}>Plans</span></h1>
            <p className={styles.desc}>
              Transparent, evergreen pricing with zero hidden fees. Every plan includes free Wi-Fi and kickboxing floor access.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Packages Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {packages.map((pkg, idx) => (
              <ScrollReveal key={pkg.id} direction="up" delay={idx * 120 + 100}>
                <article className={`${styles.card} ${pkg.isVip ? styles.vipCard : ''}`}>
                  <div className={styles.topRow}>
                    <div className={styles.cardHeader}>
                      <span className={styles.pkgId}>{pkg.name}</span>
                      <h2 className={styles.pkgName}>{pkg.tagline}</h2>
                    </div>
                    {pkg.badge && (
                      <div className={`${styles.badge} ${pkg.isVip ? styles.badgeVip : pkg.isStudent ? styles.badgeStudent : ''}`}>
                        {pkg.isVip && <Image src="/icons/crown.svg" alt="" width={14} height={14} />}
                        <span>{pkg.badge}</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.pricing}>
                    <div className={styles.priceRow}>
                      <span className={styles.priceVal}>Rs. {pkg.monthly.toLocaleString()}</span>
                      <span className={styles.perMonth}>/month</span>
                    </div>
                    <div className={styles.admission}>
                      <Image src="/icons/check.svg" alt="" width={16} height={16} className={styles.checkIcon} />
                      <span>One-time admission: Rs. {pkg.admission.toLocaleString()}</span>
                    </div>
                    {pkg.baseValue > pkg.monthly && (
                      <div className={styles.savings}>
                        <span className={styles.crossed}>Rs. {pkg.baseValue.toLocaleString()} standard</span>
                        <span className={styles.saveLabel}>Save Rs. {(pkg.baseValue - pkg.monthly).toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.inclusionsWrap}>
                    <span className={styles.inclusionsTitle}>WHAT&apos;S INCLUDED:</span>
                    <ul className={styles.inclusions}>
                      {pkg.inclusions.map((item) => (
                        <li key={item} className={styles.inclusion}>
                          <Image src="/icons/check.svg" alt="Included" width={16} height={16} className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={waUrl(pkg.waKey as WaMessageKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaBtn} ${pkg.isVip ? styles.ctaVip : styles.ctaStandard}`}
                  >
                    <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} />
                    <span>{pkg.isVip ? 'JOIN VIP NOW' : `JOIN ${pkg.tagline.toUpperCase()}`}</span>
                  </a>

                  {pkg.isVip && <div className={styles.vipGlow} aria-hidden="true" />}
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Notes */}
          <ScrollReveal direction="up" delay={300}>
            <div className={styles.notes}>
              <div className={styles.note}>
                <Image src="/icons/shield.svg" alt="" width={22} height={22} className={styles.noteIcon} />
                <div>
                  <strong>Student ID Required</strong>
                  <p>Package 03 (Student Plan) requires a valid, unexpired school, college, or university student ID card presented at registration.</p>
                </div>
              </div>
              <div className={styles.note}>
                <Image src="/icons/hero-timings.svg" alt="" width={22} height={22} className={styles.noteIcon} />
                <div>
                  <strong>Shift Flexibility</strong>
                  <p>Members may request shift adjustments with advance confirmation from front desk management.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trial Banner */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className={styles.container}>
          <ScrollReveal direction="scale">
            <div className={styles.trialBanner}>
              <div className={styles.trialContent}>
                <div className={styles.trialIconBox}>
                  <Image src="/icons/hero-trainer.svg" alt="" width={32} height={32} />
                </div>
                <div>
                  <h2 className={styles.trialTitle}>Try Before You <span className={styles.crimson}>Commit</span></h2>
                  <p className={styles.trialDesc}>Book a One-Day Trial Pass and experience every facility before choosing a plan.</p>
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
    </div>
  );
}

