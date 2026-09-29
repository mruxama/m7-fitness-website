// M7 Fitness — Data: FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Can I try the gym before committing to a full monthly membership?',
    answer: 'Yes! M7 Fitness offers a One-Day Trial Pass. You can experience our equipment, climate-controlled workout floors, and amenities firsthand. Contact our front desk on WhatsApp at 0305-5726889 to reserve your trial pass.',
  },
  {
    id: 'faq2',
    question: 'What are the requirements to register under the Student Package?',
    answer: 'To qualify for the discounted Student Package (Rs. 3,500/month and Rs. 1,000 admission), you must present your valid, unexpired school, college, or university student ID card at registration. The ID card is physically inspected at the front desk.',
  },
  {
    id: 'faq3',
    question: 'Can I switch between the morning and evening shifts?',
    answer: 'Yes. While shifts are organized into Morning (Men Only), Mid-Day (Ladies Only), and Evening (Co-Ed) for comfort and privacy, members may adjust their regular training timing upon confirmation with the gym management.',
  },
  {
    id: 'faq4',
    question: 'Are personal lockers and safe storage facilities available?',
    answer: 'Yes. M7 Fitness provides secure on-site day lockers for members to store gym bags, mobile phones, and personal gear during their workouts.',
  },
  {
    id: 'faq5',
    question: 'Does the gym stay operational during local electricity outages?',
    answer: 'Absolutely. M7 Fitness is fully backed by an advanced, high-capacity commercial solar power setup, ensuring uninterrupted air conditioning, lighting, and cardio machine operation without load shedding interruptions.',
  },
];
