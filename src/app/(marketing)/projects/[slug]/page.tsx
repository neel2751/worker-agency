import { PROJECTS } from "@/data/projects"
import { notFound } from "next/navigation"
import { MapPin, Users, Clock, Calendar, IndianRupee, FileText, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function formatBudget(amount: number) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`
  return `₹${(amount / 1000).toFixed(0)}K`
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-12 border-b border-border/50 bg-muted/20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-sm font-semibold",
                  project.status === "Open for Bids"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                )}>
                  {project.status}
                </span>
                {project.urgent && (
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">Urgent</span>
                )}
                {project.verified && (
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-brand-100 text-brand-700">✓ Verified</span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

              {/* Posted By */}
              <div className="flex items-center gap-3 mb-6">
                <img src={project.postedBy.logo} alt={project.postedBy.name} className="h-10 w-10 object-contain" />
                <div>
                  <p className="font-semibold">{project.postedBy.name}</p>
                  <p className="text-sm text-foreground/60 capitalize">{project.postedBy.type}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: MapPin, label: "Location", value: `${project.location.city}, ${project.location.state}` },
                  { icon: Clock, label: "Duration", value: `${project.timeline.durationMonths} months` },
                  { icon: Users, label: "Workers Needed", value: `${project.workforceNeeded.totalWorkers}+` },
                  { icon: FileText, label: "Bids", value: `${project.bids} received` },
                ].map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div key={idx} className="bg-background rounded-lg border border-border/50 p-4">
                      <Icon className="h-4 w-4 text-brand-500 mb-2" />
                      <p className="text-xs text-foreground/60 mb-1">{stat.label}</p>
                      <p className="font-semibold text-sm">{stat.value}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bid Card */}
            <div className="w-full lg:w-80 rounded-xl border border-border/50 bg-background p-6 shadow-elev-2 flex-shrink-0">
              <div className="mb-6">
                <p className="text-sm text-foreground/60 mb-1">Budget Range</p>
                <p className="text-3xl font-bold text-brand-600">
                  {formatBudget(project.budget.min)}
                </p>
                <p className="text-sm text-foreground/60">
                  to {formatBudget(project.budget.max)}
                </p>
              </div>

              {project.deadline && (
                <div className="mb-6 p-3 bg-amber-50 dark:bg-amber-500/10 rounded-lg border border-amber-200 dark:border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-sm font-semibold">
                    <Calendar className="h-4 w-4" />
                    Bid Deadline: {new Date(project.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </div>
                </div>
              )}

              {project.status === "Open for Bids" ? (
                <Link href={`/projects/${project.slug}/bid`}>
                  <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white gap-2 h-12 text-base">
                    Submit a Bid
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <Button disabled className="w-full h-12">
                  Bidding Closed
                </Button>
              )}

              <Button variant="outline" className="w-full mt-3 h-11">
                Save Project
              </Button>

              <div className="mt-6 pt-6 border-t border-border/30 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/60">Posted</span>
                  <span className="font-medium">{new Date(project.postedDate).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/60">Start Date</span>
                  <span className="font-medium">{new Date(project.timeline.startDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/60">End Date</span>
                  <span className="font-medium">{new Date(project.timeline.endDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h2 className="text-xl font-bold mb-4">Project Description</h2>
              <p className="text-foreground/70 leading-relaxed">{project.description}</p>
            </div>

            {/* Scope */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h2 className="text-xl font-bold mb-4">Scope of Work</h2>
              <div className="space-y-3">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workforce Needed */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h2 className="text-xl font-bold mb-4">Workforce Required</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.workforceNeeded.categories.map((cat, idx) => (
                  <div key={idx} className="p-3 border border-border/30 rounded-lg">
                    <p className="font-semibold text-sm capitalize">{cat.category.replace(/-/g, " ")}</p>
                    <p className="text-brand-600 font-bold">{cat.count} workers</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Attachments */}
            {project.attachments && project.attachments.length > 0 && (
              <div className="rounded-xl border border-border/50 bg-background p-6">
                <h2 className="text-xl font-bold mb-4">Project Documents</h2>
                <div className="space-y-3">
                  {project.attachments.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-border/30 rounded-lg hover:border-brand-200 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-brand-500" />
                        <div>
                          <p className="font-medium text-sm">{file.name}</p>
                          <p className="text-xs text-foreground/60">{file.size}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h3 className="font-bold mb-4">Project Timeline</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/60">Start Date</span>
                  <span className="font-semibold">{new Date(project.timeline.startDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">End Date</span>
                  <span className="font-semibold">{new Date(project.timeline.endDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Duration</span>
                  <span className="font-semibold">{project.timeline.durationMonths} months</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h3 className="font-bold mb-4">Location</h3>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-brand-500 mt-0.5" />
                <div>
                  <p className="font-semibold">{project.location.city}</p>
                  <p className="text-sm text-foreground/60">{project.location.state}</p>
                  {project.location.address && (
                    <p className="text-xs text-foreground/50 mt-1">{project.location.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Similar Projects */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h3 className="font-bold mb-4">Similar Projects</h3>
              <div className="space-y-3">
                {PROJECTS.filter((p) => p.id !== project.id && p.projectType === project.projectType).slice(0, 3).map((p) => (
                  <Link key={p.id} href={`/projects/${p.slug}`} className="block p-3 border border-border/30 rounded-lg hover:border-brand-200 transition-colors">
                    <p className="font-semibold text-sm line-clamp-1">{p.title}</p>
                    <p className="text-xs text-foreground/60">{p.location.city} • {formatBudget(p.budget.max)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}