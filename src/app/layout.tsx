import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
// import Navbar from "@/components/Navbar"
import type React from "react"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Voter Management System",
  description: "A secure and modern voter management system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-16">
              {/* <Providers> */}
                {/* <Navbar /> */}
                {children}
              {/* </Providers> */}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

