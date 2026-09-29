import type { Metadata } from 'next';
import Image from 'next/image';
import { shifts, operatingHours } from '@/data/shifts';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Shift Timings',
  description: 'View M7 Fitness shift timings — Morning Men Only (6AM–9:30AM), Ladies Only (10AM–4:30PM), Evening Co-Ed (4:30PM–1AM). Open 19 hours daily.',
};

const TOTAL = 19;
const START = 6;
function pct(h: number) { return ((h - START) / TOTAL) * 100; }

export default function ShiftsPage() {
  return (
    <div className={styles.page}>

      <section className={styles.pageHero}>
        <ScrollReveal direction="up">
          <div className={styles.inner}>
            <span className="section-label">Training Hours</span>
            <h1 className="heading-xl">Shift <span className={styles.crimson}>Timings</span></h1>
            <p className={styles.desc}>
              19 uninterrupted hours across three dedicated slots — crafted for privacy, comfort, and focused training.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Hours strip */}
      <ScrollReveal direction="up" delay={150}>
        <div className={styles.hoursStrip}>
          <Image src="/icons/clock.svg" alt="" width={18} height={18} />
          <strong>Open Daily:</strong>
          <span>{operatingHours.open} to {operatingHours.close}</span>
          <span className={styles.pill}>{operatingHours.total}</span>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <h2 className={`heading-md ${styles.centered}`}>Daily Schedule Overview</h2>
            <div className={styles.timelineWrap}>
              <div className={styles.timelineLabels}>
                {['6AM','9AM','12PM','3PM','6PM','9PM','12AM'].map((l) => <span key={l}>{l}</span>)}
              </div>
              <div className={styles.timeline}>
                {shifts.map((s, i) => (
                  <div
                    key={s.id}
                    className={styles.bar}
                    style={{ left: `${pct(s.startHour)}%`, width: `${pct(s.endHour) - pct(s.startHour)}%`, background: i === 1 ? '#B91C1C' : '#DC2626' }}
                    title={`${s.name}: ${s.start}–${s.end}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Shift Detail Cards */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className={styles.container}>
          <div className={styles.shiftCards}>
            {shifts.map((shift, i) => (
              <ScrollReveal key={shift.id} direction="up" delay={i * 120 + 100}>
                <article className={`${styles.shiftCard} glass`}>
                  <div className={styles.shiftTop}>
                    <div className={styles.shiftIcon}>
                      <Image src={shift.icon} alt="" width={30} height={30} />
                    </div>
                    <span className={styles.shiftBadge} style={{ background: i === 1 ? '#B91C1C' : '#DC2626' }}>
                      {shift.subtitle}
                    </span>
                  </div>
                  <h2 className={styles.shiftName}>{shift.name} Shift</h2>
                  <div className={styles.shiftTime}>
                    <Image src="/icons/clock.svg" alt="" width={18} height={18} />
                    <span>{shift.start} – {shift.end}</span>
                  </div>
                  <p className={styles.shiftDesc}>{shift.description}</p>
                  <a
                    href={buildWhatsAppUrl(shift.id === 'morning' ? WA_MESSAGES.general : shift.id === 'ladies' ? WA_MESSAGES.general : WA_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Image src="/icons/whatsapp.svg" alt="" width={16} height={16} />
                    Inquire About This Shift
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trial CTA */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal direction="scale">
            <div className={styles.ctaBox}>
              <h2 className="heading-xl">Not Sure Which <span className={styles.crimson}>Shift?</span></h2>
              <p>Book a One-Day Trial Pass and experience the gym at the time that suits you best.</p>
              <a href={buildWhatsAppUrl(WA_MESSAGES.trial)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} />
                Book a Trial Pass
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

