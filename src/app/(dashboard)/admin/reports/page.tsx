"use client"

import { useState } from "react"
import { AlertTriangle, Eye, CheckCircle2, XCircle, Flag, MessageSquare, Briefcase, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const REPORTS = [
  {
    id: 1,
    type: "Job Post",
    target: "Senior Mason - Quick Build Inc",
    reporter: "Multiple users (12)",
    reason: "Suspicious salary, fake company",
    severity: "High",
    status: "Open",
    submitted: "2 hours ago",
    icon: Briefcase,
  },
  {
    id: 2,
    type: "User Profile",
    target: "Rakesh Sharma (Worker)",
    reporter: "ABC Constructions",
    reason: "Fake credentials, duplicate account",
    severity: "Medium",
    status: "In Review",
    submitted: "5 hours ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "Company",
    target: "XYZ Builders",
    reporter: "Mohammed Khan (Worker)",
    reason: "Non-payment of dues, harassment",
    severity: "High",
    status: "Open",
    submitted: "1 day ago",
    icon: Building2,
  },
  {
    id: 4,
    type: "Message",
    target: "Inappropriate message in chat",
    reporter: "Priya Sharma",
    reason: "Spam, inappropriate content",
    severity: "Low",
    status: "Resolved",
    submitted: "2 days ago",
    icon: MessageSquare,
  },
  {
    id: 5,
    type: "Job Post",
    target: "Welder - Urgent Hiring",
    reporter: "Multiple users (5)",
    reason: "Misleading job description",
    severity: "Medium",
    status: "In Review",
    submitted: "3 days ago",
    icon: Briefcase,
  },
  {
    id: 6,
    type: "Project",
    target: "Highway Renovation - Bharuch",
    reporter: "Singh Contractors",
    reason: "Duplicate listing",
    severity: "Low",
    status: "Open",
    submitted: "4 days ago",
    icon: Flag,
  },
]

const SEVERITY_COLORS: Record<string, string> = {
  High: "bg-red-100 text-red-700 border-red-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Low: "bg-blue-100 text-blue-700 border-blue-200",
}

const STATUS_COLORS: Record<string, string> = {
  Open: "bg-red-100 text-red-700",
  "In Review": "bg-blue-100 text-blue-700",
  Resolved: "bg-green-100 text-green-700",
  Dismissed: "bg-steel-100 text-steel-600",
}

export default function AdminReportsPage() {
  const [reports, setReports] = useState(REPORTS)
  const [filterSeverity, setFilterSeverity] = useState("All")
  const [filterStatus, setFilterStatus] = useState("All")

  const filtered = reports.filter((r) => {
    const matchesSeverity = filterSeverity === "All" || r.severity === filterSeverity
    const matchesStatus = filterStatus === "All" || r.status === filterStatus
    return matchesSeverity && matchesStatus
  })

  const updateStatus = (id: number, status: string) => {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Flag className="h-7 w-7 text-brand-500" />
          Reports & Moderation
        </h1>
        <p className="text-foreground/70">
          {reports.filter((r) => r.status === "Open").length} open reports requiring review
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Open", value: reports.filter((r) => r.status === "Open").length, color: "text-red-600" },
          { label: "In Review", value: reports.filter((r) => r.status === "In Review").length, color: "text-blue-600" },
          { label: "Resolved Today", value: 8, color: "text-green-600" },
          { label: "High Severity", value: reports.filter((r) => r.severity === "High").length, color: "text-red-600" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border/50 bg-background p-5">
            <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          value={filterSeverity}
          onChange={(e) => setFilterSeverity(e.target.value)}
          className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
        >
          <option value="All">All Severity</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
        >
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="In Review">In Review</option>
          <option value="Resolved">Resolved</option>
          <option value="Dismissed">Dismissed</option>
        </select>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filtered.map((report) => {
          const Icon = report.icon
          return (
            <div
              key={report.id}
              className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full font-medium">{report.type}</span>
                    <span className={cn("text-xs px-2 py-0.5 rounded-full border font-semibold", SEVERITY_COLORS[report.severity])}>
                      {report.severity}
                    </span>
                    <span className={cn("text-xs px-2 py-0.5 rounded-full font-semibold", STATUS_COLORS[report.status])}>
                      {report.status}
                    </span>
                  </div>
                  <h3 className="font-bold mb-1">{report.target}</h3>
                  <p className="text-sm text-foreground/70 mb-2">
                    <span className="font-semibold">Reason:</span> {report.reason}
                  </p>
                  <p className="text-xs text-foreground/50">
                    Reported by {report.reporter} • {report.submitted}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button size="sm" variant="outline" className="gap-1">
                    <Eye className="h-4 w-4" />
                    Investigate
                  </Button>
                  {report.status !== "Resolved" && report.status !== "Dismissed" && (
                    <>
                      <button
                        onClick={() => updateStatus(report.id, "Resolved")}
                        className="p-2 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors"
                        title="Resolve"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </button>
                      <button
                        onClick={() => updateStatus(report.id, "Dismissed")}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                        title="Dismiss"
                      >
                        <XCircle className="h-5 w-5 text-foreground/60" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}