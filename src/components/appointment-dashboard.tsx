import Image from "next/image"
import { ChevronLeft, Bell, ChevronDown } from "lucide-react"
import Sidebar from "@/components/sidebar"
import AppointmentCard from "@/components/appointment-card"
import { getUpcomingAppointments, getPastAppointments } from "@/lib/data-utils"
import type { MockData } from "@/lib/types"
import Button from '@/components/button';

interface AppointmentDashboardProps {
  initialData: MockData
}

export default function AppointmentDashboard({ initialData }: AppointmentDashboardProps) {
  const upcomingAppointments = getUpcomingAppointments(initialData.appointments)
  const pastAppointments = getPastAppointments(initialData.appointments)
  const user = {
    name: initialData.user.name,
    bookings: initialData.user.bookings,
    spent: initialData.user.totalSpent,
    avatar: "",
  };

  return (
    <div className="flex w-full min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar
        user={user}
      />

      {/* Main content */}
      <div className="flex-1 mx-auto px-4 pb-6">
        {/* Header */}
        <header className="flex justify-between items-center h-[94px] px-4 lg:pl-8 lg:pr-20 sticky top-0 z-10 bg-gradient-header">
          <button className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className={'flex items-center justify-center rounded-full w-3.5 h-3.5 bg-black-03 mr-2.5'}>
              <ChevronLeft className="h-2 w-2 color-white-04" />
            </span>
            <span className="text-gray-04 text-body-16">back to malik</span>
          </button>

          <div className="flex items-center gap-4 h-10">
            <button className="relative w-10 flex items-center justify-center">
              <Image
                src="/img/bell.svg"
                alt="Notification icon"
                width={15}
                height={16}
                className="object-cover"
              />
              <span className="absolute top-0 left-[21px] h-1.5 w-1.5 bg-gold-02 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="  rounded-full overflow-hidden mr-3.5">
                <Image
                  src="/img/avatar.png"
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <ChevronDown className="h-4 w-4 text-white-04 cursor-pointer"/>
            </div>
          </div>
        </header>

        {/* Coming up section */}
        <section className="w-[90%] md:w-[95%] lg:max-w-736px mx-auto mb-[72px]">
          <h2 className="text-h1 text-white-02 mb-10">coming up.</h2>

          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex gap-4 flex-wrap justify-between items-start border-t border-gray-07 py-12">
                <AppointmentCard
                  appointment={appointment}
                />

                <div className="flex md:flex-col gap-2">
                  <button className="w-[140px] h-[37px] bg-gray-06 text-black-01 text-title-14 hover:bg-gray-200 rounded-full px-6">rebook</button>
                  <button className="w-[140px] h-[37px] text-gray-06 bg-black-03 text-title-14 hover:bg-gray-800 rounded-full px-6">
                    call {appointment.barber.toLowerCase()}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No upcoming appointments</p>
          )}
        </section>

        {/* Past section */}
        <section className={'w-[90%] md:w-[95%] lg:max-w-736px mx-auto'}>
          <h2 className="text-h1 text-white-02 mb-10">past.</h2>

          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <div key={appointment.id} className="border-t border-gray-07 py-12">
                <AppointmentCard
                  appointment={appointment}
                  showMoreOptions
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400">No past appointments</p>
          )}
        </section>
      </div>
    </div>
  )
}