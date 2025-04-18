
import { Home, Users, BookText, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About Us', url: '/about', icon: Users },
    { name: 'Resource Center', url: '/projects', icon: BookText },
    { name: 'Contact Us', url: '/contact', icon: Mail }
  ]

  return (
    <div className="w-full">
      <NavBar items={navItems} logo="/lovable-uploads/205d5d94-d950-49f6-a520-d2bdb3a39474.png" />
    </div>
  )
}
