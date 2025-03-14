import {Skeleton} from '@/components/skeleton';


export function SidebarSkeleton() {
  return (
    <div className="w-64 bg-black-03 h-screen p-4">
      <div className="flex items-center gap-3 mb-8">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Skeleton className="h-4 w-20 mb-3" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-full rounded-md" />
            <Skeleton className="h-8 w-full rounded-md" />
            <Skeleton className="h-8 w-full rounded-md" />
          </div>
        </div>

        <div>
          <Skeleton className="h-4 w-20 mb-3" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-full rounded-md" />
            <Skeleton className="h-8 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}