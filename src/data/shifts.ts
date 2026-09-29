// M7 Fitness — Data: Shifts
export interface Shift {
  id: string;
  name: string;
  subtitle: string;
  start: string;
  end: string;
  startHour: number; // 24h for timeline positioning
  endHour: number;
  icon: string;
  description: string;
  color: string;
}

export const shifts: Shift[] = [
  {
    id: 'morning',
    name: 'Morning',
    subtitle: 'Men Only',
    start: '6:00 AM',
    end: '9:30 AM',
    startHour: 6,
    endHour: 9.5,
    icon: '/icons/male.svg',
    description: 'Dedicated exclusively to male athletes, powerlifters, and working professionals. Get your session in before the workday begins.',
    color: '#DC2626',
  },
  {
    id: 'ladies',
    name: 'Mid-Day',
    subtitle: 'Ladies Only',
    start: '10:00 AM',
    end: '4:30 PM',
    startHour: 10,
    endHour: 16.5,
    icon: '/icons/female.svg',
    description: 'Strictly private women-only training session with a secure, dedicated floor and a warm, supportive atmosphere.',
    color: '#B91C1C',
  },
  {
    id: 'coed',
    name: 'Evening',
    subtitle: 'Co-Ed',
    start: '4:30 PM',
    end: '1:00 AM',
    startHour: 16.5,
    endHour: 25,
    icon: '/icons/users.svg',
    description: 'Open floor training accessible to all members during peak post-work fitness hours. The most energetic session of the day.',
    color: '#DC2626',
  },
];

export const operatingHours = {
  open: '6:00 AM',
  close: '1:00 AM',
  total: '19 Hours Daily',
};
