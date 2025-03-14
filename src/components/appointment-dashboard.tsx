import AccountDropdown from '@/components/account-dropdown';
import AppointmentCard from '@/components/appointment-card';
import Sidebar from '@/components/sidebar';
import { getPastAppointments, getUpcomingAppointments } from '@/lib/data-utils';
import type { MockData } from '@/lib/types';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

interface AppointmentDashboardProps {
  initialData: MockData;
}

export default function AppointmentDashboard({ initialData }: AppointmentDashboardProps) {
  const upcomingAppointments = getUpcomingAppointments(initialData.appointments);
  const pastAppointments = getPastAppointments(initialData.appointments);
  const user = {
    name: initialData.user.name,
    bookings: initialData.user.bookings,
    spent: initialData.user.totalSpent,
    avatar: '',
  };

  return (
    <div className="bg-background text-foreground flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Main content */}
      <div className="mx-auto flex-1 px-4 pb-6">
        {/* Header */}
        <header className="bg-gradient-header sticky top-0 z-10 flex h-[94px] items-center justify-between px-4 lg:pl-8 lg:pr-20">
          <button className="flex items-center text-gray-400 transition-colors hover:text-white">
            <span
              className={
                'bg-black-03 mr-2.5 flex h-3.5 w-3.5 items-center justify-center rounded-full'
              }
            >
              <ChevronLeft className="color-white-04 h-2 w-2" />
            </span>
            <span className="text-gray-04 text-body-16">back to malik</span>
          </button>

          <div className="flex h-10 items-center gap-4">
            <button className="relative flex w-10 items-center justify-center">
              <Image
                src="/img/bell.svg"
                alt="Notification icon"
                width={15}
                height={16}
                className="object-cover"
              />
              <span className="bg-gold-02 absolute left-[21px] top-0 h-1.5 w-1.5 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <AccountDropdown user={user} />
            </div>
          </div>
        </header>

        {/* Coming up section */}
        <section className="container mb-[72px]">
          <h2 className="text-h1 text-white-02 mb-10">coming up.</h2>

          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border-gray-07 flex flex-wrap items-start justify-between gap-4 border-t py-12"
              >
                <AppointmentCard appointment={appointment} />

                <div className="flex gap-2 md:flex-col">
                  <button className="bg-gray-06 text-black-01 text-title-14 h-[37px] w-[140px] rounded-full px-6 hover:bg-gray-200">
                    rebook
                  </button>
                  <button className="text-gray-06 bg-black-03 text-title-14 h-[37px] w-[140px] rounded-full px-6 hover:bg-gray-800">
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
        <section className={'container'}>
          <h2 className="text-h1 text-white-02 mb-10">past.</h2>

          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <div key={appointment.id} className="border-gray-07 border-t py-12">
                <AppointmentCard appointment={appointment} showMoreOptions />
              </div>
            ))
          ) : (
            <p className="text-gray-400">No past appointments</p>
          )}
        </section>
      </div>
    </div>
  );
}
