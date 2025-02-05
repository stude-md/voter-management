import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    name: "John Doe",
    email: "john@example.com",
    action: "Updated contact information",
    time: "2 hours ago",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    action: "Registered as new voter",
    time: "4 hours ago",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    action: "Changed voting location",
    time: "6 hours ago",
  },
]

export function RecentActivities() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${activity.email}`} alt={activity.name} />
            <AvatarFallback>{activity.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
} 