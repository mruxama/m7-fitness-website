// M7 Fitness — WhatsApp Utility
export const WA_NUMBER = '923055726889';

export const WA_MESSAGES = {
  general: 'Hi M7 Fitness, I would like to inquire about gym memberships and timings.',
  join: 'Hi M7 Fitness, I want to join M7 Fitness! Please send membership details.',
  visit: 'Hi M7 Fitness, I would like to book a visit to inspect the gym and amenities.',
  trial: 'Hi M7 Fitness, I would like to book a One-Day Trial Pass.',
  student: 'Hi M7 Fitness, I am a student and want to register for the Package 03 Student Plan.',
  vip: 'Hi M7 Fitness, I want to join the Overall VIP Package with massage and coffee perks.',
  tshirt: 'Hi M7 Fitness, I want to check sizes and price for the M7 Gym T-Shirt.',
  shaker: 'Hi M7 Fitness, I want to check the price and availability for the M7 Shaker Bottle.',
  pkg01: 'Hi M7 Fitness, I want to join Package 01: Manual (Rs. 3,600/month).',
  pkg02: 'Hi M7 Fitness, I want to join Package 02: Premium (Rs. 8,000/month).',
  pkg04: 'Hi M7 Fitness, I want to join Package 04: Treadmill + Manual (Rs. 4,800/month).',
  pkg03: 'Hi M7 Fitness, I am a student and want to join Package 03: Student Plan (Rs. 3,500/month).',
} as const;

export type WaMessageKey = keyof typeof WA_MESSAGES;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function waUrl(key: WaMessageKey): string {
  return buildWhatsAppUrl(WA_MESSAGES[key]);
}
