"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, Menu, X, Bell, MessageSquare } from "lucide-react"
import { COMPANY_NAV } from "@/data/navigation"
import { cn } from "@/lib/utils"

export default function CompanyDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-steel-950 text-steel-100 overflow-y-auto transition-transform lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-steel-800">
          <Link href="/company/dashboard" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
              LT
            </div>
            <div>
              <p className="text-sm font-bold leading-tight">L&T Construction</p>
              <p className="text-xs text-steel-400">Company Account</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {COMPANY_NAV.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-brand-500 text-white"
                    : "text-steel-300 hover:bg-steel-900 hover:text-white"
                )}
              >
                {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-steel-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-steel-300 hover:bg-steel-900 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border/50 bg-background/95 backdrop-blur flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg"
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden lg:block">
            <p className="text-sm text-foreground/60">Welcome back,</p>
            <p className="font-bold">L&T Construction</p>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button className="p-2 hover:bg-muted rounded-lg relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg">
              <MessageSquare className="h-5 w-5" />
            </button>
            <div className="h-9 w-9 rounded-full bg-brand-500 flex items-center justify-center text-white font-semibold text-sm ml-2">
              LT
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-8">{children}</div>
        </div>
      </main>
    </div>
  )
}