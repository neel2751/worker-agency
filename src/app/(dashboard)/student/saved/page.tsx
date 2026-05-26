"use client"

import { useState } from "react"
import { MapPin, Briefcase, Heart, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LATEST_JOBS } from "@/data/jobs"

export default function StudentSavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState(LATEST_JOBS.slice(0, 6))

  const removeSavedJob = (jobId: string) => {
    setSavedJobs((prev) => prev.filter((job) => job.id !== jobId))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Saved Jobs</h1>
        <p className="text-foreground/70">
          {savedJobs.length} jobs saved • Apply whenever you're ready
        </p>
      </div>

      {savedJobs.length > 0 ? (
        <>
          {/* Jobs List */}
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Company Logo */}
                  <img
                    src={job.companyLogo}
                    alt={job.companyName}
                    className="h-14 w-14 rounded-lg object-cover flex-shrink-0"
                  />

                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                        <p className="text-sm text-foreground/70">
                          {job.companyName}
                        </p>
                      </div>
                      <button
                        onClick={() => removeSavedJob(job.id)}
                        className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.jobType}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location.city}
                      </span>
                      <span className="text-brand-600 font-semibold">
                        ₹{(job.salary.min / 1000).toFixed(0)}K - ₹
                        {(job.salary.max / 1000).toFixed(0)}K
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 line-clamp-2 mb-4">
                      {job.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/jobs/${job.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-semibold transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">No Saved Jobs</h3>
          <p className="text-foreground/60 mb-6">
            Start exploring and save jobs that interest you
          </p>
          <Link
            href="/student/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-semibold transition-colors"
          >
            Browse Jobs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  )
}