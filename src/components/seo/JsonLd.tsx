import React from 'react';

export default function JsonLd() {
  const gymSchema = {
    '@context': 'https://schema.org',
    '@type': ['HealthClub', 'ExerciseGym', 'LocalBusiness'],
    '@id': 'https://m7-site.vercel.app/#gym',
    name: 'M7 Fitness Lahore',
    alternateName: ['M7 Fitness Tajpura', 'M7 Fitness Club'],
    description:
      "Lahore's premier 100% solar-powered fitness club on Main Canal Service Road, Tajpura. 19 daily training hours, dedicated ladies-only shift (10AM–4:30PM), manual strength floor, cardio, free kickboxing, and VIP recovery lounge.",
    url: 'https://m7-site.vercel.app',
    logo: 'https://m7-site.vercel.app/logo-official.png',
    image: 'https://m7-site.vercel.app/hero-banner.png',
    telephone: '+923055726889',
    email: 'M7fitnessofficial@gmail.com',
    priceRange: 'Rs. 3,500 - Rs. 12,000 / month',
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Cash, Bank Transfer, EasyPaisa, JazzCash',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Canal Service Road, Near Shalimar Grand Marquee, Tajpura',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      postalCode: '54000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.5661563,
      longitude: 74.4019811,
    },
    hasMap: 'https://maps.app.goo.gl/M7fitness',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '06:00',
        closes: '01:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/share/1BdYouT9Ve/',
      'https://instagram.com/m7fitness.official',
    ],
    founder: {
      '@type': 'Person',
      name: 'Rabia Mirza',
      jobTitle: 'Founder & CEO',
      description: 'Media Professional, Journalist, Voiceover Artist, and Founder of M7 Fitness Lahore',
      sameAs: 'https://www.facebook.com/share/1BdYouT9Ve/',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: '100% Solar Power Backup (Zero Load Shedding)',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Dedicated Ladies Shift (10:00 AM – 4:30 PM)',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Kickboxing Floor Access',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'VIP Robotic Recovery Massage Lounge',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free High-Speed Wi-Fi',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Secure Parking & Day Lockers',
        value: true,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the shift timings at M7 Fitness Lahore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'M7 Fitness operates 19 hours daily across three dedicated shifts: Morning Men Only (6:00 AM – 9:30 AM), Dedicated Ladies Only Shift (10:00 AM – 4:30 PM), and Evening Co-Ed Shift (4:30 PM – 1:00 AM).',
        },
      },
      {
        '@type': 'Question',
        name: 'Does M7 Fitness have power backup during load shedding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! M7 Fitness is 100% solar-powered with a commercial-grade solar array, guaranteeing zero load shedding and uninterrupted air conditioning, lighting, and cardio machinery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a private ladies-only shift at M7 Fitness Tajpura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every day from 10:00 AM to 4:30 PM is strictly reserved for women, offering complete privacy with female certified trainers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the owner and CEO of M7 Fitness Lahore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'M7 Fitness was founded by Rabia Mirza, a renowned media professional, journalist, anchor person, and entrepreneur in Lahore.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the membership rates at M7 Fitness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Membership plans start at Rs. 3,500/month (Student Plan) and Rs. 3,600/month (Manual Strength Plan), up to Rs. 12,000/month for the Overall VIP Plan with robotic massage lounge access and complimentary espresso.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is M7 Fitness located in Lahore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'M7 Fitness is located on Main Canal Service Road, Near Shalimar Grand Marquee, Tajpura, Lahore. Contact phone & WhatsApp: +92 3055726889.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
