"use client"

import { useState } from "react"
import { Search, MoreVertical, Eye, Ban, CheckCircle2, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const USERS = [
  { id: 1, name: "Rajesh Sharma", email: "rajesh@example.com", role: "Worker", category: "Mason", status: "Active", verified: true, joined: "Jan 2025", lastActive: "2h ago" },
  { id: 2, name: "Priya Sharma", email: "priya@nirmauni.ac.in", role: "Student", category: "Civil Engg.", status: "Active", verified: true, joined: "Feb 2025", lastActive: "1d ago" },
  { id: 3, name: "L&T Construction", email: "hr@lt.com", role: "Company", category: "EPC", status: "Active", verified: true, joined: "Aug 2022", lastActive: "1h ago" },
  { id: 4, name: "Mohammed Ashraf", email: "ashraf@example.com", role: "Worker", category: "Electrician", status: "Active", verified: true, joined: "Mar 2025", lastActive: "5h ago" },
  { id: 5, name: "ABC Constructions", email: "info@abc.com", role: "Company", category: "Contractor", status: "Pending", verified: false, joined: "Today", lastActive: "Just now" },
  { id: 6, name: "Suresh Patel", email: "suresh@example.com", role: "Worker", category: "Crane Operator", status: "Suspended", verified: true, joined: "Dec 2024", lastActive: "1 week ago" },
  { id: 7, name: "Arjun Mehta", email: "arjun@vjti.in", role: "Student", category: "Civil Engg.", status: "Active", verified: true, joined: "Apr 2025", lastActive: "3h ago" },
  { id: 8, name: "Brigade Group", email: "hr@brigade.com", role: "Company", category: "Developer", status: "Active", verified: true, joined: "Nov 2022", lastActive: "30m ago" },
]

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
  Suspended: "bg-red-100 text-red-700",
}

const ROLE_COLORS: Record<string, string> = {
  Worker: "bg-blue-100 text-blue-700",
  Student: "bg-purple-100 text-purple-700",
  Company: "bg-brand-100 text-brand-700",
  Admin: "bg-steel-100 text-steel-700",
}

export default function AdminUsersPage() {
  const [search, setSearch] = useState("")
  const [filterRole, setFilterRole] = useState("All")
  const [filterStatus, setFilterStatus] = useState("All")

  const filtered = USERS.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
    const matchesRole = filterRole === "All" || u.role === filterRole
    const matchesStatus = filterStatus === "All" || u.status === filterStatus
    return matchesSearch && matchesRole && matchesStatus
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">User Management</h1>
          <p className="text-foreground/70">{USERS.length} total users</p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600 text-white">Export CSV</Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
          />
        </div>
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
        >
          <option value="All">All Roles</option>
          <option value="Worker">Worker</option>
          <option value="Student">Student</option>
          <option value="Company">Company</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-brand-500"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">User</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Role</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden md:table-cell">Category</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70 hidden lg:table-cell">Joined</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-foreground/70">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-brand-500 flex items-center justify-center text-white font-semibold text-xs">
                        {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-sm">{user.name}</p>
                          {user.verified && <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />}
                        </div>
                        <p className="text-xs text-foreground/60">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", ROLE_COLORS[user.role])}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-sm text-foreground/70">{user.category}</td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", STATUS_COLORS[user.status])}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm text-foreground/70">{user.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-muted rounded-lg" title="View"><Eye className="h-4 w-4 text-foreground/60" /></button>
                      <button className="p-1.5 hover:bg-muted rounded-lg" title="Email"><Mail className="h-4 w-4 text-foreground/60" /></button>
                      <button className="p-1.5 hover:bg-red-50 rounded-lg" title="Suspend"><Ban className="h-4 w-4 text-red-600" /></button>
                      <button className="p-1.5 hover:bg-muted rounded-lg"><MoreVertical className="h-4 w-4 text-foreground/60" /></button>
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