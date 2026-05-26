"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Search,
  Bell,
  ChevronDown,
  HardHat,
  Building2,
  GraduationCap,
  Hammer,
} from "lucide-react"
import { MAIN_NAV, FOR_DROPDOWN } from "@/data/navigation"
import { SITE_CONFIG } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [forDropdownOpen, setForDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll for navbar shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setForDropdownOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur transition-all duration-300",
        scrolled ? "border-b shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* ===== LOGO ===== */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
            <HardHat className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:inline">
            {SITE_CONFIG.shortName}
          </span>
        </Link>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="hidden lg:flex items-center gap-1">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "text-brand-500"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              )}
            >
              {item.title}
            </Link>
          ))}

          {/* "For" dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setForDropdownOpen(true)}
            onMouseLeave={() => setForDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setForDropdownOpen(!forDropdownOpen)}
            >
              For
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  forDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {forDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] rounded-xl border bg-popover shadow-elev-3 p-4 grid grid-cols-2 gap-4 animate-fade-in">
                {FOR_DROPDOWN.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-2">
                      {group.title}
                    </h4>
                    <div className="flex flex-col gap-1">
                      {group.items.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted transition-colors"
                          >
                            {Icon && (
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                                <Icon className="h-4 w-4" />
                              </div>
                            )}
                            <div>
                              <div className="text-sm font-medium">
                                {item.title}
                              </div>
                              {item.description && (
                                <div className="text-xs text-muted-foreground">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* ===== SEARCH (DESKTOP) ===== */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs, workers, projects..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-muted border border-transparent rounded-lg focus:outline-none focus:border-brand-500 focus:bg-background transition-colors"
            />
          </div>
        </div>

        {/* ===== RIGHT SIDE ACTIONS ===== */}
        <div className="flex items-center gap-2">
          {/* Notifications (placeholder) */}
          <button
            aria-label="Notifications"
            className="hidden md:flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted transition-colors relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-brand-500 animate-ping-slow" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-brand-500" />
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="hidden sm:inline-flex px-3 py-2 text-sm font-medium hover:text-brand-500 transition-colors"
          >
            Login
          </Link>

          {/* Register CTA */}
          <Link
            href="/register"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ===== MOBILE NAV DRAWER ===== */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background animate-fade-in">
          <div className="container py-4 space-y-1">
            {/* Mobile search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs, workers, projects..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-muted border border-transparent rounded-lg focus:outline-none focus:border-brand-500"
              />
            </div>

            {/* Main nav links */}
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-brand-50 text-brand-600"
                    : "hover:bg-muted"
                )}
              >
                {item.title}
              </Link>
            ))}

            {/* Role-based links */}
            <div className="pt-4 mt-4 border-t">
              <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                I am a
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/for-students"
                  className="flex items-center gap-2 p-3 rounded-lg border hover:border-brand-500 hover:bg-brand-50 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 text-brand-500" />
                  <span className="text-sm font-medium">Student</span>
                </Link>
                <Link
                  href="/for-workers"
                  className="flex items-center gap-2 p-3 rounded-lg border hover:border-brand-500 hover:bg-brand-50 transition-colors"
                >
                  <HardHat className="h-5 w-5 text-brand-500" />
                  <span className="text-sm font-medium">Worker</span>
                </Link>
                <Link
                  href="/for-companies"
                  className="flex items-center gap-2 p-3 rounded-lg border hover:border-brand-500 hover:bg-brand-50 transition-colors"
                >
                  <Building2 className="h-5 w-5 text-brand-500" />
                  <span className="text-sm font-medium">Company</span>
                </Link>
                <Link
                  href="/for-contractors"
                  className="flex items-center gap-2 p-3 rounded-lg border hover:border-brand-500 hover:bg-brand-50 transition-colors"
                >
                  <Hammer className="h-5 w-5 text-brand-500" />
                  <span className="text-sm font-medium">Contractor</span>
                </Link>
              </div>
            </div>

            {/* Auth CTAs */}
            <div className="pt-4 mt-4 border-t flex flex-col gap-2">
              <Link
                href="/login"
                className="w-full text-center px-4 py-2.5 text-sm font-medium border rounded-lg hover:bg-muted transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="w-full text-center px-4 py-2.5 text-sm font-semibold bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}