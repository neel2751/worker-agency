"use client"

import { useState } from "react"
import { Plus, X, Save, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WORKER_CATEGORIES } from "@/lib/constants"
import { cn } from "@/lib/utils"

const SUGGESTED_SKILLS = [
  "Bricklaying", "Plastering", "Stonework", "Tile Fixing",
  "Blueprint Reading", "Team Leadership", "Quality Control",
  "Safety Compliance", "Rebar Cutting", "Bar Bending",
  "Arc Welding", "MIG Welding", "Pipe Fitting", "Drainage",
  "Wiring", "Panel Installation", "AutoCAD", "Site Survey",
]

export default function WorkerSkillsPage() {
  const [skills, setSkills] = useState([
    "Bricklaying", "Plastering", "Stonework", "Finishing", "Team Leadership", "Blueprint Reading",
  ])
  const [primaryCategory, setPrimaryCategory] = useState("mason")
  const [experience, setExperience] = useState("Senior Level (5-10 years)")
  const [newSkill, setNewSkill] = useState("")
  const [saved, setSaved] = useState(false)

  const addSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills((prev) => [...prev, skill])
    }
  }

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill))
  }

  const handleAddCustom = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills((prev) => [...prev, newSkill.trim()])
      setNewSkill("")
    }
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Skills & Expertise</h1>
        <p className="text-foreground/70">Manage your trade skills and experience level</p>
      </div>

      {/* Primary Trade */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-brand-500" />
          Primary Trade
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {WORKER_CATEGORIES.slice(0, 12).map((category) => (
            <button
              key={category}
              onClick={() => setPrimaryCategory(category.toLowerCase().replace(/ /g, "-"))}
              className={cn(
                "p-3 rounded-lg border-2 text-sm font-medium transition-all text-left",
                primaryCategory === category.toLowerCase().replace(/ /g, "-")
                  ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10 text-brand-600"
                  : "border-border/50 hover:border-brand-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6">Experience Level</h2>
        <div className="space-y-3">
          {[
            "Fresher (0 years)",
            "Entry Level (0-2 years)",
            "Mid Level (2-5 years)",
            "Senior Level (5-10 years)",
            "Expert (10+ years)",
          ].map((level) => (
            <label
              key={level}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                experience === level
                  ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10"
                  : "border-border/50 hover:border-brand-200"
              )}
            >
              <input
                type="radio"
                name="experience"
                value={level}
                checked={experience === level}
                onChange={(e) => setExperience(e.target.value)}
                className="h-4 w-4 accent-brand-500"
              />
              <span className="font-semibold">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6">Your Skills</h2>

        {/* Current Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-2 px-3 py-1.5 bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 rounded-full text-sm font-medium"
            >
              {skill}
              <button onClick={() => removeSkill(skill)} className="hover:text-red-600 transition-colors">
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
        </div>

        {/* Add Custom Skill */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a custom skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddCustom()}
            className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-brand-500"
          />
          <Button onClick={handleAddCustom} variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>

        {/* Suggested Skills */}
        <div>
          <p className="text-sm font-semibold text-foreground/70 mb-3">Suggested Skills</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_SKILLS.filter((s) => !skills.includes(s)).map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill)}
                className="flex items-center gap-1 px-3 py-1.5 border border-dashed border-border/50 rounded-full text-sm hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"
              >
                <Plus className="h-3 w-3" />
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={handleSave} className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
        {saved && <span className="text-green-600 font-semibold animate-fade-in">✓ Saved</span>}
      </div>
    </div>
  )
}