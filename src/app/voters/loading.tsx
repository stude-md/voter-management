import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Skeleton className="h-8 w-[200px]" />
      <div className="space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
        <div className="rounded-md border">
          <div className="h-[400px] relative">
            <Skeleton className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  )
} 