export interface Appointment {
  id: number;
  barber: string;
  image: string;
  service: string;
  date: string;
  status: string;
  type: 'upcoming' | 'past';
}

export interface User {
  name: string;
  bookings: number;
  totalSpent: string;
}

export interface MockData {
  user: User;
  appointments: Appointment[];
}

export interface MockData {
  user: User;
  appointments: Appointment[];
}
