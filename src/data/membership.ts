// M7 Fitness — Data: Membership Packages
export interface Package {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  admission: number;
  baseValue: number;
  inclusions: string[];
  isVip?: boolean;
  isStudent?: boolean;
  waKey: string;
  badge?: string;
}

export const packages: Package[] = [
  {
    id: 'pkg01',
    name: 'Package 01',
    tagline: 'Manual',
    monthly: 3600,
    admission: 2000,
    baseValue: 4500,
    inclusions: [
      'Complete Manual Free-Weights & Plate Machines',
      'Free Wi-Fi',
      'Free Kickboxing Floor Access',
    ],
    waKey: 'pkg01',
  },
  {
    id: 'pkg04',
    name: 'Package 04',
    tagline: 'Treadmill + Manual',
    monthly: 4800,
    admission: 2000,
    baseValue: 6000,
    inclusions: [
      'Complete Manual Free-Weights & Plate Machines',
      'Dedicated Commercial Treadmills',
      'Free Wi-Fi',
      'Free Kickboxing Floor Access',
    ],
    waKey: 'pkg04',
  },
  {
    id: 'pkg02',
    name: 'Package 02',
    tagline: 'Premium',
    monthly: 8000,
    admission: 2000,
    baseValue: 10000,
    inclusions: [
      'Full Manual Gear',
      'Treadmills & Elliptical Cross-Trainers',
      'Solar AC Backup',
      'Free Wi-Fi',
      'Kickboxing Floor Access',
    ],
    badge: 'Most Popular',
    waKey: 'pkg02',
  },
  {
    id: 'pkg05',
    name: 'Package 05',
    tagline: 'Overall / VIP',
    monthly: 12000,
    admission: 2000,
    baseValue: 15000,
    inclusions: [
      'Full Gym Access (Manual + Cardio)',
      'Solar AC Backup',
      'Free Wi-Fi',
      'Kickboxing Floor Access',
      'Massage Sofa Recovery Sessions',
      'Complimentary Coffee Serving',
    ],
    isVip: true,
    badge: 'VIP',
    waKey: 'vip',
  },
  {
    id: 'pkg03',
    name: 'Package 03',
    tagline: 'Student Plan',
    monthly: 3500,
    admission: 1000,
    baseValue: 4200,
    inclusions: [
      'Full Manual & Kickboxing Access',
      'Subsidized Student Rate',
      'Requires Valid Student ID',
    ],
    isStudent: true,
    badge: 'Student',
    waKey: 'student',
  },
];
