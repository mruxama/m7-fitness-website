// M7 Fitness — Data: Facilities
export interface Facility {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

export const facilities: Facility[] = [
  {
    id: 'solar',
    icon: '/icons/solar.svg',
    title: 'Solar-Powered Backup',
    description: 'High-capacity commercial solar plant guarantees zero load shedding — uninterrupted AC, lighting, and heavy cardio machines, always.',
    highlight: '100% Uninterrupted',
  },
  {
    id: 'strength',
    icon: '/icons/barbell.svg',
    title: 'Manual Strength Floor',
    description: 'Olympic barbells, dumbbells, plate-loaded stations, cable crossovers, flat/incline/decline benches, and monkey bar rigs.',
    highlight: 'Full Commercial Setup',
  },
  {
    id: 'cardio',
    icon: '/icons/treadmill.svg',
    title: 'Cardio Zone',
    description: 'Commercial heavy-duty treadmills and elliptical cross-trainers for sustained cardiovascular performance.',
    highlight: 'Premium Machines',
  },
  {
    id: 'kickboxing',
    icon: '/icons/kickboxing.svg',
    title: 'Kickboxing Arena',
    description: 'Dedicated combat sports space with heavy punching bags and pads. Bundled free with all membership packages.',
    highlight: 'Free with All Plans',
  },
  {
    id: 'recovery',
    icon: '/icons/massage.svg',
    title: 'Recovery Lounge',
    description: 'High-end robotic massage sofa section for active post-workout recovery and muscle restoration. Exclusive to VIP members.',
    highlight: 'VIP Exclusive',
  },
  {
    id: 'cafe',
    icon: '/icons/coffee.svg',
    title: 'In-House Fuel Counter',
    description: 'Commercial espresso, specialty coffees, energy drinks, hydration products, and custom-blended whey protein recovery shakes.',
    highlight: 'On-Site Nutrition',
  },
];
