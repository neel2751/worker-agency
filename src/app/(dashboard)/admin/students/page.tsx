"use client"

import { useState } from "react"
import { Search, Eye, Ban, GraduationCap, CheckCircle2, MapPin } from "lucide-react"
import { STUDENTS } from "@/data/students"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AdminStudentsPage() {
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")

  const filtered = STUDENTS.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.education.institute.toLowerCase().includes(search.toLowerCase())
    const matchesStatus =
      filterStatus === "All" ||
      (filterStatus === "Verified" && s.verified) ||
      (filterStatus === "With Resume" && s.resumeUploaded) ||
      (filterStatus === "Featured" && s.featured)
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Students</h1>
          <p className="text-foreground/70">{STUDENTS.length} registered students</p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600 text-white">Export Data</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Students", value: STUDENTS.length },
          { label: "Verified", value: STUDENTS.filter((s) => s.verified).length },
          { label: "With Resume", value: STUDENTS.filter((s) => s.resumeUploaded).length },
          { label: "Featured", value: STUDENTS.filter((s) => s.featured).length },
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
            placeholder="Search students or institutes..."
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
          <option value="All">All Students</option>
          <option value="Verified">Verified Only</option>
          <option value="With Resume">With Resume</option>
          <option value="Featured">Featured</option>
        </select>
      </div>

      {/* Students Table */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Student</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Institute</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Degree</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Location</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Applications</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filtered.map((student) => (
                <tr key={student.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                        {student.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-sm">{student.name}</p>
                          {student.verified && <CheckCircle2 className="h-3 w-3 text-green-600" />}
                        </div>
                        <p className="text-xs text-foreground/60">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-sm font-medium line-clamp-1">{student.education.institute}</td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
                      {student.education.degree} {student.education.specialization}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="flex items-center gap-1 text-sm text-foreground/70">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{student.location.city}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm font-semibold">{student.applicationsCount}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {student.featured && (
                        <span className="px-2 py-1 bg-hiviz-100 text-hiviz-700 rounded-full text-xs font-semibold">Featured</span>
                      )}
                      {student.resumeUploaded && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Resume</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-muted rounded-lg" title="View"><Eye className="h-4 w-4 text-foreground/60" /></button>
                      <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg" title="Suspend"><Ban className="h-4 w-4 text-red-600" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <p className="text-foreground/60">No students found</p>
          </div>
        )}
      </div>
    </div>
  )
}