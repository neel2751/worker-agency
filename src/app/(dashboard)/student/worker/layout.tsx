"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  UserCircle,
  Search,
  ClipboardList,
  Briefcase,
  Award,
  Wrench,
  TrendingUp,
  Heart,
  Bell,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { WORKER_NAV } from "@/data/navigation"
import { cn } from "@/lib/utils"

export default function WorkerDashboardLayout({
  children,
}: {
  children: ReactNode
}) {
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
        {/* Sidebar Header */}
        <div className="p-6 border-b border-steel-800">
          <Link href="/worker/dashboard" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-brand-500 flex items-center justify-center">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">BuildForce</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {WORKER_NAV.map((item) => {
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
                {Icon && <Icon className="h-5 w-5" />}
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-steel-800 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-steel-300 hover:bg-steel-900 hover:text-white transition-colors text-sm font-medium">
            <Settings className="h-5 w-5" />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-steel-300 hover:bg-steel-900 hover:text-white transition-colors text-sm font-medium">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-border/50 bg-background/95 backdrop-blur flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              {sidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-lg relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg">
              <MessageSquare className="h-5 w-5" />
            </button>
            <div className="h-9 w-9 rounded-full bg-brand-500 flex items-center justify-center text-white font-semibold text-sm ml-2">
              RK
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-8">{children}</div>
        </div>
      </main>
    </div>
  )
}