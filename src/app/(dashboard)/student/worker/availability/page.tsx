"use client"

import { useState } from "react"
import { Clock, MapPin, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AVAILABILITY_STATUS, INDIAN_STATES } from "@/lib/constants"
import { cn } from "@/lib/utils"

export default function WorkerAvailabilityPage() {
  const [availability, setAvailability] = useState("Available Now")
  const [preferredLocations, setPreferredLocations] = useState(["Gujarat", "Maharashtra"])
  const [willingToRelocate, setWillingToRelocate] = useState(true)
  const [noticePeriod, setNoticePeriod] = useState("15")
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const toggleLocation = (state: string) => {
    setPreferredLocations((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    )
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Availability Settings</h1>
        <p className="text-foreground/70">Let companies know when and where you're available</p>
      </div>

      {/* Availability Status */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Clock className="h-5 w-5 text-brand-500" />
          Current Availability
        </h2>
        <div className="space-y-3">
          {Object.values(AVAILABILITY_STATUS).map((status) => (
            <label
              key={status}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                availability === status
                  ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10"
                  : "border-border/50 hover:border-brand-200"
              )}
            >
              <input
                type="radio"
                name="availability"
                value={status}
                checked={availability === status}
                onChange={(e) => setAvailability(e.target.value)}
                className="h-4 w-4 accent-brand-500"
              />
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "h-3 w-3 rounded-full",
                    status === "Available Now"
                      ? "bg-green-500"
                      : status === "Not Available"
                        ? "bg-red-500"
                        : "bg-amber-500"
                  )}
                />
                <span className="font-semibold">{status}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Notice Period */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-6">Notice Period</h2>
        <div className="grid grid-cols-3 gap-3">
          {["0", "7", "15", "30", "45", "60"].map((days) => (
            <button
              key={days}
              onClick={() => setNoticePeriod(days)}
              className={cn(
                "p-3 rounded-lg border-2 font-semibold transition-all",
                noticePeriod === days
                  ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10 text-brand-600"
                  : "border-border/50 hover:border-brand-200"
              )}
            >
              {days === "0" ? "Immediate" : `${days} days`}
            </button>
          ))}
        </div>
      </div>

      {/* Preferred Locations */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-brand-500" />
          Preferred Locations
        </h2>
        <p className="text-sm text-foreground/60 mb-6">
          Select states where you prefer to work
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {INDIAN_STATES.map((state) => (
            <button
              key={state}
              onClick={() => toggleLocation(state)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all",
                preferredLocations.includes(state)
                  ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10 text-brand-600"
                  : "border-border/50 hover:border-brand-200"
              )}
            >
              {state}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={willingToRelocate}
            onChange={(e) => setWillingToRelocate(e.target.checked)}
            className="h-4 w-4 rounded accent-brand-500"
          />
          <span className="font-semibold">Willing to relocate anywhere in India</span>
        </label>
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