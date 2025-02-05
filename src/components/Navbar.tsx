"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { LuLayoutDashboard, LuVote, LuCalendarDays, LuActivity, LuMenu, LuX, LuLayoutGrid } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const navigation = [
  { name: 'Home', href: '/', icon: LuLayoutGrid },
  { name: 'Dashboard', href: '/dashboard', icon: LuLayoutDashboard },
  { name: 'Voters', href: '/voters', icon: LuVote },
  { name: 'Events', href: '/events', icon: LuCalendarDays },
  { name: 'Analytics', href: '/analytics', icon: LuActivity },
]

export function Navbar() {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  if (status === "loading") {
    return null
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2">
          <LuVote className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">VoteManager</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
          
          {session ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="relative h-8 rounded-full px-2 flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                    <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{session.user?.name}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Profile</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                      <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{session.user?.name}</h3>
                      <p className="text-sm text-muted-foreground">{session.user?.email}</p>
                    </div>
                  </div>
                  <Button 
                    variant="destructive" 
                    className="w-full" 
                    onClick={() => {
                      signOut()
                      setIsOpen(false)
                    }}
                  >
                    Log out
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <LuMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                {session && (
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                      <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{session.user?.name}</p>
                      <p className="text-sm text-muted-foreground">{session.user?.email}</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-2 p-2 text-sm font-medium rounded-md transition-colors hover:bg-accent ${
                        pathname === item.href ? 'bg-accent' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                  {session ? (
                    <Button 
                      variant="destructive" 
                      className="w-full mt-4" 
                      onClick={() => {
                        signOut()
                        setIsOpen(false)
                      }}
                    >
                      Log out
                    </Button>
                  ) : (
                    <div className="flex flex-col gap-2 mt-4">
                      <Button variant="outline" asChild>
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/register">Sign up</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

