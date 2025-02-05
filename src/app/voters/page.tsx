import { Metadata } from "next"
import { VotersClient } from "./components/client"

export const metadata: Metadata = {
  title: "Voters Management",
  description: "Register and manage voters in the system",
}

export default function VotersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Voters Management</h2>
      </div>
      <div className="container mx-auto py-10">
        <VotersClient />
      </div>
    </div>
  )
} 