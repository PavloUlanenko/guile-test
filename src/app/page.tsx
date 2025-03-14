import AppointmentDashboard from '@/components/appointment-dashboard';
import { DashboardSkeleton } from '@/components/loading-skeleton';
import Sidebar from '@/components/sidebar';
import { fetchMockData } from '@/lib/data-utils';
import { Suspense } from 'react';

export default async function Home() {
  // Fetch data once at the page level
  const data = await fetchMockData();

  // Create user object for sidebar
  const user = {
    name: data.user.name,
    bookings: data.user.bookings,
    spent: data.user.totalSpent,
    avatar: '',
  };

  return (
    <main className="dark flex min-h-screen w-full flex-col">
      <div className="bg-background text-foreground flex min-h-screen w-full">
        {/* Sidebar with actual user data */}
        <Sidebar user={user} />

        {/* Main content with loading state */}
        <Suspense fallback={<DashboardSkeleton />}>
          <AppointmentDashboard initialData={data} />
        </Suspense>
      </div>
    </main>
  );
}
