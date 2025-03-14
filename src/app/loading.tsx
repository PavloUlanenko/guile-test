import { SidebarSkeleton } from "@/components/sidebar-skeleton"
import { DashboardSkeleton } from "@/components/loading-skeleton"

export default function Loading() {
  return (
    <main className="dark flex min-h-screen w-full flex-col">
      <div className="bg-background text-foreground flex min-h-screen w-full">
        <SidebarSkeleton />
        <DashboardSkeleton />
      </div>
    </main>
  )
}