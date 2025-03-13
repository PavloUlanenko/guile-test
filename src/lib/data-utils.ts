import type { MockData, Appointment } from "./types"
import path from "path"
import fs from "fs/promises"

export async function fetchMockData(): Promise<MockData> {
  try {
    // Server-side file reading
    if (typeof window === "undefined") {
      try {
        // Read the JSON file from the public directory
        const filePath = path.join(process.cwd(), "public", "mock-data.json")
        const jsonData = await fs.readFile(filePath, "utf8")
        return JSON.parse(jsonData)
      } catch (error) {
        console.error("Error reading mock data file:", error)
        throw error
      }
    }
    // Fallback to fetch for client-side (should not be used in this implementation)
    else {
      const response = await fetch("/mock-data.json")
      if (!response.ok) {
        throw new Error("Failed to fetch mock data")
      }
      return await response.json()
    }
  } catch (error) {
    console.error("Error fetching mock data:", error)
    // Return fallback data if fetch fails
    return {
      user: {
        name: "James Carter",
        bookings: 6,
        totalSpent: "$200+",
      },
      appointments: [],
    }
  }
}

export function formatAppointmentDate(dateString: string): { date: string; time: string } {
  const date = new Date(dateString)

  // Format date like "tuesday, feb 11"
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
  const month = date.toLocaleDateString("en-US", { month: "short" }).toLowerCase()
  const day = date.getDate()

  // Format time like "3:00 pm"
  const time = date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase()

  return {
    date: `${dayOfWeek}, ${month} ${day}`,
    time,
  }
}

export function getUpcomingAppointments(appointments: Appointment[]): Appointment[] {
  return appointments.filter((appointment) => appointment.type === "upcoming")
}

export function getPastAppointments(appointments: Appointment[]): Appointment[] {
  return appointments.filter((appointment) => appointment.type === "past")
}