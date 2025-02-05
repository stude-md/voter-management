import { Metadata } from "next"
import { EventsClient } from "./components/client"

export const metadata: Metadata = {
  title: "Events",
  description: "Manage your election events",
}

export default function EventsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Events</h2>
      </div>
      <div className="container mx-auto py-10">
        <EventsClient />
      </div>
    </div>
  )
} 