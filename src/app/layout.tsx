import type { Metadata } from 'next';
import { Syne, Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/tokens.css';
import '@/styles/globals.css';
import { themeInitScript } from '@/lib/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';
import ScrollProgress from '@/components/ui/ScrollProgress';
import JsonLd from '@/components/seo/JsonLd';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const SITE_URL = 'https://m7-site.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'M7 Fitness Lahore | Premium Solar-Powered Gym in Tajpura',
    template: '%s | M7 Fitness Lahore',
  },
  description:
    'Join M7 Fitness on Main Canal Service Road, Tajpura, Lahore. Zero load shedding, 100% solar power backup, dedicated ladies shift (10AM–4:30PM), manual strength floor, cardio, kickboxing & VIP recovery lounge.',
  keywords: [
    'M7 Fitness Lahore',
    'M7 Fitness Tajpura',
    'gym in Tajpura Lahore',
    'fitness club Canal Road Lahore',
    'best ladies gym Tajpura Lahore',
    'gym near Shalimar Grand Marquee',
    'solar powered gym Lahore',
    'Rabia Mirza gym Lahore',
    'gym shift timings Tajpura',
    'kickboxing gym Lahore',
    'VIP recovery lounge gym Lahore',
  ],
  authors: [{ name: 'Rabia Mirza', url: 'https://www.facebook.com/share/1BdYouT9Ve/' }, { name: 'M7 Fitness' }],
  creator: 'Rabia Mirza',
  publisher: 'M7 Fitness Lahore',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'M7 Fitness Lahore | Premium Solar-Powered Gym in Tajpura',
    description:
      'Tajpura’s premier 100% solar-powered fitness club. 19 daily training hours, dedicated ladies-only shift (10AM–4:30PM), strength, cardio, kickboxing & VIP robotic recovery lounge.',
    url: SITE_URL,
    siteName: 'M7 Fitness Lahore',
    images: [
      {
        url: '/hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'M7 Fitness Gym Floor Tajpura Lahore',
      },
      {
        url: '/logo-official.png',
        width: 500,
        height: 500,
        alt: 'M7 Fitness Official Logo',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M7 Fitness Lahore | Premium Solar-Powered Gym in Tajpura',
    description:
      '100% solar powered gym in Tajpura, Lahore. Dedicated ladies shift (10AM–4:30PM), strength floor, cardio & VIP recovery.',
    images: ['/hero-banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${syne.variable} ${outfit.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}



