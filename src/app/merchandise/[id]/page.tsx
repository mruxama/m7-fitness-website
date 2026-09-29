'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import styles from './page.module.css';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');

  const orderWaMessage = `Hi M7 Fitness! I would like to order the ${product.name} (Size/Variant: ${selectedSize}, Price: ${product.price}). Please share payment and delivery details.`;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <Link href="/merchandise" className={styles.breadLink}>Merchandise</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>{product.name}</span>
        </div>

        <div className={styles.productGrid}>
          {/* Gallery Column */}
          <div className={styles.galleryCol}>
            <div className={styles.mainImageWrap}>
              <Image
                src={product.images[selectedImg]}
                alt={product.name}
                fill
                priority
                className={styles.mainImg}
              />
              <div className={styles.badge}>{product.collection}</div>
            </div>

            <div className={styles.thumbsGrid}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`${styles.thumbBtn} ${selectedImg === idx ? styles.thumbActive : ''}`}
                >
                  <Image src={img} alt="" fill className={styles.thumbImg} />
                </button>
              ))}
            </div>
          </div>

          {/* Info Column */}
          <div className={styles.infoCol}>
            <div className={styles.tagline}>{product.tagline}</div>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.priceRow}>
              <span className={styles.price}>{product.price}</span>
              <span className={styles.inStock}>In Stock</span>
            </div>

            <p className={styles.description}>{product.description}</p>

            {/* Size / Variant Picker */}
            {product.sizes && product.sizes.length > 0 && (
              <div className={styles.sizeSection}>
                <label className={styles.sizeLabel}>Select Size / Option:</label>
                <div className={styles.sizeGrid}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeActive : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features List */}
            <div className={styles.featuresSection}>
              <h3 className={styles.featuresTitle}>Key Features:</h3>
              <ul className={styles.featuresList}>
                {product.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <Image src="/icons/check.svg" alt="" width={18} height={18} className={styles.checkIcon} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sloganBox}>
              <p>&quot;{product.slogan}&quot;</p>
            </div>

            {/* Action CTAs */}
            <div className={styles.actions}>
              <a
                href={buildWhatsAppUrl(orderWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orderWaBtn}
              >
                <Image src="/icons/whatsapp.svg" alt="" width={22} height={22} />
                Order via WhatsApp ({product.price})
              </a>

              <Link href="/merchandise" className={styles.backBtn}>
                Back to All Merchandise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
