"use client"

import { useState } from "react"
import { Shield, CheckCircle2, XCircle, Eye, FileText, Building2, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const VERIFICATION_REQUESTS = [
  {
    id: 1,
    name: "ABC Constructions Pvt Ltd",
    type: "Company",
    documentType: "GST Certificate + Company Registration",
    submittedDate: "2 hours ago",
    status: "Pending",
    location: "Pune, MH",
    documents: 3,
  },
  {
    id: 2,
    name: "Rajesh Kumar Sharma",
    type: "Worker",
    documentType: "Aadhaar + ITI Certificate",
    submittedDate: "5 hours ago",
    status: "Pending",
    location: "Ahmedabad, GJ",
    documents: 2,
  },
  {
    id: 3,
    name: "Patel Builders",
    type: "Company",
    documentType: "GST + MSME Certificate",
    submittedDate: "1 day ago",
    status: "In Review",
    location: "Surat, GJ",
    documents: 4,
  },
  {
    id: 4,
    name: "Mohammed Ashraf Khan",
    type: "Worker",
    documentType: "ITI Electrician License",
    submittedDate: "1 day ago",
    status: "In Review",
    location: "Mumbai, MH",
    documents: 2,
  },
  {
    id: 5,
    name: "Singh Contractors",
    type: "Company",
    documentType: "Company Registration",
    submittedDate: "2 days ago",
    status: "Pending",
    location: "Lucknow, UP",
    documents: 3,
  },
  {
    id: 6,
    name: "Suresh Patel",
    type: "Worker",
    documentType: "Crane Operator License",
    submittedDate: "3 days ago",
    status: "Pending",
    location: "Surat, GJ",
    documents: 1,
  },
]

const STATUS_COLORS: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
  "In Review": "bg-blue-100 text-blue-700 border-blue-200",
  Verified: "bg-green-100 text-green-700 border-green-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
}

export default function AdminVerificationsPage() {
  const [requests, setRequests] = useState(VERIFICATION_REQUESTS)
  const [filter, setFilter] = useState<"All" | "Worker" | "Company">("All")

  const filtered = requests.filter((r) => filter === "All" || r.type === filter)

  const handleApprove = (id: number) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Verified" } : r))
    )
  }

  const handleReject = (id: number) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Rejected" } : r))
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Shield className="h-7 w-7 text-brand-500" />
          Verification Requests
        </h1>
        <p className="text-foreground/70">
          {requests.filter((r) => r.status === "Pending").length} pending requests need your attention
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Pending", value: requests.filter((r) => r.status === "Pending").length, color: "amber" },
          { label: "In Review", value: requests.filter((r) => r.status === "In Review").length, color: "blue" },
          { label: "Verified Today", value: 24, color: "green" },
          { label: "Rejected Today", value: 3, color: "red" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border/50 bg-background p-5">
            <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {["All", "Worker", "Company"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab as typeof filter)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
              filter === tab
                ? "bg-brand-500 text-white"
                : "border border-border hover:bg-muted"
            )}
          >
            {tab} {tab !== "All" && `(${requests.filter((r) => r.type === tab).length})`}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filtered.map((request) => (
          <div
            key={request.id}
            className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 transition-all"
          >
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0",
                  request.type === "Company"
                    ? "bg-brand-50 dark:bg-brand-500/10 text-brand-600"
                    : "bg-blue-50 dark:bg-blue-500/10 text-blue-600"
                )}
              >
                {request.type === "Company" ? (
                  <Building2 className="h-6 w-6" />
                ) : (
                  <HardHat className="h-6 w-6" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold">{request.name}</h3>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded-full">{request.type}</span>
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full border font-semibold",
                      STATUS_COLORS[request.status]
                    )}
                  >
                    {request.status}
                  </span>
                </div>
                <p className="text-sm text-foreground/60 mb-1">
                  <FileText className="h-3.5 w-3.5 inline mr-1" />
                  {request.documentType}
                </p>
                <p className="text-xs text-foreground/50">
                  {request.location} • Submitted {request.submittedDate} • {request.documents} documents
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button size="sm" variant="outline" className="gap-1">
                  <Eye className="h-4 w-4" />
                  Review
                </Button>
                {request.status !== "Verified" && request.status !== "Rejected" && (
                  <>
                    <button
                      onClick={() => handleApprove(request.id)}
                      className="p-2 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors"
                      title="Approve"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Reject"
                    >
                      <XCircle className="h-5 w-5 text-red-600" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}