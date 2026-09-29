'use client';

import Image from 'next/image';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
  return (
    <a
      href={buildWhatsAppUrl(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with M7 Fitness on WhatsApp"
    >
      <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={26} height={26} className={styles.icon} />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}
