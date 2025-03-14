import AppointmentDashboard from '@/components/appointment-dashboard';
import { DashboardSkeleton } from '@/components/loading-skeleton';
import Sidebar from '@/components/sidebar';
import { Suspense } from 'react';

export default async function Home() {
  const data = await fetchMockDataWithDelay();
  const user = data?.user
    ? {
        name: data.user.name,
        bookings: data.user.bookings,
        spent: data.user.totalSpent,
        avatar: '',
      }
    : { name: '', bookings: 0, spent: '$0', avatar: '' };

  return (
    <main className="dark flex min-h-screen w-full flex-col">
      <div className="bg-background text-foreground flex min-h-screen w-full">
        {/* Sidebar will always be visible, even during loading */}
        <Sidebar user={user} />

        {/* Main content with loading state */}
        <Suspense fallback={<DashboardSkeleton />}>
          <AppointmentDashboard initialData={data} />
        </Suspense>
      </div>
    </main>
  );
}

// Simulate network delay and potential errors
async function fetchMockDataWithDelay() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Fetch the actual data
  const { fetchMockData } = await import('@/lib/data-utils');
  return fetchMockData();
}

export const dynamic = 'force-dynamic';