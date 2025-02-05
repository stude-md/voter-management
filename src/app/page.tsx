import { Metadata } from "next"
import Link from "next/link"
import { LuArrowRight, LuShieldCheck, LuCalendar, LuActivity } from "react-icons/lu"
import { ImageSlider } from "@/components/ImageSlider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Home - Voter Management System",
  description: "Welcome to the Voter Management System",
}

const features = [
  {
    icon: LuShieldCheck,
    title: "Secure Registration",
    description: "State-of-the-art security measures to protect voter information and ensure data integrity"
  },
  {
    icon: LuCalendar,
    title: "Event Management",
    description: "Efficiently organize and track election events, registration drives, and community outreach"
  },
  {
    icon: LuActivity,
    title: "Live Analytics",
    description: "Real-time insights and comprehensive reporting tools for data-driven decision making"
  },
]

const slides = [
  {
    url: "/gov-ad-1.jpg",
    title: "Exercise Your Right to Vote"
  },
  {
    url: "/gov-ad-2.jpg",
    title: "Make Your Voice Count"
  },
  {
    url: "/gov-ad-3.jpg",
    title: "Shape Your Community's Future"
  },
]

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative px-4 py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Modern Democracy
              <span className="block text-primary">Simplified</span>
            </h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A comprehensive platform for voter registration, election management, and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">
                  Register to Vote
                  <LuArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Government Initiatives</h2>
          <ImageSlider slides={slides} />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="space-y-1">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1M+</CardTitle>
                <CardDescription>Registered Voters</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>500+</CardTitle>
                <CardDescription>Election Events</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>98%</CardTitle>
                <CardDescription>Voter Satisfaction</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
