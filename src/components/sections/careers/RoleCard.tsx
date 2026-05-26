"use client"

import { useState } from "react"
import { CareersForm } from "@/components/forms/CareersForm"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, Briefcase, ArrowRight } from "lucide-react"

interface Job {
  slug: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

export function RoleCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-8 shadow-elev-1 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elev-2">
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {job.department}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
          <MapPin className="h-3 w-3" /> {job.location}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Briefcase className="h-3 w-3" /> {job.type}
        </span>
      </div>

      <h3 className="mb-3 font-display text-2xl font-bold tracking-tight">
        {job.title}
      </h3>
      <p className="mb-8 flex-1 leading-relaxed text-muted-foreground">
        {job.description}
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="group/btn w-fit rounded-full bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90">
            Apply now
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Apply — {job.title}
            </DialogTitle>
          </DialogHeader>
          <CareersForm roleSlug={job.slug} roleTitle={job.title} />
        </DialogContent>
      </Dialog>
    </div>
  )
}