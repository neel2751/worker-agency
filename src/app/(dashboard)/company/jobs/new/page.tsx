"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, X, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WORKER_CATEGORIES, JOB_TYPES, EXPERIENCE_LEVELS, INDIAN_STATES } from "@/lib/constants"
import { cn } from "@/lib/utils"

const STEPS = ["Basic Info", "Details", "Requirements", "Preview"]

export default function PostJobPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [skills, setSkills] = useState<string[]>([])
  const [responsibilities, setResponsibilities] = useState<string[]>([""])
  const [requirements, setRequirements] = useState<string[]>([""])
  const [benefits, setBenefits] = useState<string[]>([""])
  const [newSkill, setNewSkill] = useState("")

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    jobType: "",
    experienceLevel: "",
    city: "",
    state: "",
    salaryMin: "",
    salaryMax: "",
    salaryPeriod: "monthly",
    openings: "",
    deadline: "",
    urgent: false,
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills((prev) => [...prev, newSkill.trim()])
      setNewSkill("")
    }
  }

  const updateListItem = (list: string[], setList: (v: string[]) => void, idx: number, value: string) => {
    const updated = [...list]
    updated[idx] = value
    setList(updated)
  }

  const addListItem = (list: string[], setList: (v: string[]) => void) => {
    setList([...list, ""])
  }

  const removeListItem = (list: string[], setList: (v: string[]) => void, idx: number) => {
    setList(list.filter((_, i) => i !== idx))
  }

  const handleSubmit = () => {
    router.push("/company/jobs")
  }

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Post a New Job</h1>
        <p className="text-foreground/70">Fill in the details to attract the right candidates</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-2">
        {STEPS.map((s, idx) => (
          <div key={s} className="flex items-center gap-2">
            <button
              onClick={() => idx < step && setStep(idx)}
              className={cn(
                "flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold transition-all",
                idx === step
                  ? "bg-brand-500 text-white"
                  : idx < step
                    ? "bg-green-500 text-white cursor-pointer"
                    : "bg-muted text-foreground/40"
              )}
            >
              {idx < step ? "✓" : idx + 1}
            </button>
            <span className={cn("text-sm font-medium hidden sm:inline", idx === step ? "text-brand-600" : "text-foreground/50")}>
              {s}
            </span>
            {idx < STEPS.length - 1 && <div className="w-8 h-px bg-border" />}
          </div>
        ))}
      </div>

      {/* Step 0 — Basic Info */}
      {step === 0 && (
        <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
          <h2 className="text-xl font-bold">Basic Information</h2>

          <div>
            <label className="block text-sm font-semibold mb-2">Job Title *</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Senior Mason - Residential Project"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              >
                <option value="">Select trade</option>
                {WORKER_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Job Type *</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              >
                <option value="">Select type</option>
                {Object.values(JOB_TYPES).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Experience Level *</label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              >
                <option value="">Select level</option>
                {EXPERIENCE_LEVELS.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Number of Openings *</label>
              <input
                name="openings"
                type="number"
                value={formData.openings}
                onChange={handleChange}
                placeholder="e.g. 5"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">City *</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Mumbai"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">State *</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              >
                <option value="">Select state</option>
                {INDIAN_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-semibold mb-2">Salary Range (INR) *</label>
            <div className="flex gap-3 items-center">
              <input
                name="salaryMin"
                type="number"
                value={formData.salaryMin}
                onChange={handleChange}
                placeholder="Min (e.g. 25000)"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
              <span className="text-foreground/60">to</span>
              <input
                name="salaryMax"
                type="number"
                value={formData.salaryMax}
                onChange={handleChange}
                placeholder="Max (e.g. 45000)"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
              <select
                name="salaryPeriod"
                value={formData.salaryPeriod}
                onChange={handleChange}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              >
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
                <option value="project">Project</option>
              </select>
            </div>
          </div>

          {/* Urgent toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="urgent"
              checked={formData.urgent}
              onChange={handleChange}
              className="h-4 w-4 rounded accent-brand-500"
            />
            <span className="font-semibold">Mark as Urgent Hiring</span>
          </label>
        </div>
      )}

      {/* Step 1 — Description */}
      {step === 1 && (
        <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
          <h2 className="text-xl font-bold">Job Description</h2>

          <div>
            <label className="block text-sm font-semibold mb-2">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Describe the role, project, and what the candidate will be doing..."
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Responsibilities</label>
            {responsibilities.map((item, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  value={item}
                  onChange={(e) => updateListItem(responsibilities, setResponsibilities, idx, e.target.value)}
                  placeholder={`Responsibility ${idx + 1}`}
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
                <button onClick={() => removeListItem(responsibilities, setResponsibilities, idx)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button onClick={() => addListItem(responsibilities, setResponsibilities)} className="flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm mt-2">
              <Plus className="h-4 w-4" /> Add Responsibility
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Benefits</label>
            {benefits.map((item, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  value={item}
                  onChange={(e) => updateListItem(benefits, setBenefits, idx, e.target.value)}
                  placeholder={`e.g. Free accommodation, PF & ESI`}
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
                <button onClick={() => removeListItem(benefits, setBenefits, idx)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button onClick={() => addListItem(benefits, setBenefits)} className="flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm mt-2">
              <Plus className="h-4 w-4" /> Add Benefit
            </button>
          </div>
        </div>
      )}

      {/* Step 2 — Requirements */}
      {step === 2 && (
        <div className="rounded-xl border border-border/50 bg-background p-6 space-y-6">
          <h2 className="text-xl font-bold">Requirements & Skills</h2>

          <div>
            <label className="block text-sm font-semibold mb-2">Requirements</label>
            {requirements.map((item, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  value={item}
                  onChange={(e) => updateListItem(requirements, setRequirements, idx, e.target.value)}
                  placeholder={`Requirement ${idx + 1}`}
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
                />
                <button onClick={() => removeListItem(requirements, setRequirements, idx)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button onClick={() => addListItem(requirements, setRequirements)} className="flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm mt-2">
              <Plus className="h-4 w-4" /> Add Requirement
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Required Skills</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill) => (
                <span key={skill} className="flex items-center gap-2 px-3 py-1.5 bg-brand-50 dark:bg-brand-500/10 text-brand-700 rounded-full text-sm font-medium">
                  {skill}
                  <button onClick={() => setSkills(skills.filter((s) => s !== skill))}>
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
                placeholder="Type a skill and press Enter"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
              />
              <Button onClick={addSkill} variant="outline">Add</Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Application Deadline</label>
            <input
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>
      )}

      {/* Step 3 — Preview */}
      {step === 3 && (
        <div className="rounded-xl border border-border/50 bg-background p-6 space-y-4">
          <h2 className="text-xl font-bold mb-4">Preview Your Job Post</h2>

          <div className="p-6 border border-border/30 rounded-xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold">{formData.title || "Job Title"}</h3>
                <p className="text-foreground/70">L&T Construction • {formData.city}, {formData.state}</p>
              </div>
              {formData.urgent && (
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Urgent</span>
              )}
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 bg-muted rounded-full">{formData.jobType || "Job Type"}</span>
              <span className="px-3 py-1 bg-muted rounded-full">{formData.experienceLevel || "Experience"}</span>
              <span className="px-3 py-1 bg-muted rounded-full">{formData.openings || "0"} openings</span>
            </div>

            <div>
              <p className="text-sm text-foreground/60 mb-1">Salary</p>
              <p className="text-xl font-bold text-brand-600">
                ₹{Number(formData.salaryMin || 0).toLocaleString()} - ₹{Number(formData.salaryMax || 0).toLocaleString()} / {formData.salaryPeriod}
              </p>
            </div>

            {formData.description && (
              <div>
                <p className="text-sm font-semibold mb-2">Description</p>
                <p className="text-sm text-foreground/70">{formData.description}</p>
              </div>
            )}

            {skills.length > 0 && (
              <div>
                <p className="text-sm font-semibold mb-2">Skills Required</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
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
            Publish Job <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}