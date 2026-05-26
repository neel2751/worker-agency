"use client"

import { CheckCircle2, Clock, AlertCircle, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const PLACEMENTS = [
  {
    id: 1,
    company: "Brigade Group",
    position: "Site Engineer",
    location: "Bengaluru",
    salary: "₹40,000/month",
    joinDate: "Jul 15, 2026",
    status: "Offered",
    stage: "Accepted",
    offerLetter: true,
  },
  {
    id: 2,
    company: "Tata Projects",
    position: "Junior Project Manager",
    location: "Pune",
    salary: "₹45,000/month",
    joinDate: "Aug 01, 2026",
    status: "Under Negotiation",
    stage: "Offer Received",
    offerLetter: true,
  },
]

const STATUS_CONFIG = {
  Offered: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
  "Under Negotiation": {
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  Pending: { icon: AlertCircle, color: "text-blue-600", bg: "bg-blue-50" },
}

export default function StudentPlacementsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Placements & Offers</h1>
        <p className="text-foreground/70">
          Track your job offers and placement journey
        </p>
      </div>

      {/* Placement Cards */}
      {PLACEMENTS.length > 0 ? (
        <div className="space-y-6">
          {PLACEMENTS.map((placement) => {
            const statusConfig =
              STATUS_CONFIG[
                placement.status as keyof typeof STATUS_CONFIG
              ] || STATUS_CONFIG.Pending
            const StatusIcon = statusConfig.icon

            return (
              <div
                key={placement.id}
                className="rounded-xl border border-border/50 bg-background overflow-hidden hover:shadow-card-hover transition-all"
              >
                {/* Top Bar with Status */}
                <div
                  className={`h-1 w-full ${statusConfig.bg.replace(
                    "bg-",
                    "bg-"
                  )}`}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {placement.position}
                      </h3>
                      <p className="text-foreground/70">
                        {placement.company} • {placement.location}
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${statusConfig.bg}`}
                    >
                      <StatusIcon className={`h-5 w-5 ${statusConfig.color}`} />
                      <span
                        className={`font-semibold text-sm ${statusConfig.color}`}
                      >
                        {placement.status}
                      </span>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-border/30">
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">Salary</p>
                      <p className="text-xl font-bold text-brand-600">
                        {placement.salary}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">
                        Joining Date
                      </p>
                      <p className="text-xl font-bold">{placement.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">
                        Current Stage
                      </p>
                      <p className="text-xl font-bold">{placement.stage}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {placement.offerLetter && (
                      <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                        <Award className="h-4 w-4" />
                        Download Offer Letter
                      </Button>
                    )}
                    <Button variant="outline">
                      View Details
                    </Button>
                    <Button variant="outline">
                      Contact HR
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16 rounded-xl border border-border/50 bg-background">
          <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">No Placements Yet</h3>
          <p className="text-foreground/60 mb-6">
            Keep applying to jobs and we'll update you when you get offers!
          </p>
          <Link
            href="/student/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-semibold transition-colors"
          >
            Browse Jobs
          </Link>
        </div>
      )}

      {/* Tips Section */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h3 className="text-lg font-bold mb-4">Placement Tips</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-sm">
              1
            </div>
            <div>
              <p className="font-semibold text-sm">Complete Your Profile</p>
              <p className="text-sm text-foreground/70">
                Companies are 3x more likely to contact you with a complete
                profile
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-sm">
              2
            </div>
            <div>
              <p className="font-semibold text-sm">Add Your Portfolio</p>
              <p className="text-sm text-foreground/70">
                Showcase your past projects and internship work
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-sm">
              3
            </div>
            <div>
              <p className="font-semibold text-sm">Apply Regularly</p>
              <p className="text-sm text-foreground/70">
                Apply to jobs that match your skills and interests daily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}