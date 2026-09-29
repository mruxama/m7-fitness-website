// M7 Fitness — Data: Products

export interface Product {
  id: string;
  name: string;
  collection: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  slogan: string;
  icon: string;
  images: string[];
  sizes: string[];
  waKey: string;
}

export const products: Product[] = [
  {
    id: 'tshirt',
    name: 'M7 Fitness Performance T-Shirt',
    collection: 'Official Gym Apparel',
    price: 'PKR 2,499',
    tagline: 'Train hard. Wear the mindset.',
    description:
      'The M7 Fitness Performance T-Shirt is designed for athletes who want comfort, confidence, and a powerful gym-ready look. Its clean black finish and bold M7 Fitness branding create a premium athletic aesthetic that works equally well during intense workouts or everyday wear.',
    features: [
      'Premium athletic design',
      'Bold M7 Fitness logo',
      'Comfortable, workout-friendly fit',
      'Lightweight and breathable feel',
      'Durable construction for regular training',
      'Sleek black finish with signature M7 red-and-white branding',
      'Suitable for gym training, fitness sessions, and casual wear',
    ],
    slogan: "Built for movement. Designed for those who don't quit.",
    icon: '/icons/tshirt.svg',
    images: [
      '/products/tshirt/image (1).png',
      '/products/tshirt/image (2).png',
      '/products/tshirt/image (3).png',
      '/products/tshirt/image (4).png',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    waKey: 'tshirt',
  },
  {
    id: 'shaker',
    name: 'M7 Fitness Premium Shaker',
    collection: 'Supplements & Accessories',
    price: 'PKR 1,499',
    tagline: 'Mix. Train. Recover. Repeat.',
    description:
      'Stay hydrated and keep your nutrition routine on track with the M7 Fitness Premium Shaker. Featuring a sleek matte-black body, signature red accents, and the iconic M7 Fitness logo, it delivers a professional gym aesthetic while remaining practical for everyday use.',
    features: [
      'Premium matte-black finish',
      'Signature M7 Fitness red-and-white branding',
      'Secure shaker lid',
      'Easy-grip design',
      'Ideal for protein shakes, pre-workout, and hydration',
      'Compact and gym-bag friendly',
      'Designed for everyday fitness use',
    ],
    slogan: 'Mix. Train. Recover. Repeat. — M7 Fitness',
    icon: '/icons/bottle.svg',
    images: [
      '/products/shaker/image (1).png',
      '/products/shaker/image (2).png',
      '/products/shaker/image (3).png',
      '/products/shaker/image (4).png',
    ],
    sizes: ['700ml Standard'],
    waKey: 'shaker',
  },
];
