'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './MerchandiseSection.module.css';

export default function MerchandiseSection() {
  return (
    <section className={styles.section} id="merchandise" aria-label="Official Merchandise">
      <div className={styles.container}>
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <div className={styles.sectionLabel}>
              <span className="label">OFFICIAL GEAR & ACCESSORIES</span>
            </div>
            <h2 className={styles.title}>
              Wear The Mindset. <span className={styles.crimson}>Train In Style.</span>
            </h2>
            <p className={styles.subtitle}>
              Premium high-performance apparel and fitness accessories designed exclusively for M7 Fitness athletes.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {products.map((product, idx) => (
            <ScrollReveal key={product.id} direction="up" delay={idx * 150 + 150}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className={styles.productImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.badge}>{product.collection}</div>
                  <div className={styles.priceTag}>{product.price}</div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.tagline}>{product.tagline}</p>
                  <p className={styles.description}>{product.description}</p>

                  <div className={styles.actions}>
                    <Link href={`/merchandise/${product.id}`} className={styles.viewBtn}>
                      View Details
                    </Link>

                    <a
                      href={buildWhatsAppUrl(
                        `Hi M7 Fitness! I want to inquire about ordering the ${product.name} (${product.price}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.orderBtn}
                    >
                      <Image src="/icons/whatsapp.svg" alt="" width={16} height={16} />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
