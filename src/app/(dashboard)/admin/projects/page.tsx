"use client"

import { useState } from "react"
import { Search, Eye, Ban, Hammer, CheckCircle2, Building2 } from "lucide-react"
import { PROJECTS } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const STATUS_COLORS: Record<string, string> = {
  "Open for Bids": "bg-green-100 text-green-700",
  "In Progress": "bg-blue-100 text-blue-700",
  "On Hold": "bg-amber-100 text-amber-700",
  Completed: "bg-steel-100 text-steel-600",
  Cancelled: "bg-red-100 text-red-700",
}

function formatBudget(amount: number) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
  return `₹${(amount / 1000).toFixed(0)}K`
}

export default function AdminProjectsPage() {
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")

  const filtered = PROJECTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.postedBy.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = filterStatus === "All" || p.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-foreground/70">{PROJECTS.length} total projects on the marketplace</p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600 text-white">Export Data</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Projects", value: PROJECTS.length, color: "text-foreground" },
          { label: "Open for Bids", value: PROJECTS.filter((p) => p.status === "Open for Bids").length, color: "text-green-600" },
          { label: "In Progress", value: PROJECTS.filter((p) => p.status === "In Progress").length, color: "text-blue-600" },
          { label: "Total Bids", value: PROJECTS.reduce((sum, p) => sum + p.bids, 0), color: "text-brand-600" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border/50 bg-background p-5">
            <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
        >
          <option value="All">All Status</option>
          <option value="Open for Bids">Open for Bids</option>
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Projects Table */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Project</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Posted By</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Location</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Budget</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Bids</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filtered.map((project) => (
                <tr key={project.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                        <Hammer className="h-4 w-4 text-brand-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-sm line-clamp-1">{project.title}</p>
                          {project.verified && <CheckCircle2 className="h-3 w-3 text-green-600" />}
                        </div>
                        <p className="text-xs text-foreground/60 capitalize">{project.projectType.replace(/-/g, " ")}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-foreground/60" />
                      <span className="text-sm font-medium">{project.postedBy.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm text-foreground/70">{project.location.city}</td>
                  <td className="px-6 py-4 hidden md:table-cell text-sm font-bold text-brand-600">
                    {formatBudget(project.budget.min)} - {formatBudget(project.budget.max)}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm font-semibold">{project.bids}</td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", STATUS_COLORS[project.status])}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-muted rounded-lg" title="View"><Eye className="h-4 w-4 text-foreground/60" /></button>
                      <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg" title="Remove"><Ban className="h-4 w-4 text-red-600" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}