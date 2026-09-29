import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Merchandise — Official M7 Gear',
  description: 'Shop official M7 Fitness gym apparel and accessories. M7 Performance T-Shirt and Premium Shaker Bottle. Order via WhatsApp.',
};

export default function MerchandisePage() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHero}>
        <ScrollReveal direction="up">
          <div className={styles.inner}>
            <span className="section-label">Official M7 Gear</span>
            <h1 className="heading-xl">M7 <span className={styles.crimson}>Merchandise</span></h1>
            <p className={styles.desc}>Premium gym apparel and accessories — built for performance, designed to represent.</p>
          </div>
        </ScrollReveal>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {products.map((product, idx) => (
              <ScrollReveal key={product.id} direction="up" delay={idx * 150 + 100}>
                <article className={`${styles.card} glass`}>
                  <div className={styles.visual}>
                    <Image src={product.images[0]} alt={product.name} fill className={styles.prodImg} />
                    <span className={styles.collection}>{product.collection}</span>
                    <span className={styles.priceTag}>{product.price}</span>
                  </div>
                  <div className={styles.content}>
                    <h2 className={styles.name}>{product.name}</h2>
                    <p className={styles.tagline}>{product.tagline}</p>
                    <p className={styles.desc2}>{product.description}</p>
                    <ul className={styles.specs}>
                      {product.features.slice(0, 4).map((s) => (
                        <li key={s} className={styles.spec}>
                          <Image src="/icons/check.svg" alt="" width={14} height={14} />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.actions}>
                      <Link href={`/merchandise/${product.id}`} className={styles.detailsBtn}>
                        View Details
                      </Link>
                      <a
                        href={buildWhatsAppUrl(`Hi M7 Fitness, I would like to order the ${product.name} (${product.price}).`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Order via WhatsApp
                        <Image src="/icons/arrow-up-right.svg" alt="" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className={styles.note}>
              <Image src="/icons/shield.svg" alt="" width={18} height={18} />
              <span>All orders and pricing confirmed directly with the M7 Fitness front desk via WhatsApp.</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

