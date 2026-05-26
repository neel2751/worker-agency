"use client"

import { useState } from "react"
import { LATEST_JOBS } from "@/data/jobs"
import { MapPin, Briefcase, Clock, Heart, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function StudentJobsPage() {
  const [filters, setFilters] = useState({
    search: "",
    jobType: "",
    location: "",
    salary: "",
  })
  const [savedJobs, setSavedJobs] = useState<string[]>([])

  const toggleSave = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    )
  }

  const displayJobs = LATEST_JOBS.slice(0, 12)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Browse Opportunities</h1>
        <p className="text-foreground/70">
          Discover internships and entry-level positions tailored for students
        </p>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-semibold mb-2">Search</label>
            <input
              type="text"
              placeholder="Job title or keyword..."
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-semibold mb-2">Job Type</label>
            <select
              value={filters.jobType}
              onChange={(e) =>
                setFilters({ ...filters, jobType: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
            >
              <option value="">All Types</option>
              <option value="Internship">Internship</option>
              <option value="Part-time">Part-time</option>
              <option value="Full-time">Full-time</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold mb-2">Location</label>
            <select
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
            >
              <option value="">All Cities</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-semibold mb-2">Salary</label>
            <select
              value={filters.salary}
              onChange={(e) =>
                setFilters({ ...filters, salary: e.target.value })
              }
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
            >
              <option value="">Any Salary</option>
              <option value="15000">Below ₹15,000</option>
              <option value="25000">₹15,000 - ₹25,000</option>
              <option value="40000">₹25,000 - ₹40,000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayJobs.map((job) => {
          const isSaved = savedJobs.includes(job.id)
          return (
            <div
              key={job.id}
              className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={job.companyLogo}
                  alt={job.companyName}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-foreground leading-tight mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{job.companyName}</p>
                </div>
                <button
                  onClick={() => toggleSave(job.id)}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isSaved
                      ? "bg-red-50 text-red-600"
                      : "hover:bg-muted text-foreground/60"
                  )}
                >
                  <Heart
                    className="h-5 w-5"
                    fill={isSaved ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 mb-4 text-sm">
                <span className="flex items-center gap-1 text-foreground/70">
                  <Briefcase className="h-4 w-4" />
                  {job.jobType}
                </span>
                <span className="flex items-center gap-1 text-foreground/70">
                  <MapPin className="h-4 w-4" />
                  {job.location.city}
                </span>
                <span className="flex items-center gap-1 text-foreground/70">
                  <Clock className="h-4 w-4" />
                  Posted 2d ago
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Salary & CTA */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-xs text-foreground/60 mb-1">Stipend</p>
                  <p className="font-bold text-brand-600">
                    ₹{(job.salary.min / 1000).toFixed(0)}K - ₹
                    {(job.salary.max / 1000).toFixed(0)}K
                  </p>
                </div>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-semibold transition-colors"
                >
                  Apply
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted disabled:opacity-50">
          Previous
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={cn(
              "h-10 w-10 rounded-lg transition-colors",
              page === 1
                ? "bg-brand-500 text-white"
                : "border border-border hover:bg-muted"
            )}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
          Next
        </button>
      </div>
    </div>
  )
}