import ThemeToggle from "@/components/theme-toggle"
import AppointmentDashboard from '@/components/appointment-dashboard';
import {fetchMockData} from '@/lib/data-utils';

// <
// div
// className = "fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none" >
//   < ThemeToggle / >
//   < /div>

export default async function Home() {
  const data = await fetchMockData()

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center dark">
      <AppointmentDashboard initialData={data} />
    </main>
  )
}