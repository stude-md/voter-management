"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LuCalendar } from "react-icons/lu"

interface Event {
  title: string
  date: string
  location: string
  description: string
  type: string
}

export function EventsClient() {
  const [events] = useState<Event[]>([
    {
      title: "Primary Election",
      date: "2024-03-15",
      location: "City Hall",
      description: "Primary election for party candidates",
      type: "Election"
    },
    {
      title: "Voter Registration Drive",
      date: "2024-02-28",
      location: "Community Center",
      description: "Register new voters and update information",
      type: "Registration"
    },
  ])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            <LuCalendar className="h-8 w-8" />
            <div>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Type:</strong> {event.type}</p>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 