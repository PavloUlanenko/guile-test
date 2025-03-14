import { Skeleton } from '@/components/skeleton';

export function SidebarSkeleton() {
  return (
    <div className="bg-black-03 h-screen w-64 p-4">
      <div className="mb-8 flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Skeleton className="mb-3 h-4 w-20" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-full rounded-md" />
            <Skeleton className="h-8 w-full rounded-md" />
            <Skeleton className="h-8 w-full rounded-md" />
          </div>
        </div>

        <div>
          <Skeleton className="mb-3 h-4 w-20" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-full rounded-md" />
            <Skeleton className="h-8 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
