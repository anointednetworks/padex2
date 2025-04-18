
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  logo?: string
}

export function NavBar({ items, className, logo }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Set active tab based on current route
    const currentPath = location.pathname;
    const currentItem = items.find(item => item.url === currentPath);
    if (currentItem) {
      setActiveTab(currentItem.name);
    } else {
      // Default to first item if no match
      setActiveTab(items[0].name);
    }
  }, [location.pathname, items]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-5",
        className,
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg shadow-lg rounded-full px-4 py-2 border border-white/20 dark:border-gray-700/30">
          <div className="flex items-center">
            {logo && (
              <div className="mr-auto ml-2">
                <Link to="/">
                  <img src={logo} alt="Padex Benefit Advisors" className="h-10 w-auto" />
                </Link>
              </div>
            )}
            <div className="flex items-center justify-center md:justify-around ml-auto">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(item.name);
                    }}
                    className={cn(
                      "relative px-3 py-2 md:px-4 rounded-full transition-all duration-300 flex items-center gap-2 group",
                      "text-gray-600 dark:text-gray-300 hover:text-primary",
                      isActive ? "text-primary" : ""
                    )}
                  >
                    <span className={cn(
                      "transform transition-all duration-300",
                      isActive ? "text-primary scale-110" : "",
                      "group-hover:scale-110"
                    )}>
                      <Icon size={isMobile ? 20 : 18} strokeWidth={isActive ? 2.5 : 2} />
                    </span>
                    
                    <span className={cn(
                      "hidden md:block font-medium text-sm",
                      isActive ? "text-primary" : ""
                    )}>
                      {item.name}
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
