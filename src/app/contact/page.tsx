import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact M7 Fitness Lahore. Call 0305-5726889 or message us on WhatsApp. Located on Main Canal Service Road, Tajpura, Lahore.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.inner}>
          <span className="section-label">We&apos;re Here</span>
          <h1 className="heading-xl">Contact <span className={styles.crimson}>M7 Fitness</span></h1>
          <p className={styles.desc}>
            Have a question? Ready to join? Reach us on WhatsApp, call us directly, or fill out the form below.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
