// import type { Appointment, MockData } from "./types"
// import fs from "fs/promises"
// import path from "path"
//
// // Server-side data fetching
// export async function fetchMockData(): Promise<MockData> {
//   try {
//     // Server-side file reading
//     if (typeof window === "undefined") {
//       try {
//         // Read the JSON file from the public directory
//         const filePath = path.join(process.cwd(), "public", "mock-data.json")
//         const jsonData = await fs.readFile(filePath, "utf8")
//         return JSON.parse(jsonData)
//       } catch (error) {
//         console.error("Error reading mock data file:", error)
//         throw error
//       }
//     }
//     // Fallback to fetch for client-side (should not be used in this implementation)
//     else {
//       const response = await fetch("/mock-data.json")
//       if (!response.ok) {
//         throw new Error("Failed to fetch mock data")
//       }
//       return await response.json()
//     }
//   } catch (error) {
//     console.error("Error fetching mock data:", error)
//     // Return fallback data if fetch fails
//     return {
//       user: {
//         name: "James Carter",
//         bookings: 6,
//         totalSpent: "$200+",
//       },
//       appointments: [],
//     }
//   }
// }
//
// // Client-side data fetching - safe to use in client components
// export async function fetchMockDataClient(): Promise<MockData> {
//   try {
//     const response = await fetch("/api/appointments")
//     if (!response.ok) {
//       throw new Error("Failed to fetch appointments")
//     }
//     return await response.json()
//   } catch (error) {
//     console.error("Error fetching mock data:", error)
//     throw error
//   }
// }
//
// export function formatAppointmentDate(dateString: string): { date: string; time: string } {
//   const date = new Date(dateString)
//
//   // Format date like "tuesday, feb 11"
//   const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
//   const month = date.toLocaleDateString("en-US", { month: "short" }).toLowerCase()
//   const day = date.getDate()
//
//   // Format time like "3:00 pm"
//   const time = date
//     .toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     })
//     .toLowerCase()
//
//   return {
//     date: `${dayOfWeek}, ${month} ${day}`,
//     time,
//   }
// }
//
// export function getUpcomingAppointments(appointments: Appointment[]): Appointment[] {
//   return appointments.filter((appointment) => appointment.type === "upcoming")
// }
//
// export function getPastAppointments(appointments: Appointment[]): Appointment[] {
//   return appointments.filter((appointment) => appointment.type === "past")
// }
import type { Appointment, MockData } from './types';

// Mock data that matches your exact structure
const MOCK_DATA: MockData = {
  user: {
    name: 'James Carter',
    bookings: 6,
    totalSpent: '$200+',
  },
  appointments: [
    {
      id: 1,
      barber: 'Malik',
      image: 'barber1.jpg',
      service: 'Skin Fade, Beard Trim & Shape Up',
      date: '2025-02-11T15:00:00Z',
      status: 'Confirmed',
      type: 'upcoming',
    },
    {
      id: 2,
      barber: 'Malik',
      image: 'barber1.jpg',
      service: 'Buzz Cut',
      date: '2025-01-24T11:00:00Z',
      status: 'Fix Payment Issue',
      type: 'past',
    },
    {
      id: 3,
      barber: 'Unknown',
      image: 'barber2.jpg',
      service: 'Buzz Cut',
      date: '2025-01-04T11:00:00Z',
      status: 'Paid',
      type: 'past',
    },
  ],
};

// Server-side data fetching - now uses hardcoded data
export async function fetchMockData(): Promise<MockData> {
  // Simulate a small delay to mimic a real API call
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { ...MOCK_DATA };
}

// Client-side data fetching - safe to use in client components
export async function fetchMockDataClient(): Promise<MockData> {
  try {
    const response = await fetch('/api/appointments');
    if (!response.ok) {
      throw new Error('Failed to fetch appointments');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching mock data:', error);
    throw error;
  }
}

export function formatAppointmentDate(dateString: string): { date: string; time: string } {
  const date = new Date(dateString);

  // Format date like "tuesday, feb 11"
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toLowerCase();
  const day = date.getDate();

  // Format time like "3:00 pm"
  const time = date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    .toLowerCase();

  return {
    date: `${dayOfWeek}, ${month} ${day}`,
    time,
  };
}

export function getUpcomingAppointments(appointments: Appointment[]): Appointment[] {
  return appointments.filter((appointment) => appointment.type === 'upcoming');
}

export function getPastAppointments(appointments: Appointment[]): Appointment[] {
  return appointments.filter((appointment) => appointment.type === 'past');
}
