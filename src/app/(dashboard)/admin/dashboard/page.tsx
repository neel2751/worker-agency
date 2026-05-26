"use client"

import { ADMIN_DASHBOARD_STATS } from "@/data/stats"
import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle2, Users, Building2, Shield } from "lucide-react"
import Link from "next/link"

const RECENT_ACTIVITY = [
  { type: "company-verified", name: "Brigade Group", action: "verified", time: "5 min ago", icon: CheckCircle2, color: "text-green-600" },
  { type: "worker-registered", name: "Rajesh Sharma", action: "registered as Mason", time: "12 min ago", icon: Users, color: "text-blue-600" },
  { type: "pending-verification", name: "ABC Constructions", action: "submitted verification", time: "1 hr ago", icon: AlertTriangle, color: "text-amber-600" },
  { type: "company-verified", name: "Tata Projects", action: "completed KYC", time: "2 hrs ago", icon: CheckCircle2, color: "text-green-600" },
  { type: "report-flagged", name: "Job posting #4521", action: "flagged for review", time: "3 hrs ago", icon: AlertTriangle, color: "text-red-600" },
]

const PENDING_TASKS = [
  { task: "Verify 12 new companies", priority: "high", count: 12 },
  { task: "Review 28 worker profiles", priority: "medium", count: 28 },
  { task: "Approve 5 flagged job posts", priority: "high", count: 5 },
  { task: "Process 14 refund requests", priority: "low", count: 14 },
]

const PRIORITY_COLORS: Record<string, string> = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-blue-100 text-blue-700 border-blue-200",
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-foreground/70">Platform overview and management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ADMIN_DASHBOARD_STATS.map((stat, idx) => {
          const Icon = stat.icon ?? TrendingUp
          return (
            <div key={idx} className="rounded-xl border border-border/50 bg-background p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">+15%</span>
              </div>
              <p className="text-sm text-foreground/70 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-xl border border-border/50 bg-background p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <Link href="/admin/reports" className="text-sm text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {RECENT_ACTIVITY.map((activity, idx) => {
              const Icon = activity.icon ?? AlertTriangle
              return (
                <div key={idx} className="flex items-center gap-4 p-3 border border-border/30 rounded-lg hover:border-brand-200 transition-colors">
                  <div className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center ${activity.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">{activity.name}</span> {activity.action}
                    </p>
                    <p className="text-xs text-foreground/50">{activity.time}</p>
                  </div>
                  <button className="text-xs text-brand-600 hover:text-brand-700 font-semibold">View</button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Pending Tasks</h3>
            <div className="space-y-3">
              {PENDING_TASKS.map((task, idx) => (
                <div key={idx} className={`p-3 rounded-lg border ${PRIORITY_COLORS[task.priority]}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase font-bold">{task.priority}</span>
                    <span className="text-lg font-bold">{task.count}</span>
                  </div>
                  <p className="text-sm font-medium">{task.task}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Quick Stats</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/60">Active Now</span>
                <span className="font-bold">3,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Today's Signups</span>
                <span className="font-bold text-green-600">+128</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Reported Content</span>
                <span className="font-bold text-red-600">7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">System Status</span>
                <span className="font-bold text-green-600 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}