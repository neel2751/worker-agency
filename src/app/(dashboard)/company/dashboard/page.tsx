"use client"

import { COMPANY_DASHBOARD_STATS } from "@/data/stats"
import { ArrowRight, Plus, Users, TrendingUp, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const RECENT_APPLICANTS = [
  { name: "Rajesh Kumar", role: "Senior Mason", location: "Ahmedabad", status: "Shortlisted", applied: "2h ago" },
  { name: "Mohammed Ashraf", role: "Electrician", location: "Mumbai", status: "Under Review", applied: "5h ago" },
  { name: "Suresh Patel", role: "Crane Operator", location: "Surat", status: "Pending", applied: "1d ago" },
  { name: "Vinod Yadav", role: "Welder", location: "Pune", status: "Shortlisted", applied: "2d ago" },
]

const STATUS_COLORS: Record<string, string> = {
  Shortlisted: "bg-green-100 text-green-700",
  "Under Review": "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
}

export default function CompanyDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="rounded-xl border border-border/50 bg-gradient-to-br from-brand-50/50 to-hiviz-50/30 p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">L&T Construction</h1>
            <p className="text-foreground/70">Mumbai, Maharashtra • EPC Company • 5000+ Employees</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓ Verified</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-semibold">Premium</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/company/jobs/new">
              <Button className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
                <Plus className="h-4 w-4" />
                Post Job
              </Button>
            </Link>
            <Link href="/company/projects/new">
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Post Project
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COMPANY_DASHBOARD_STATS.map((stat, idx) => {
          const Icon = stat.icon as React.ElementType
          return (
            <div key={idx} className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-card-hover transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-sm text-foreground/70 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applicants */}
        <div className="lg:col-span-2 rounded-xl border border-border/50 bg-background p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Applicants</h2>
            <Link href="/company/applicants" className="text-sm text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {RECENT_APPLICANTS.map((applicant, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-border/30 rounded-lg hover:border-brand-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-semibold text-sm">
                    {applicant.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{applicant.name}</p>
                    <p className="text-xs text-foreground/60">{applicant.role} • {applicant.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-1 ${STATUS_COLORS[applicant.status]}`}>
                    {applicant.status}
                  </span>
                  <p className="text-xs text-foreground/60">{applicant.applied}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Active Jobs */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link href="/company/jobs/new" className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-brand-200 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all">
                <Briefcase className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-semibold">Post a New Job</span>
              </Link>
              <Link href="/company/workers" className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-brand-200 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all">
                <Users className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-semibold">Search Workers</span>
              </Link>
              <Link href="/company/analytics" className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-brand-200 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all">
                <TrendingUp className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-semibold">View Analytics</span>
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Active Jobs</h3>
            <div className="space-y-3">
              {[
                { title: "Senior Mason", applicants: 84, urgent: true },
                { title: "Electrician - Metro", applicants: 142, urgent: false },
                { title: "Site Engineer", applicants: 215, urgent: false },
              ].map((job, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                  <div>
                    <p className="text-sm font-semibold">{job.title}</p>
                    <p className="text-xs text-foreground/60">{job.applicants} applicants</p>
                  </div>
                  {job.urgent && (
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">Urgent</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
