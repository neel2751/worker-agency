"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PROJECTS } from "@/data/projects"
import { ArrowLeft, ArrowRight, CheckCircle2, IndianRupee, Upload, Plus, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function formatBudget(amount: number) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
  return `₹${(amount / 1000).toFixed(0)}K`
}

export default function SubmitBidPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const project = PROJECTS.find((p) => p.slug === params.slug)

  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [highlights, setHighlights] = useState<string[]>([""])
  const [formData, setFormData] = useState({
    bidAmount: "",
    proposedDuration: "",
    proposedStartDate: "",
    proposal: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const updateHighlight = (idx: number, value: string) => {
    const updated = [...highlights]
    updated[idx] = value
    setHighlights(updated)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (!project) return <div className="container py-20 text-center">Project not found</div>

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md text-center p-8">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Bid Submitted!</h1>
          <p className="text-foreground/70 mb-8">
            Your bid for <span className="font-semibold">{project.title}</span> has been submitted. {project.postedBy.name} will review and respond within 3-5 business days.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/projects">
              <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white">Browse More Projects</Button>
            </Link>
            <Link href="/company/projects">
              <Button variant="outline" className="w-full">View My Bids</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const STEPS = ["Bid Details", "Proposal", "Review"]

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 max-w-3xl">
        {/* Back */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Project
        </Link>

        <h1 className="text-3xl font-bold mb-2">Submit a Bid</h1>
        <p className="text-foreground/70 mb-8">
          Bidding for: <span className="font-semibold text-foreground">{project.title}</span>
        </p>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-8">
          {STEPS.map((s, idx) => (
            <div key={s} className="flex items-center gap-2">
              <div className={cn(
                "flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold transition-all",
                idx === step ? "bg-brand-500 text-white" : idx < step ? "bg-green-500 text-white" : "bg-muted text-foreground/40"
              )}>
                {idx < step ? "✓" : idx + 1}
              </div>
              <span className={cn("text-sm font-medium hidden sm:inline", idx === step ? "text-brand-600" : "text-foreground/50")}>
                {s}
              </span>
              {idx < STEPS.length - 1 && <div className="w-8 h-px bg-border" />}
            </div>
          ))}
        </div>

        {/* Step 0 — Bid Details */}
        {step === 0 && (
          <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
            <h2 className="text-xl font-bold">Bid Details</h2>

            {/* Budget Reference */}
            <div className="p-4 bg-brand-50 dark:bg-brand-500/10 rounded-lg border border-brand-200 dark:border-brand-500/20">
              <p className="text-sm text-brand-700 dark:text-brand-400 font-semibold mb-1">Client's Budget Range</p>
              <p className="text-2xl font-bold text-brand-600">
                {formatBudget(project.budget.min)} — {formatBudget(project.budget.max)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Your Bid Amount (₹) *</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  name="bidAmount"
                  type="number"
                  value={formData.bidAmount}
                  onChange={handleChange}
                  placeholder="e.g. 19500000"
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>
              <p className="text-xs text-foreground/50 mt-1">Enter the total project cost in INR</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Proposed Duration (months) *</label>
                <input
                  name="proposedDuration"
                  type="number"
                  value={formData.proposedDuration}
                  onChange={handleChange}
                  placeholder={`e.g. ${project.timeline.durationMonths}`}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Proposed Start Date *</label>
                <input
                  name="proposedStartDate"
                  type="date"
                  value={formData.proposedStartDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Key Highlights (Why choose you?)</label>
              {highlights.map((h, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    value={h}
                    onChange={(e) => updateHighlight(idx, e.target.value)}
                    placeholder={`e.g. 15+ years of highway construction experience`}
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                  />
                  {highlights.length > 1 && (
                    <button onClick={() => setHighlights(highlights.filter((_, i) => i !== idx))} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => setHighlights([...highlights, ""])}
                className="flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm mt-2"
              >
                <Plus className="h-4 w-4" /> Add Highlight
              </button>
            </div>
          </div>
        )}

        {/* Step 1 — Proposal */}
        {step === 1 && (
          <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
            <h2 className="text-xl font-bold">Project Proposal</h2>

            <div>
              <label className="block text-sm font-semibold mb-2">Detailed Proposal *</label>
              <textarea
                name="proposal"
                value={formData.proposal}
                onChange={handleChange}
                rows={8}
                placeholder="Describe your approach to this project, your team's experience, methodology, quality control measures, and why you're the best fit..."
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Attach Documents (Optional)</label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-brand-300 transition-colors cursor-pointer">
                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                <p className="font-semibold text-foreground/70">Drop files here or click to upload</p>
                <p className="text-sm text-foreground/50 mt-1">Company profile, past project photos, certifications (PDF, JPG — max 10MB)</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Review */}
        {step === 2 && (
          <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
            <h2 className="text-xl font-bold">Review Your Bid</h2>

            <div className="space-y-4 text-sm">
              <div className="p-4 border border-border/30 rounded-lg">
                <p className="text-foreground/60 mb-1">Project</p>
                <p className="font-semibold">{project.title}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-border/30 rounded-lg">
                  <p className="text-foreground/60 mb-1">Bid Amount</p>
                  <p className="font-bold text-brand-600 text-lg">
                    {formData.bidAmount ? `₹${Number(formData.bidAmount).toLocaleString()}` : "Not entered"}
                  </p>
                </div>
                <div className="p-4 border border-border/30 rounded-lg">
                  <p className="text-foreground/60 mb-1">Duration</p>
                  <p className="font-bold text-lg">{formData.proposedDuration || "—"} months</p>
                </div>
                <div className="p-4 border border-border/30 rounded-lg">
                  <p className="text-foreground/60 mb-1">Start Date</p>
                  <p className="font-bold text-lg">{formData.proposedStartDate || "—"}</p>
                </div>
              </div>

              {highlights.filter(Boolean).length > 0 && (
                <div className="p-4 border border-border/30 rounded-lg">
                  <p className="text-foreground/60 mb-2">Key Highlights</p>
                  <ul className="space-y-2">
                    {highlights.filter(Boolean).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {formData.proposal && (
                <div className="p-4 border border-border/30 rounded-lg">
                  <p className="text-foreground/60 mb-2">Proposal Preview</p>
                  <p className="text-foreground/80 line-clamp-4">{formData.proposal}</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-lg text-sm text-amber-700 dark:text-amber-400">
              By submitting this bid, you confirm that all information provided is accurate and you agree to BuildForce's contractor terms.
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>

          {step < STEPS.length - 1 ? (
            <Button onClick={() => setStep((s) => s + 1)} className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white gap-2">
              Submit Bid <CheckCircle2 className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}