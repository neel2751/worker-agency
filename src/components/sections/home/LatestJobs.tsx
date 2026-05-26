import Link from "next/link"
import { LATEST_JOBS, URGENT_JOBS } from "@/data/jobs"
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function LatestJobs() {
  const displayJobs = LATEST_JOBS.slice(0, 6)

  return (
    <section className="py-20 relative bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span className="text-sm font-semibold text-brand-700">Live Openings</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Latest Construction Jobs
            </h2>
            <p className="text-lg text-foreground/60">
              Fresh opportunities posted today across India
            </p>
          </div>
          <Link
            href="/jobs"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-3 text-brand-600 hover:text-brand-700 font-semibold group whitespace-nowrap"
          >
            View All Jobs
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-background hover:border-brand-200 hover:shadow-card-hover transition-all card-lift"
            >
              {/* Urgent badge */}
              {job.urgent && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-red-100 text-red-700 text-xs font-semibold animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    Urgent
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Company info */}
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={job.companyLogo}
                    alt={job.companyName}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground/60">
                      {job.companyName}
                    </p>
                    <p className="text-xs text-muted-foreground">{job.jobType}</p>
                  </div>
                </div>

                {/* Job title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-500 transition-colors line-clamp-2">
                  {job.title}
                </h3>

                {/* Meta info */}
                <div className="flex flex-wrap gap-3 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {job.location.city}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    {job.openings} positions
                  </span>
                </div>

                {/* Salary & CTA */}
                <div className="flex items-end justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Salary</p>
                    <p className="font-bold text-brand-600">
                      ₹{(job.salary.min / 1000).toFixed(0)}K - ₹{(job.salary.max / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors"
          >
            Browse All Jobs
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}