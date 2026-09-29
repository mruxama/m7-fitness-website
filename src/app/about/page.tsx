import type { Metadata } from 'next';
import Image from 'next/image';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us — Rabia Mirza | Founder & CEO M7 Fitness',
  description: 'Learn about M7 Fitness and Founder & CEO Rabia Mirza — media professional, journalist, and entrepreneur transforming community fitness in Tajpura, Lahore.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>

      {/* Page Hero */}
      <section className={styles.pageHero}>
        <ScrollReveal direction="up">
          <div className={styles.pageHeroInner}>
            <span className="section-label">Our Story</span>
            <h1 className={`heading-xl ${styles.pageTitle}`}>About <span className={styles.crimson}>M7 Fitness</span></h1>
            <p className={styles.pageDesc}>
              A premium training destination built for the community of Tajpura, Lahore — powered by solar energy, commitment, and a passion for fitness excellence.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Founder & CEO Profile Section */}
      <section className={`${styles.section} ${styles.ceoSection}`}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <div className={styles.ceoGrid}>
              
              {/* CEO Image Container */}
              <div className={styles.ceoVisualWrap}>
                <div className={styles.ceoImageCard}>
                  <Image
                    src="/ceo-rabia-mirza.jpg"
                    alt="Rabia Mirza - Founder & CEO of M7 Fitness"
                    width={500}
                    height={650}
                    quality={95}
                    priority
                    className={styles.ceoImage}
                  />
                  <div className={styles.ceoImageGlow} />
                  <div className={styles.ceoFloatingBadge}>
                    <Image src="/icons/crown.svg" alt="" width={16} height={16} />
                    <span>FOUNDER & CEO</span>
                  </div>
                </div>
              </div>

              {/* CEO Info & Story Content */}
              <div className={styles.ceoContent}>
                <span className="section-label">Leadership & Vision</span>
                <h2 className={`heading-lg ${styles.ceoName}`}>
                  Rabia <span className={styles.crimson}>Mirza</span>
                </h2>
                <p className={styles.ceoSubhead}>
                  Media Professional | Anchor Person | Crime Reporter | Columnist | Voiceover Artist | Entrepreneur | Founder, M7 Fitness
                </p>

                {/* Role Badges */}
                <div className={styles.ceoTagGrid}>
                  {['Entrepreneur', 'Journalism & Media', 'Anchor Person', 'Voiceover Artist', 'Columnist', 'Fitness Leader'].map((tag) => (
                    <span key={tag} className={styles.ceoTag}>
                      <span className={styles.tagDot} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.ceoBio}>
                  <p className={styles.bodyText}>
                    My journey is a story of passion, perseverance, and continuous evolution. I began my professional journey in the media industry in 2014, stepping into journalism and broadcasting across diverse roles as an Anchor Person, Crime Reporter, Columnist, and Voiceover Artist.
                  </p>
                  <p className={styles.bodyText}>
                    Journalism taught me the importance of truth, responsibility, confidence, and conviction. After years in media, I turned my vision toward entrepreneurship, establishing <strong>M7 Fitness</strong> — a professional, motivating, and empowering environment for people to transform their health and lifestyle.
                  </p>
                </div>

                {/* CEO Personal Quote Box */}
                <div className={`${styles.ceoQuoteCard} glass`}>
                  <p className={styles.ceoQuoteText}>
                    &ldquo;For me, M7 Fitness is more than just a gym. It represents discipline, strength, confidence, transformation, and the belief that every individual has the potential to become a better version of themselves.&rdquo;
                  </p>
                  <div className={styles.ceoAuthorWrap}>
                    <span className={styles.ceoAuthorName}>Rabia Mirza</span>
                    <span className={styles.ceoAuthorTitle}>Founder and CEO — M7 Fitness</span>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Vision */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <div className={styles.twoCol}>
              <div className={styles.textSide}>
                <span className="section-label">Our Vision</span>
                <h2 className="heading-md">Elevating Community Fitness Standards in Lahore</h2>
                <p className={styles.bodyText}>
                  M7 Fitness was built with a singular purpose — to deliver a world-class gym experience to the residents of Tajpura, Canal Road, and surrounding Lahore communities. We believe that access to premium equipment, clean facilities, and uninterrupted power should not be a luxury reserved for elite clubs.
                </p>
                <p className={styles.bodyText}>
                  Every member who walks through our doors deserves immaculate equipment, reliable solar-powered climate control, and a training environment that motivates and supports their goals — regardless of their fitness level or background.
                </p>
              </div>
              <div className={styles.visualSide}>
                <div className={`${styles.iconBlock} glass`}>
                  <Image src="/icons/target.svg" alt="" width={48} height={48} />
                  <span>Community Fitness</span>
                </div>
                <div className={`${styles.iconBlock} glass`}>
                  <Image src="/icons/solar.svg" alt="" width={48} height={48} />
                  <span>Solar-Powered</span>
                </div>
                <div className={`${styles.iconBlock} glass`}>
                  <Image src="/icons/shield.svg" alt="" width={48} height={48} />
                  <span>Clean & Safe</span>
                </div>
                <div className={`${styles.iconBlock} glass`}>
                  <Image src="/icons/heart-pulse.svg" alt="" width={48} height={48} />
                  <span>Premium Care</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The M7 Difference */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <div className={styles.centeredHeader}>
              <span className="section-label">The M7 Difference</span>
              <h2 className="heading-md">Overcoming Local Infrastructure Challenges</h2>
            </div>
          </ScrollReveal>
          <div className={styles.diffGrid}>
            {[
              { icon: '/icons/solar.svg', title: 'Zero Load Shedding', desc: 'Our high-capacity commercial solar plant ensures continuous operation during all power outages — keeping the AC, lights, and cardio machines running without interruption.' },
              { icon: '/icons/female.svg', title: 'Dedicated Ladies Environment', desc: 'A fully private, women-only training floor with dedicated shift hours (10:00 AM – 4:30 PM). A secure, supportive atmosphere for female athletes of all experience levels.' },
              { icon: '/icons/barbell.svg', title: 'Commercial-Grade Equipment', desc: 'Full Olympic free-weight setups, plate-loaded stations, cable crossovers, commercial treadmills, and elliptical cross-trainers — no compromises on equipment quality.' },
              { icon: '/icons/recovery.svg', title: 'VIP Recovery Lounge', desc: 'High-end robotic massage sofa sessions for active post-workout recovery. Available exclusively to Overall/VIP plan members.' },
              { icon: '/icons/coffee.svg', title: 'In-House Fuel Counter', desc: 'Specialty espresso, energy drinks, hydration products, and custom whey protein recovery shakes — all available on-site so you never have to leave for nutrition.' },
              { icon: '/icons/parking.svg', title: 'Secure Parking & Lockers', desc: 'Dedicated off-street parking for motorcycles and cars, plus secure on-site day lockers for your valuables during every session.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={(i % 3) * 120 + 100}>
                <article className={`${styles.diffCard} glass`}>
                  <div className={styles.diffIcon}>
                    <Image src={item.icon} alt="" width={28} height={28} />
                  </div>
                  <h3 className={styles.diffTitle}>{item.title}</h3>
                  <p className={styles.diffDesc}>{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Community Rules */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal direction="up">
            <div className={styles.rulesWrap}>
              <div className={styles.rulesHeader}>
                <span className="section-label">Community Rules</span>
                <h2 className="heading-md">Safety & Floor Etiquette</h2>
                <p className={styles.bodyText}>
                  M7 Fitness maintains professional standards across all shifts. Every member is expected to uphold these guidelines to ensure a safe, clean, and respectful training environment.
                </p>
              </div>
              <ul className={styles.rulesList}>
                {[
                  'Respect dedicated shift gender assignments — ladies-only hours are strictly enforced.',
                  'Return all equipment to its designated rack after use.',
                  'Maintain personal hygiene — wipe down equipment after every set.',
                  'Secure your belongings in provided day lockers — M7 is not responsible for unattended valuables.',
                  'No disruptive behaviour or intimidation on the gym floor.',
                  'Valid student ID must be presented at registration and may be re-verified.',
                  'Shift changes require advance confirmation with front desk management.',
                ].map((rule) => (
                  <li key={rule} className={styles.ruleItem}>
                    <Image src="/icons/check.svg" alt="" width={16} height={16} />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <ScrollReveal direction="scale">
            <div className={styles.ctaBox}>
              <h2 className={`heading-xl ${styles.ctaTitle}`}>Ready to Start <span className={styles.crimson}>Training?</span></h2>
              <p className={styles.ctaDesc}>Join the M7 Fitness community today. Book a trial pass or inquire about memberships via WhatsApp.</p>
              <div className={styles.ctaBtns}>
                <a href={buildWhatsAppUrl(WA_MESSAGES.trial)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} />
                  Book Trial Pass
                </a>
                <a href={buildWhatsAppUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}


