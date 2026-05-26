"use client"

import { useState } from "react"
import { Search, Filter, MessageSquare, Eye, CheckCircle2, XCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const APPLICANTS = [
  { id: 1, name: "Rajesh Kumar Sharma", role: "Senior Mason", experience: "12 yrs", location: "Ahmedabad, GJ", rating: 4.9, reviews: 47, status: "Shortlisted", appliedJob: "Senior Mason - Residential Tower", appliedDate: "2 days ago", verified: true },
  { id: 2, name: "Mohammed Ashraf Khan", role: "Electrician", experience: "9 yrs", location: "Mumbai, MH", rating: 4.8, reviews: 38, status: "Under Review", appliedJob: "Certified Electrician - Metro", appliedDate: "3 days ago", verified: true },
  { id: 3, name: "Suresh Patel", role: "Crane Operator", experience: "14 yrs", location: "Surat, GJ", rating: 4.9, reviews: 52, status: "Pending", appliedJob: "Crane Operator - High-Rise", appliedDate: "4 days ago", verified: true },
  { id: 4, name: "Vinod Yadav", role: "Welder", experience: "7 yrs", location: "Pune, MH", rating: 4.7, reviews: 29, status: "Interviewed", appliedJob: "Welder - Bridge Construction", appliedDate: "5 days ago", verified: true },
  { id: 5, name: "Lakshmi Devi", role: "Site Supervisor", experience: "11 yrs", location: "Hyderabad, TS", rating: 4.9, reviews: 41, status: "Shortlisted", appliedJob: "Site Supervisor - Highway", appliedDate: "1 week ago", verified: true },
  { id: 6, name: "Pradeep Mishra", role: "Safety Officer", experience: "6 yrs", location: "Vadodara, GJ", rating: 4.8, reviews: 22, status: "Rejected", appliedJob: "Safety Officer - Industrial", appliedDate: "1 week ago", verified: true },
]

const STATUS_COLORS: Record<string, string> = {
  Shortlisted: "bg-green-100 text-green-700",
  "Under Review": "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
  Interviewed: "bg-purple-100 text-purple-700",
  Rejected: "bg-red-100 text-red-700",
}

export default function CompanyApplicantsPage() {
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [applicants, setApplicants] = useState(APPLICANTS)

  const updateStatus = (id: number, status: string) => {
    setApplicants((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)))
  }

  const filtered = applicants.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.role.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = filterStatus === "All" || a.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const statuses = ["All", "Pending", "Under Review", "Shortlisted", "Interviewed", "Rejected"]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Applicants</h1>
        <p className="text-foreground/70">{applicants.length} total applicants across all job posts</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                filterStatus === s ? "bg-brand-500 text-white" : "border border-border hover:bg-muted"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Applicants Table */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground/70">Applicant</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground/70 hidden md:table-cell">Applied For</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground/70 hidden lg:table-cell">Rating</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground/70">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground/70">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filtered.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {applicant.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm">{applicant.name}</p>
                          {applicant.verified && <span className="text-green-600 text-xs">✓</span>}
                        </div>
                        <p className="text-xs text-foreground/60">{applicant.role} • {applicant.experience} • {applicant.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <p className="text-sm text-foreground/70 line-clamp-1">{applicant.appliedJob}</p>
                    <p className="text-xs text-foreground/50">{applicant.appliedDate}</p>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-hiviz-400 text-hiviz-400" />
                      <span className="font-semibold text-sm">{applicant.rating}</span>
                      <span className="text-xs text-foreground/50">({applicant.reviews})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={applicant.status}
                      onChange={(e) => updateStatus(applicant.id, e.target.value)}
                      className={cn(
                        "text-xs font-semibold px-3 py-1.5 rounded-full border-0 cursor-pointer focus:outline-none",
                        STATUS_COLORS[applicant.status]
                      )}
                    >
                      {Object.keys(STATUS_COLORS).map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="View Profile">
                        <Eye className="h-4 w-4 text-foreground/60" />
                      </button>
                      <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Message">
                        <MessageSquare className="h-4 w-4 text-foreground/60" />
                      </button>
                      <button
                        onClick={() => updateStatus(applicant.id, "Shortlisted")}
                        className="p-1.5 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors"
                        title="Shortlist"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </button>
                      <button
                        onClick={() => updateStatus(applicant.id, "Rejected")}
                        className="p-1.5 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Reject"
                      >
                        <XCircle className="h-4 w-4 text-red-600" />
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
            <p className="text-foreground/60">No applicants found</p>
          </div>
        )}
      </div>
    </div>
  )
}