import Link from "next/link"
import { LuFacebook, LuYoutube, LuTwitter, LuLinkedin } from "react-icons/lu"

const socialLinks = [
  { icon: LuFacebook, href: "#", label: "Facebook" },
  { icon: LuYoutube, href: "#", label: "YouTube" },
  { icon: LuTwitter, href: "#", label: "Twitter" },
  { icon: LuLinkedin, href: "#", label: "LinkedIn" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About VMS</h3>
            <p className="text-sm text-muted-foreground">
              Empowering democracy through secure and efficient voter management solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: contact@vms.gov</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Democracy Ave</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Voter Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 