'use client';

import { useState } from 'react';
import Image from 'next/image';
import { faqItems } from '@/data/faq';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <div className={styles.container}>

        {/* Header */}
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">Have Questions?</span>
            <h2 id="faq-heading" className="heading-xl">Frequently <span className={styles.crimson}>Asked</span></h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className={styles.accordion} role="list">
          {faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal key={item.id} direction="up" delay={(i % 5) * 80 + 100}>
                <div
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ''} glass`}
                  role="listitem"
                >
                  <button
                    className={styles.question}
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                  >
                    <span className={styles.qNum}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.qText}>{item.question}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                      <Image src="/icons/chevron-down.svg" alt="" width={20} height={20} />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={400}>
          <div className={styles.cta}>
            <p>Still have questions? We&apos;re happy to help.</p>
            <a
              href={buildWhatsAppUrl(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.askWaBtn}
            >
              <Image src="/icons/whatsapp.svg" alt="" width={22} height={22} />
              <span>ASK ON WHATSAPP</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
