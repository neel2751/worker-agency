"use client"

import { useState } from "react"
import { Search, Filter, Star, MapPin, MessageSquare, UserPlus } from "lucide-react"
import { WORKERS } from "@/data/workers"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CompanyWorkerSearchPage() {
  const [search, setSearch] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [filterAvailability, setFilterAvailability] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filtered = WORKERS.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.primaryCategory.toLowerCase().includes(search.toLowerCase()) ||
      w.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
    const matchesCategory = !filterCategory || w.primaryCategory === filterCategory
    const matchesAvailability = !filterAvailability || w.availability === filterAvailability
    return matchesSearch && matchesCategory && matchesAvailability
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Search Workers</h1>
        <p className="text-foreground/70">Find verified skilled workers for your projects</p>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, trade, or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
          />
        </div>
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="rounded-xl border border-border/50 bg-background p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Trade Category</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              >
                <option value="">All Trades</option>
                <option value="mason">Mason</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="crane-operator">Crane Operator</option>
                <option value="welder">Welder</option>
                <option value="site-supervisor">Site Supervisor</option>
                <option value="civil-engineer">Civil Engineer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Availability</label>
              <select
                value={filterAvailability}
                onChange={(e) => setFilterAvailability(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              >
                <option value="">Any</option>
                <option value="Available Now">Available Now</option>
                <option value="Available in 15 days">Available in 15 days</option>
                <option value="Available in 30 days">Available in 30 days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Experience</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500">
                <option value="">Any Level</option>
                <option value="fresher">Fresher</option>
                <option value="mid">Mid Level (2-5 yrs)</option>
                <option value="senior">Senior (5-10 yrs)</option>
                <option value="expert">Expert (10+ yrs)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <p className="text-sm text-foreground/60">{filtered.length} workers found</p>

      {/* Workers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((worker) => (
          <div key={worker.id} className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="h-14 w-14 rounded-xl bg-brand-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {worker.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold truncate">{worker.name}</h3>
                  {worker.verified && <span className="text-green-600 text-xs flex-shrink-0">✓</span>}
                </div>
                <p className="text-sm text-foreground/60 truncate">{worker.headline}</p>
              </div>
            </div>

            {/* Rating & Location */}
            <div className="flex items-center justify-between mb-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-hiviz-400 text-hiviz-400" />
                <span className="font-semibold">{worker.rating}</span>
                <span className="text-foreground/50">({worker.reviewCount})</span>
              </div>
              <span className="flex items-center gap-1 text-foreground/60">
                <MapPin className="h-3.5 w-3.5" />
                {worker.location.city}
              </span>
            </div>

            {/* Availability Badge */}
            <div className="mb-4">
              <span className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
                worker.availability === "Available Now"
                  ? "bg-green-100 text-green-700"
                  : worker.availability === "Not Available"
                    ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"
              )}>
                <span className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  worker.availability === "Available Now" ? "bg-green-500" : "bg-amber-500"
                )} />
                {worker.availability}
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {worker.skills.slice(0, 3).map((skill) => (
                <span key={skill} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
                  {skill}
                </span>
              ))}
              {worker.skills.length > 3 && (
                <span className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/50">
                  +{worker.skills.length - 3}
                </span>
              )}
            </div>

            {/* Salary */}
            <div className="mb-4 pt-4 border-t border-border/30">
              <p className="text-xs text-foreground/60 mb-1">Expected Salary</p>
              <p className="font-bold text-brand-600 text-sm">
                ₹{(worker.expectedSalary.min / 1000).toFixed(0)}K - ₹{(worker.expectedSalary.max / 1000).toFixed(0)}K/{worker.expectedSalary.period === "monthly" ? "mo" : "day"}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-brand-500 hover:bg-brand-600 text-white gap-2">
                <UserPlus className="h-4 w-4" />
                Invite
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 rounded-xl border border-border/50 bg-background">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">No Workers Found</h3>
          <p className="text-foreground/60">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
