"use client"

import { useState } from "react"
import { Bell, Trash2, CheckCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NOTIFICATIONS = [
  {
    id: 1,
    type: "interview",
    title: "Interview Scheduled",
    message: "Brigade Group has scheduled your interview for Jun 10, 2026 at 10:00 AM",
    timestamp: "2 hours ago",
    read: false,
    icon: "📅",
  },
  {
    id: 2,
    type: "application",
    title: "Application Shortlisted",
    message: "Congratulations! Your application for Site Engineer Trainee at Tata Projects has been shortlisted.",
    timestamp: "1 day ago",
    read: false,
    icon: "✅",
  },
  {
    id: 3,
    type: "job",
    title: "New Job Recommendation",
    message: "A new position matching your profile: Civil Engineering Intern at L&T Construction",
    timestamp: "2 days ago",
    read: true,
    icon: "💼",
  },
  {
    id: 4,
    type: "profile",
    title: "Complete Your Profile",
    message: "You're 75% done! Complete your skills section to improve your chances.",
    timestamp: "3 days ago",
    read: true,
    icon: "👤",
  },
  {
    id: 5,
    type: "application",
    title: "Application Rejected",
    message: "Unfortunately, you were not selected for Architect - Commercial Projects at Godrej Properties.",
    timestamp: "1 week ago",
    read: true,
    icon: "❌",
  },
]

export default function StudentNotificationsPage() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS)
  const [filter, setFilter] = useState("all")

  const unreadCount = notifications.filter((n) => !n.read).length
  const filteredNotifications =
    filter === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-foreground/70">
            {unreadCount} unread • Stay updated on your applications
          </p>
        </div>
        {unreadCount > 0 && (
          <Button
            size="sm"
            variant="outline"
            onClick={markAllAsRead}
            className="gap-2"
          >
            <CheckCheck className="h-4 w-4" />
            Mark All Read
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["all", "unread"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2 rounded-lg font-semibold transition-colors capitalize",
              filter === f
                ? "bg-brand-500 text-white"
                : "border border-border hover:bg-muted"
            )}
          >
            {f}
            {f === "unread" && ` (${unreadCount})`}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      {filteredNotifications.length > 0 ? (
        <div className="space-y-3">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "rounded-lg border p-4 transition-all",
                !notification.read
                  ? "border-brand-200 bg-brand-50/50 dark:bg-brand-500/5"
                  : "border-border/50 bg-background hover:border-brand-200"
              )}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="text-2xl flex-shrink-0">
                  {notification.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-bold text-foreground">
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-brand-500 flex-shrink-0 mt-1.5" />
                    )}
                  </div>

                  <p className="text-sm text-foreground/70 mb-2">
                    {notification.message}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/60 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {notification.timestamp}
                    </span>

                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-brand-600 hover:text-brand-700 font-semibold"
                        >
                          Mark Read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1.5 text-foreground/60 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 rounded-xl border border-border/50 bg-background">
          <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">No Notifications</h3>
          <p className="text-foreground/60">
            You're all caught up! Check back later for updates on your
            applications.
          </p>
        </div>
      )}
    </div>
  )
}