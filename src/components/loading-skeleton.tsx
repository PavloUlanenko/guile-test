import {Skeleton} from '@/components/skeleton';


export function AppointmentSkeleton() {
  return (
    <div className="border-gray-07 flex flex-wrap items-start justify-between gap-4 border-t py-12">
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
      <div className="flex gap-2 md:flex-col">
        <Skeleton className="h-[37px] w-[140px] rounded-full" />
        <Skeleton className="h-[37px] w-[140px] rounded-full" />
      </div>
    </div>
  )
}

export function SectionSkeleton({ count = 3 }: { count?: number }) {
  return (
    <section className="container mb-[72px]">
      <Skeleton className="mb-10 h-10 w-48" />
      {Array.from({ length: count }).map((_, index) => (
        <AppointmentSkeleton key={index} />
      ))}
    </section>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="flex-1 px-4 pb-6">
      <header className="bg-gradient-header sticky top-0 z-10 flex h-[94px] items-center justify-between px-4 lg:pl-8 lg:pr-20">
        <Skeleton className="h-8 w-32" />
        <div className="flex h-10 items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </header>

      <SectionSkeleton count={2} />
      <SectionSkeleton count={1} />
    </div>
  )
}