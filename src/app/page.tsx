import AppointmentDashboard from '@/components/appointment-dashboard';
import { fetchMockData } from '@/lib/data-utils';

export default async function Home() {
  const data = await fetchMockData();

  return (
    <main className="dark flex min-h-screen w-full flex-col items-center justify-center">
      <AppointmentDashboard initialData={data} />
    </main>
  );
}
