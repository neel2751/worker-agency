"use client"

import { useState } from "react"
import { Search, Eye, Ban, CheckCircle2, Building2, Star } from "lucide-react"
import { COMPANIES } from "@/data/companies"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AdminCompaniesPage() {
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState("All")

  const filtered = COMPANIES.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase())
    const matchesType = filterType === "All" || c.companyType === filterType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Companies</h1>
          <p className="text-foreground/70">{COMPANIES.length} registered companies</p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600 text-white">Export Data</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Companies", value: COMPANIES.length },
          { label: "Verified", value: COMPANIES.filter((c) => c.verified).length },
          { label: "Premium", value: COMPANIES.filter((c) => c.premium).length },
          { label: "Pending Review", value: 8 },
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
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
        >
          <option value="All">All Types</option>
          <option value="Developer">Developer</option>
          <option value="Contractor">Contractor</option>
          <option value="EPC">EPC</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Consultancy">Consultancy</option>
        </select>
      </div>

      {/* Companies Table */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Company</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Type</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Location</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Jobs</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Rating</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filtered.map((company) => (
                <tr key={company.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-5 w-5 text-foreground/60" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{company.name}</p>
                        <p className="text-xs text-foreground/60">{company.size} employees</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium">{company.companyType}</span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm text-foreground/70">
                    {company.headquarters.city}, {company.headquarters.state}
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-sm font-semibold">{company.activeJobs}</td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-hiviz-400 text-hiviz-400" />
                      <span className="text-sm font-semibold">{company.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {company.verified && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">✓ Verified</span>
                      )}
                      {company.premium && (
                        <span className="px-2 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-semibold">Premium</span>
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
            <p className="text-foreground/60">No companies found</p>
          </div>
        )}
      </div>
    </div>
  )
}