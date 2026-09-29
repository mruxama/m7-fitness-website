'use client';

import Image from 'next/image';
import { shifts, operatingHours } from '@/data/shifts';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './ShiftsSection.module.css';

export default function ShiftsSection() {
  const TOTAL = 19;
  const START = 6;

  function pct(hour: number) {
    return ((hour - START) / TOTAL) * 100;
  }

  const shiftColors = ['#DC2626', '#B91C1C', '#DC2626'];

  return (
    <section className={styles.section} id="shifts" aria-labelledby="shifts-heading">
      <div className={styles.container}>

        {/* Header */}
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">Training Hours</span>
            <h2 id="shifts-heading" className="heading-xl">Shift <span className={styles.crimson}>Timings</span></h2>
            <p className={styles.sub}>
              19 hours of uninterrupted training across three dedicated slots — designed for privacy, focus, and performance.
            </p>
          </div>
        </ScrollReveal>

        {/* 24h Visual Timeline */}
        <ScrollReveal direction="up" delay={150}>
          <div className={styles.timelineWrap} aria-label="Daily training schedule timeline">
            <div className={styles.timelineLabels} aria-hidden="true">
              {['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'].map((label) => (
                <span key={label} className={styles.timelineLabel}>{label}</span>
              ))}
            </div>
            <div className={styles.timeline}>
              {shifts.map((shift, i) => (
                <div
                  key={shift.id}
                  className={styles.timelineBar}
                  style={{
                    left: `${pct(shift.startHour)}%`,
                    width: `${pct(shift.endHour) - pct(shift.startHour)}%`,
                    background: shiftColors[i],
                  }}
                  title={`${shift.name} ${shift.subtitle}: ${shift.start} – ${shift.end}`}
                />
              ))}
            </div>
            <div className={styles.timelineTrack} aria-hidden="true" />
          </div>
        </ScrollReveal>

        {/* Shift Cards */}
        <div className={styles.cards}>
          {shifts.map((shift, i) => (
            <ScrollReveal key={shift.id} direction="up" delay={i * 120 + 200}>
              <article className={`${styles.card} glass`} aria-label={`${shift.name} shift: ${shift.subtitle}`}>
                <div className={styles.cardIcon}>
                  <Image src={shift.icon} alt="" width={28} height={28} />
                </div>
                <div className={styles.cardBadge} style={{ background: shiftColors[i] }}>
                  {shift.subtitle}
                </div>
                <h3 className={styles.cardName}>{shift.name} Shift</h3>
                <div className={styles.cardTime}>
                  <Image src="/icons/clock.svg" alt="Time" width={16} height={16} />
                  <span>{shift.start} – {shift.end}</span>
                </div>
                <p className={styles.cardDesc}>{shift.description}</p>
                <div className={styles.cardGlow} style={{ background: shiftColors[i] }} aria-hidden="true" />
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Operational hours strip */}
        <ScrollReveal direction="up" delay={500}>
          <div className={styles.strip}>
            <Image src="/icons/bolt.svg" alt="" width={18} height={18} />
            <span>Open <strong>{operatingHours.open}</strong> to <strong>{operatingHours.close}</strong> — {operatingHours.total}</span>
            <a
              href={buildWhatsAppUrl(WA_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Image src="/icons/whatsapp.svg" alt="" width={14} height={14} />
              Book a Trial Pass
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
