"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const ageData = [
  { age: "18-24", count: 450 },
  { age: "25-34", count: 875 },
  { age: "35-44", count: 920 },
  { age: "45-54", count: 780 },
  { age: "55-64", count: 605 },
  { age: "65+", count: 410 },
]

const turnoutData = [
  { year: "2016", turnout: 65 },
  { year: "2018", turnout: 58 },
  { year: "2020", turnout: 72 },
  { year: "2022", turnout: 61 },
  { year: "2024", turnout: 78 },
]

const registrationData = [
  { month: "Jan", total: 120 },
  { month: "Feb", total: 145 },
  { month: "Mar", total: 185 },
  { month: "Apr", total: 210 },
  { month: "May", total: 245 },
  { month: "Jun", total: 280 },
]

export function AnalyticsClient() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Age Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageData}>
              <XAxis dataKey="age" />
              <YAxis />
              <Bar dataKey="count" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Historical Turnout</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={turnoutData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Line 
                type="monotone" 
                dataKey="turnout" 
                stroke="#adfa1d" 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>New Registrations (2024)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={registrationData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
} 