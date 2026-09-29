import type { Metadata } from 'next';
import Hero from '@/components/hero/Hero';
import ShiftsSection from '@/components/sections/ShiftsSection';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import MembershipSection from '@/components/sections/MembershipSection';
import MerchandiseSection from '@/components/sections/MerchandiseSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'M7 Fitness Lahore | Premium Solar-Powered Gym in Tajpura',
  description: 'Join M7 Fitness on Main Canal Service Road, Tajpura, Lahore. Zero load shedding, dedicated ladies shift (10AM–4:30PM), manual strength floor, cardio, kickboxing & VIP recovery.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShiftsSection />
      <FacilitiesSection />
      <MembershipSection />
      <MerchandiseSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
