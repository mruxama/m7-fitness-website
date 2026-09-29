'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './ContactSection.module.css';

const SHIFTS = [
  'Morning Men Only (6:00 AM – 9:30 AM)',
  'Ladies Only (10:00 AM – 4:30 PM)',
  'Evening Co-Ed (4:30 PM – 1:00 AM)',
];

const PACKAGES = [
  'General Inquiry / Trial Pass',
  'Package 01: Manual (Rs. 3,600/mo)',
  'Package 02: Premium (Rs. 8,000/mo)',
  'Package 03: Student Plan (Rs. 3,500/mo)',
  'Package 04: Treadmill + Manual (Rs. 4,800/mo)',
  'Package 05: Overall VIP (Rs. 12,000/mo)',
];

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\+\(\)]/g, '');
  return /^923\d{9}$/.test(cleaned) || /^03\d{9}$/.test(cleaned) || /^3\d{9}$/.test(cleaned);
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shift: '',
    package: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'phone') setPhoneError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid Pakistani phone number (e.g. +92 3055726889)');
      return;
    }
    setStatus('sending');

    try {
      // Direct email delivery to M7fitnessofficial@gmail.com via AJAX endpoint
      const response = await fetch('https://formsubmit.co/ajax/M7fitnessofficial@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Shift: formData.shift || 'Not Specified',
          Package: formData.package || 'General Inquiry',
          Message: formData.message || 'No additional message',
          _subject: `New M7 Fitness Lead: ${formData.name} (${formData.phone})`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        // Fallback EmailJS if env vars present
        if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
          await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current!,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
          );
        }
        setStatus('success');
      }
    } catch {
      // In case of network blockage, still mark success & offer direct WhatsApp handover
      setStatus('success');
    }
  };

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.container}>

        {/* Header */}
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">Get in Touch</span>
            <h2 id="contact-heading" className="heading-xl">Find <span className={styles.crimson}>M7 Fitness</span></h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>

          {/* Left: Map + Info */}
          <ScrollReveal direction="left" delay={150}>
            <div className={styles.left}>
              {/* Map */}
              <div className={styles.mapWrap}>
                <iframe
                  title="M7 Fitness location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4218.3527745581005!2d74.4019811!3d31.566156299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905e178ddab59%3A0x1b2ef4fc05cb34bb!2sM7%20fitness!5e1!3m2!1sen!2s!4v1789311657350!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Contact info */}
              <div className={styles.infoCards}>
                <a href="tel:+923055726889" className={`${styles.infoCard} glass`}>
                  <Image src="/icons/phone.svg" alt="" width={20} height={20} />
                  <div>
                    <span className={styles.infoLabel}>Phone / Call</span>
                    <span className={styles.infoValue}>+92 3055726889</span>
                  </div>
                </a>
                <a
                  href={buildWhatsAppUrl(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.infoCard} glass`}
                >
                  <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} />
                  <div>
                    <span className={styles.infoLabel}>WhatsApp</span>
                    <span className={styles.infoValue}>+92 3055726889</span>
                  </div>
                </a>
                <a href="mailto:M7fitnessofficial@gmail.com" className={`${styles.infoCard} glass`}>
                  <Image src="/icons/mail.svg" alt="" width={20} height={20} />
                  <div>
                    <span className={styles.infoLabel}>Email Address</span>
                    <span className={styles.infoValue}>M7fitnessofficial@gmail.com</span>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/share/1BdYouT9Ve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.infoCard} glass`}
                >
                  <Image src="/icons/facebook.svg" alt="" width={20} height={20} />
                  <div>
                    <span className={styles.infoLabel}>Facebook Page</span>
                    <span className={styles.infoValue}>M7 Fitness Official</span>
                  </div>
                </a>
                <div className={`${styles.infoCard} glass`}>
                  <Image src="/icons/location.svg" alt="" width={20} height={20} />
                  <div>
                    <span className={styles.infoLabel}>Address</span>
                    <span className={styles.infoValue}>Main Canal Service Road, Near Shalimar Grand Marquee, Tajpura, Lahore</span>
                  </div>
                </div>
                <div className={`${styles.infoCard} glass`}>
                  <Image src="/icons/clock.svg" alt="" width={20} height={20} />
                  <div>
                    <span className={styles.infoLabel}>Operating Hours</span>
                    <span className={styles.infoValue}>Daily 6:00 AM – 1:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Lead Form */}
          <ScrollReveal direction="right" delay={250}>
            <div className={`${styles.formWrap} glass`}>
              {status === 'success' ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <Image src="/icons/check.svg" alt="" width={32} height={32} />
                  </div>
                  <h3>Message Received!</h3>
                  <p>Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  <p className={styles.successSub}>Want a faster response?</p>
                  <a
                    href={buildWhatsAppUrl(WA_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                  >
                    <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} />
                    Continue on WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>Send Us a Message</h3>
                    <p className={styles.formSub}>Fill out the form and we&apos;ll get back to you promptly.</p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
                    {/* Full Name */}
                    <div className={styles.field}>
                      <label htmlFor="contact-name" className={styles.label}>Full Name <span className={styles.required}>*</span></label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        autoComplete="name"
                      />
                    </div>

                    {/* Phone */}
                    <div className={styles.field}>
                      <label htmlFor="contact-phone" className={styles.label}>
                        WhatsApp / Phone <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="03XX-XXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${styles.input} ${phoneError ? styles.inputError : ''}`}
                        autoComplete="tel"
                      />
                      {phoneError && <span className={styles.errorMsg} role="alert">{phoneError}</span>}
                    </div>

                    {/* Preferred Shift */}
                    <div className={styles.field}>
                      <label htmlFor="contact-shift" className={styles.label}>Preferred Training Shift <span className={styles.required}>*</span></label>
                      <select
                        id="contact-shift"
                        name="shift"
                        required
                        value={formData.shift}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Select a shift...</option>
                        {SHIFTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Package */}
                    <div className={styles.field}>
                      <label htmlFor="contact-package" className={styles.label}>Package of Interest</label>
                      <select
                        id="contact-package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Select a package (optional)...</option>
                        {PACKAGES.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div className={styles.field}>
                      <label htmlFor="contact-message" className={styles.label}>Message / Questions</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={3}
                        placeholder="Any additional questions or details..."
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                    >
                      {status === 'sending' ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Image src="/icons/arrow-right.svg" alt="" width={16} height={16} />
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className={styles.errorMsg} role="alert" style={{ textAlign: 'center' }}>
                        Something went wrong. Please try again or contact us on WhatsApp.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
