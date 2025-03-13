export interface User {
  name: string
  bookings: number
  totalSpent: string
}

export interface Appointment {
  id: number
  barber: string
  image: string
  service: string
  date: string
  status: string
  type: "upcoming" | "past"
}

export interface MockData {
  user: User
  appointments: Appointment[]
}