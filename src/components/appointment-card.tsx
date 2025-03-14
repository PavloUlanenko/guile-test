import DropdownMenu from '@/components/dropdown-menu';
import { formatAppointmentDate } from '@/lib/data-utils';
import { Appointment } from '@/lib/types';
import Image from 'next/image';

interface AppointmentProps {
  appointment: Appointment;
  showMoreOptions?: boolean;
}

export default function AppointmentCard({
  appointment,
  showMoreOptions = false,
}: AppointmentProps) {
  const { date, time } = formatAppointmentDate(appointment.date);

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('confirmed')) {
      return 'text-gold-01';
    } else if (statusLower.includes('paid')) {
      return 'text-green-01';
    } else if (statusLower.includes('fix') || statusLower.includes('no-show')) {
      return 'text-red-01';
    } else {
      return 'text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    return status.toUpperCase();
  };

  return (
    <div className="flex min-w-[350px] flex-1 flex-col gap-6 md:flex-row md:items-center">
      <div className="h-[84px] w-[84px] flex-shrink-0 overflow-hidden rounded-lg">
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
            <p className="text-h4 mb-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
              {date}
              <span className="bg-white-03 inline-block h-3 w-[3px] rounded-[3px]" />
              <span>{time}</span>
            </p>
          </div>

          {showMoreOptions && <DropdownMenu />}
        </div>

        <p className="text-h5-m text-gray-05 lowercase">{appointment.service}</p>
      </div>
    </div>
  );
}
