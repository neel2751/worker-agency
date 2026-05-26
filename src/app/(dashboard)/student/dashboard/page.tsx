"use client"

import { STUDENT_DASHBOARD_STATS } from "@/data/stats"
import {
  Briefcase,
  Users,
  Award,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import type { ComponentType, SVGProps } from "react"

export default function StudentDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="rounded-xl border border-border/50 bg-gradient-to-br from-brand-50/50 to-hiviz-50/30 p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome back, Priya! 👋
        </h1>
        <p className="text-foreground/70">
          Complete your profile to get better job recommendations and increase
          your chances of getting hired.
        </p>

        {/* Profile Completion Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Profile Completion</span>
            <span className="text-sm font-bold text-brand-600">75%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-brand-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STUDENT_DASHBOARD_STATS.map((stat, idx) => {
          return (
            <div
              key={idx}
              className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`h-12 w-12 rounded-lg ${stat.color?.split("-")[0]}-50 flex items-center justify-center`}
                >
                  {(() => {
                    const Icon = stat.icon as ComponentType<SVGProps<SVGSVGElement>>
                    return <Icon className={`h-6 w-6 ${stat.color}`} />
                  })()}
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
            <h2 className="text-xl font-bold">Recent Applications</h2>
            <Link
              href="/student/applications"
              className="text-sm text-brand-600 hover:text-brand-700 font-semibold"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                job: "Civil Site Engineer - Mumbai",
                company: "Brigade Group",
                status: "Shortlisted",
                date: "2 days ago",
              },
              {
                job: "Junior Architect",
                company: "L&T Construction",
                status: "Under Review",
                date: "5 days ago",
              },
              {
                job: "Intern - Construction Management",
                company: "Tata Projects",
                status: "Pending",
                date: "1 week ago",
              },
            ].map((app, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border/30 rounded-lg hover:border-brand-200 transition-colors"
              >
                <div>
                  <p className="font-semibold text-foreground">{app.job}</p>
                  <p className="text-sm text-foreground/60">{app.company}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      app.status === "Shortlisted"
                        ? "bg-green-100 text-green-700"
                        : app.status === "Under Review"
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

        {/* Upcoming Interviews */}
        <div className="rounded-xl border border-border/50 bg-background p-6">
          <h2 className="text-xl font-bold mb-6">Upcoming Interviews</h2>

          <div className="space-y-4">
            <div className="p-4 border border-brand-200 bg-brand-50 dark:bg-brand-500/10 rounded-lg">
              <p className="font-semibold text-sm text-foreground mb-2">
                Site Engineer Interview
              </p>
              <p className="text-xs text-foreground/70 mb-3">
                Brigade Group • Tomorrow at 10:00 AM
              </p>
              <button className="w-full px-3 py-2 text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors">
                Join Meeting
              </button>
            </div>

            <div className="text-center py-8">
              <Clock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-foreground/60">
                No more interviews scheduled
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Recommended For You</h2>
          <Link
            href="/student/jobs"
            className="text-sm text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1"
          >
            See More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Civil Engineering Internship",
              company: "L&T Construction",
              salary: "₹15,000 - ₹25,000",
              location: "Ahmedabad",
            },
            {
              title: "Site Engineer Trainee",
              company: "Brigade Group",
              salary: "₹25,000 - ₹40,000",
              location: "Bengaluru",
            },
            {
              title: "Junior Project Manager",
              company: "Tata Projects",
              salary: "₹30,000 - ₹50,000",
              location: "Pune",
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
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-brand-600">
                  {job.salary}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}