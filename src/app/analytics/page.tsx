import { Metadata } from "next"
import { AnalyticsClient } from "./components/client"

export const metadata: Metadata = {
  title: "Analytics",
  description: "Voter analytics and insights",
}

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>
      <div className="container mx-auto py-10">
        <AnalyticsClient />
      </div>
    </div>
  )
} 