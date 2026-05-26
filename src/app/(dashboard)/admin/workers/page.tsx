"use client"

import { useState } from "react"
import { Search, Eye, Ban, Star, MapPin, HardHat } from "lucide-react"
import { WORKERS } from "@/data/workers"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AdminWorkersPage() {
  const [search, setSearch] = useState("")
  const [filterCategory, setFilterCategory] = useState("All")

  const filtered = WORKERS.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.primaryCategory.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = filterCategory === "All" || w.primaryCategory === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Workers</h1>
          <p className="text-foreground/70">{WORKERS.length} registered workers</p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600 text-white">Export Data</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Workers", value: WORKERS.length },
          { label: "Verified", value: WORKERS.filter((w) => w.verified).length },
          { label: "Top Rated", value: WORKERS.filter((w) => w.topRated).length },
          { label: "Available Now", value: WORKERS.filter((w) => w.availability === "Available Now").length },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border/50 bg-background p-5">
            <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search workers by name or trade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
        >
          <option value="All">All Trades</option>
          <option value="mason">Mason</option>
          <option value="electrician">Electrician</option>
          <option value="plumber">Plumber</option>
          <option value="welder">Welder</option>
          <option value="carpenter">Carpenter</option>
          <option value="crane-operator">Crane Operator</option>
          <option value="site-supervisor">Site Supervisor</option>
          <option value="civil-engineer">Civil Engineer</option>
        </select>
      </div>

      {/* Workers Table */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Worker</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Trade</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Experience</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Location</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Rating</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filtered.map((worker) => (
                <tr key={worker.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-brand-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                        {worker.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{worker.name}</p>
                        <p className="text-xs text-foreground/60">Joined {new Date(worker.joinedDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium capitalize">
                      {worker.primaryCategory.replace(/-/g, " ")}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm">
                    {worker.experience.years} yrs
                    <p className="text-xs text-foreground/60">{worker.experience.level}</p>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-3.5 w-3.5 text-foreground/60" />
                      <span>{worker.location.city}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-hiviz-400 text-hiviz-400" />
                      <span className="text-sm font-semibold">{worker.rating}</span>
                      <span className="text-xs text-foreground/50">({worker.reviewCount})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {worker.verified && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓</span>
                      )}
                      {worker.topRated && (
                        <span className="px-2 py-1 bg-hiviz-100 text-hiviz-700 rounded-full text-xs font-semibold">Top</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-muted rounded-lg" title="View">
                        <Eye className="h-4 w-4 text-foreground/60" />
                      </button>
                      <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg" title="Suspend">
                        <Ban className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <HardHat className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <p className="text-foreground/60">No workers found</p>
          </div>
        )}
      </div>
    </div>
  )
}