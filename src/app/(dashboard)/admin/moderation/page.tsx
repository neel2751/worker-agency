"use client"

import { useState } from "react"
import { Shield, AlertTriangle, Flag, Ban, CheckCircle2, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const FLAGGED_CONTENT = [
  {
    id: 1,
    type: "Job Post",
    title: "Make ₹50,000 in 2 days - No experience needed",
    author: "Quick Cash Solutions",
    flagCount: 24,
    autoFlagged: true,
    reason: "Suspected scam, unrealistic compensation",
    severity: "Critical",
    submitted: "1 hour ago",
  },
  {
    id: 2,
    type: "User Profile",
    title: "Fake credentials in resume",
    author: "Pradeep Kumar (Worker)",
    flagCount: 8,
    autoFlagged: false,
    reason: "Multiple users reported fake ITI certificate",
    severity: "High",
    submitted: "3 hours ago",
  },
  {
    id: 3,
    type: "Message Content",
    title: "Inappropriate language in worker chat",
    author: "Anonymous User",
    flagCount: 5,
    autoFlagged: true,
    reason: "Profanity detected by AI filter",
    severity: "Medium",
    submitted: "5 hours ago",
  },
  {
    id: 4,
    type: "Company Listing",
    title: "Duplicate company profile detected",
    author: "BuildPro Constructions",
    flagCount: 3,
    autoFlagged: true,
    reason: "Same GST number as existing verified company",
    severity: "High",
    submitted: "1 day ago",
  },
  {
    id: 5,
    type: "Job Post",
    title: "Discriminatory hiring criteria",
    author: "ABC Builders",
    flagCount: 12,
    autoFlagged: false,
    reason: "Gender-based hiring restrictions",
    severity: "High",
    submitted: "1 day ago",
  },
]

const BANNED_USERS = [
  { name: "Rakesh Fake", reason: "Multiple fake accounts", banned: "2 days ago" },
  { name: "ScamCo Builders", reason: "Fraudulent job postings", banned: "5 days ago" },
  { name: "Anil Spam", reason: "Spam messaging", banned: "1 week ago" },
]

const SEVERITY_COLORS: Record<string, string> = {
  Critical: "bg-red-100 text-red-700 border-red-300",
  High: "bg-orange-100 text-orange-700 border-orange-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Low: "bg-blue-100 text-blue-700 border-blue-200",
}

export default function AdminModerationPage() {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? FLAGGED_CONTENT : FLAGGED_CONTENT.filter((c) => c.severity === filter)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Shield className="h-7 w-7 text-brand-500" />
          Moderation Center
        </h1>
        <p className="text-foreground/70">Review flagged content and manage platform integrity</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Pending Review", value: FLAGGED_CONTENT.length, color: "text-red-600", icon: AlertTriangle },
          { label: "Auto-Flagged", value: FLAGGED_CONTENT.filter((c) => c.autoFlagged).length, color: "text-amber-600", icon: Flag },
          { label: "Banned Users", value: BANNED_USERS.length, color: "text-foreground", icon: Ban },
          { label: "Resolved Today", value: 18, color: "text-green-600", icon: CheckCircle2 },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="rounded-xl border border-border/50 bg-background p-5">
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </div>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["All", "Critical", "High", "Medium", "Low"].map((sev) => (
          <button
            key={sev}
            onClick={() => setFilter(sev)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
              filter === sev ? "bg-brand-500 text-white" : "border border-border hover:bg-muted"
            )}
          >
            {sev}
          </button>
        ))}
      </div>

      {/* Flagged Content List */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-muted rounded-full font-medium">{item.type}</span>
                  <span className={cn("text-xs px-2 py-0.5 rounded-full border font-semibold", SEVERITY_COLORS[item.severity])}>
                    {item.severity}
                  </span>
                  {item.autoFlagged && (
                    <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full font-semibold flex items-center gap-1">
                      <Flag className="h-3 w-3" />
                      Auto-flagged
                    </span>
                  )}
                  <span className="text-xs text-foreground/50 ml-auto">
                    {item.flagCount} flags • {item.submitted}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/70 mb-1">
                  <span className="font-semibold">From:</span> {item.author}
                </p>
                <p className="text-sm text-foreground/60">
                  <span className="font-semibold">Reason:</span> {item.reason}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button size="sm" variant="outline" className="gap-1">
                  <Eye className="h-4 w-4" />
                  Review
                </Button>
                <button className="p-2 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors" title="Approve">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </button>
                <button className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors" title="Remove & Ban">
                  <Ban className="h-5 w-5 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recently Banned */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <Ban className="h-5 w-5 text-red-600" />
          Recently Banned
        </h3>
        <div className="space-y-3">
          {BANNED_USERS.map((user, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-foreground/60">{user.reason}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-foreground/50">{user.banned}</p>
                <button className="text-xs text-brand-600 hover:text-brand-700 font-semibold">Unban</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}