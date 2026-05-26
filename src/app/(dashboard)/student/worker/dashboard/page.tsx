"use client"

import { WORKER_DASHBOARD_STATS } from "@/data/stats"
import {
  Briefcase,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import type { ComponentType } from "react"

export default function WorkerDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="rounded-xl border border-border/50 bg-gradient-to-br from-brand-50/50 to-hiviz-50/30 p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome back, Rajesh! 👋
        </h1>
        <p className="text-foreground/70">
          You're looking great! 12 new jobs matching your profile posted today.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Profile Strength", value: "Excellent", color: "text-green-600" },
            { label: "Response Rate", value: "94%", color: "text-brand-600" },
            { label: "Profile Views", value: "1.2K", color: "text-blue-600" },
            { label: "Job Matches", value: "34", color: "text-purple-600" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-steel-900/60 rounded-lg p-3">
              <p className="text-xs text-foreground/60 mb-1">{stat.label}</p>
              <p className={`font-bold text-lg ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORKER_DASHBOARD_STATS.map((stat, idx) => {
          const Icon = stat.icon as ComponentType<{ className?: string }>
          return (
            <div
              key={idx}
              className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`h-12 w-12 rounded-lg ${stat.color?.split("-")[0]}-50 flex items-center justify-center`}
                >
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <p className="text-sm text-foreground/70 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2 rounded-xl border border-border/50 bg-background p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Active Applications</h2>
            <Link
              href="/worker/applications"
              className="text-sm text-brand-600 hover:text-brand-700 font-semibold"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                job: "Senior Mason - Residential Tower",
                company: "Lodha Group",
                status: "Shortlisted",
                salary: "₹35K - ₹50K/mo",
                date: "2 days ago",
              },
              {
                job: "Mason - Commercial Complex",
                company: "Brigade Group",
                status: "Under Review",
                salary: "₹28K - ₹40K/mo",
                date: "4 days ago",
              },
              {
                job: "Lead Mason - Infrastructure",
                company: "HCC",
                status: "Interview",
                salary: "₹40K - ₹60K/mo",
                date: "1 week ago",
              },
            ].map((app, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border/30 rounded-lg hover:border-brand-200 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{app.job}</p>
                  <p className="text-sm text-foreground/60">{app.company}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      app.status === "Shortlisted"
                        ? "bg-green-100 text-green-700"
                        : app.status === "Interview"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {app.status}
                  </span>
                  <p className="text-xs text-foreground/60">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings & Availability */}
        <div className="space-y-6">
          {/* Monthly Earnings */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              This Month
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-foreground/70 mb-1">Earnings</p>
                <p className="text-3xl font-bold text-green-600">₹87,500</p>
              </div>
              <div className="pt-3 border-t">
                <p className="text-xs text-foreground/60 mb-1">Completed Projects</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="text-lg font-bold mb-4">Current Status</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border-2 border-green-200 bg-green-50 dark:bg-green-500/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="font-semibold text-sm">Available Now</span>
                </div>
                <p className="text-xs text-green-700 dark:text-green-400">
                  You're visible to companies
                </p>
              </div>
              <button className="w-full px-3 py-2 text-sm font-semibold border border-border rounded-lg hover:bg-muted transition-colors">
                Update Availability
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Recommended For You</h2>
          <Link
            href="/worker/jobs"
            className="text-sm text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1"
          >
            See More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Senior Mason - High-Rise Project",
              company: "Shapoorji Pallonji",
              salary: "₹40K - ₹55K/mo",
              location: "Mumbai",
              days: "Posted 1 day ago",
            },
            {
              title: "Lead Mason - Infrastructure",
              company: "L&T Construction",
              salary: "₹45K - ₹65K/mo",
              location: "Ahmedabad",
              days: "Posted 2 days ago",
            },
            {
              title: "Mason - Commercial Building",
              company: "Brigade Group",
              salary: "₹35K - ₹50K/mo",
              location: "Bengaluru",
              days: "Posted 3 days ago",
            },
          ].map((job, idx) => (
            <div
              key={idx}
              className="p-4 border border-border/50 rounded-lg hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer"
            >
              <p className="font-semibold text-foreground mb-1 text-sm line-clamp-2">
                {job.title}
              </p>
              <p className="text-xs text-foreground/60 mb-3">{job.company}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-brand-600">
                  {job.salary}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-foreground/60">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </span>
                <span>{job.days}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}