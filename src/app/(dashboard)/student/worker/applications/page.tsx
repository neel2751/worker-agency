"use client"

import { useState } from "react"
import { Calendar, MapPin, Building2, MessageSquare, Trash2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const APPLICATIONS = [
  {
    id: 1,
    job: "Senior Mason - Residential Tower",
    company: "Lodha Group",
    location: "Mumbai",
    appliedDate: "2 days ago",
    status: "Shortlisted",
    salary: "₹35K - ₹50K/mo",
    nextStep: "Interview scheduled for Jun 10",
  },
  {
    id: 2,
    job: "Lead Mason - Commercial Complex",
    company: "Brigade Group",
    location: "Bengaluru",
    appliedDate: "5 days ago",
    status: "Under Review",
    salary: "₹28K - ₹40K/mo",
    nextStep: "We're reviewing your profile",
  },
  {
    id: 3,
    job: "Mason - Infrastructure Project",
    company: "HCC",
    location: "Surat",
    appliedDate: "1 week ago",
    status: "Interview",
    salary: "₹30K - ₹45K/mo",
    nextStep: "Interview call on Jun 5",
  },
  {
    id: 4,
    job: "Senior Mason - Hotel Construction",
    company: "Tata Projects",
    location: "Pune",
    appliedDate: "2 weeks ago",
    status: "Rejected",
    salary: "₹32K - ₹48K/mo",
    nextStep: "Not selected for this role",
  },
]

const STATUS_COLORS: Record<string, string> = {
  Shortlisted: "bg-green-100 text-green-700",
  "Under Review": "bg-blue-100 text-blue-700",
  Interview: "bg-purple-100 text-purple-700",
  Rejected: "bg-red-100 text-red-700",
}

export default function WorkerApplicationsPage() {
  const [filterStatus, setFilterStatus] = useState("All")

  const statuses = ["All", "Shortlisted", "Under Review", "Interview", "Rejected"]
  const filteredApplications =
    filterStatus === "All"
      ? APPLICATIONS
      : APPLICATIONS.filter((app) => app.status === filterStatus)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">My Applications</h1>
        <p className="text-foreground/70">
          Track all your job applications and interview progress
        </p>
      </div>

      {/* Status Filters */}
      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filterStatus === status
                ? "bg-brand-500 text-white"
                : "border border-border hover:bg-muted"
            }`}
          >
            {status}
            {status !== "All" && (
              <span className="ml-2 text-sm">
                ({APPLICATIONS.filter((a) => a.status === status).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((app) => (
          <div
            key={app.id}
            className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4 gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">{app.job}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {app.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {app.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {app.appliedDate}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${STATUS_COLORS[app.status]}`}
                >
                  {app.status}
                </span>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-t border-b border-border/30">
              <div>
                <p className="text-xs text-foreground/60 mb-1">Salary Range</p>
                <p className="font-bold text-brand-600">{app.salary}</p>
              </div>
              <div>
                <p className="text-xs text-foreground/60 mb-1">Next Step</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-500" />
                  <p className="font-semibold">{app.nextStep}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-4">
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Message
              </Button>
              <Button
                size="sm"
                variant="outline"
              >
                View Details
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/60 mb-4">
            No applications found for this filter
          </p>
          <Button className="bg-brand-500 hover:bg-brand-600 text-white">
            Browse Jobs
          </Button>
        </div>
      )}
    </div>
  )
}