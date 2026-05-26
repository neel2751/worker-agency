"use client"

import { useState } from "react"
import { PROJECTS } from "@/data/projects"
import { INDUSTRIES } from "@/data/industries"
import { MapPin, Users, Clock, ArrowRight, Search, Filter, IndianRupee } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const STATUS_COLORS: Record<string, string> = {
  "Open for Bids": "bg-green-100 text-green-700",
  "In Progress": "bg-blue-100 text-blue-700",
  "On Hold": "bg-amber-100 text-amber-700",
  "Completed": "bg-steel-100 text-steel-600",
  "Cancelled": "bg-red-100 text-red-700",
}

function formatBudget(amount: number) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
  return `₹${(amount / 1000).toFixed(0)}K`
}

export default function ProjectsPage() {
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filtered = PROJECTS.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.city.toLowerCase().includes(search.toLowerCase())
    const matchType = !filterType || p.projectType === filterType
    const matchStatus = !filterStatus || p.status === filterStatus
    return matchSearch && matchType && matchStatus
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero pointer-events-none" />
        <div className="absolute inset-0 grid-pattern-soft pointer-events-none opacity-30" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span className="text-sm font-semibold text-brand-700">
                {PROJECTS.filter((p) => p.status === "Open for Bids").length} Projects Open for Bids
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              Construction Project <span className="text-gradient-brand">Marketplace</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Browse live construction projects, submit bids, and find skilled workers — all in one place.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects by title or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 border border-border rounded-xl bg-background shadow-sm focus:outline-none focus:border-brand-500"
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="gap-2 rounded-xl"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-20">
        {/* Filters */}
        {showFilters && (
          <div className="rounded-xl border border-border/50 bg-background p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Project Type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                >
                  <option value="">All Types</option>
                  {INDUSTRIES.map((i) => (
                    <option key={i.slug} value={i.slug}>{i.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                >
                  <option value="">All Statuses</option>
                  <option value="Open for Bids">Open for Bids</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Sort By</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500">
                  <option>Latest First</option>
                  <option>Budget: High to Low</option>
                  <option>Budget: Low to High</option>
                  <option>Deadline Soon</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <p className="text-sm text-foreground/60 mb-6">{filtered.length} projects found</p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group rounded-xl border border-border/50 bg-background hover:border-brand-200 hover:shadow-card-hover transition-all overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn("px-3 py-1 rounded-full text-xs font-semibold", STATUS_COLORS[project.status])}>
                        {project.status}
                      </span>
                      {project.urgent && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                          Urgent
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-brand-500 transition-colors line-clamp-2 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <img src={project.postedBy.logo} alt={project.postedBy.name} className="h-5 w-5 object-contain" />
                      <span className="text-sm text-foreground/60">{project.postedBy.name}</span>
                      {project.postedBy.verified && <span className="text-green-600 text-xs">✓</span>}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{project.description}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {project.location.city}, {project.location.state}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {project.workforceNeeded.totalWorkers} workers needed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {project.timeline.durationMonths} months
                  </span>
                </div>

                {/* Budget & Bids */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div>
                    <p className="text-xs text-foreground/60 mb-1">Budget Range</p>
                    <p className="text-lg font-bold text-brand-600">
                      {formatBudget(project.budget.min)} - {formatBudget(project.budget.max)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-foreground/60 mb-1">Bids Received</p>
                    <p className="text-lg font-bold">{project.bids}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Scope Tags */}
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {project.scope.slice(0, 3).map((s) => (
                  <span key={s} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">{s}</span>
                ))}
                {project.scope.length > 3 && (
                  <span className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/50">
                    +{project.scope.length - 3} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold mb-2">No Projects Found</h3>
            <p className="text-foreground/60">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}