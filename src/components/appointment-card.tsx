import Image from "next/image"
import { formatAppointmentDate } from "@/lib/data-utils"
import {Appointment} from '@/lib/types';
import DropdownMenu from '@/components/dropdown-menu';

interface AppointmentProps {
  appointment: Appointment;
  showMoreOptions?: boolean
}

export default function AppointmentCard({ appointment, showMoreOptions = false }: AppointmentProps) {
  const { date, time } = formatAppointmentDate(appointment.date)

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase()
    if (statusLower.includes("confirmed")) {
      return "text-gold-01"
    } else if (statusLower.includes("paid")) {
      return "text-green-01"
    } else if (statusLower.includes("fix") || statusLower.includes("no-show")) {
      return "text-red-01"
    } else {
      return "text-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    return status.toUpperCase()
  }

  return (
    <div className="min-w-[350px] flex gap-6 flex-1 md:items-center flex-col md:flex-row">
      <div className="h-[84px] w-[84px] rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={`/img/${appointment.image}`}
          alt="Barber"
          width={84}
          height={84}
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <p className={`text-title-12 mb-1.5 ${getStatusColor(appointment.status)}`}>
              {getStatusText(appointment.status)}
            </p>
            <p className="text-h4 flex flex-wrap items-center gap-x-4 gap-y-1 mb-1.5">
              {date}
              <span className="inline-block w-[3px] h-3 bg-white-03 rounded-[3px]" />
              <span>{time}</span>
            </p>
          </div>

          {showMoreOptions && (
            <DropdownMenu />
          )}
        </div>

        <p className="lowercase text-h5-m text-gray-05">{appointment.service}</p>
      </div>
    </div>
  )
}