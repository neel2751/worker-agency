"use client"

import { useState } from "react"
import { Camera, Plus, Edit2, Trash2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkerProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-brand-500 to-hiviz-400" />

        {/* Profile Info */}
        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="flex items-end gap-6 -mt-16 mb-6">
            <div className="relative">
              <div className="h-32 w-32 rounded-2xl bg-brand-500 border-4 border-background flex items-center justify-center text-white text-4xl font-bold">
                RK
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full border border-border shadow-sm hover:shadow-md">
                <Camera className="h-4 w-4 text-foreground" />
              </button>
            </div>

            <div className="flex-1 pb-2">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-bold">Rajesh Kumar Sharma</h1>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  ✓ Verified
                </span>
              </div>
              <p className="text-foreground/70 mb-2">
                Senior Mason | 12+ Years Experience | Ahmedabad, Gujarat
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-hiviz-400 text-hiviz-400"
                  />
                ))}
                <span className="text-sm text-foreground/70 ml-1">(47 reviews)</span>
              </div>
            </div>

            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="outline"
              className="h-11"
            >
              <Edit2 className="h-4 w-4 mr-2" />
              {isEditing ? "Save" : "Edit Profile"}
            </Button>
          </div>

          {/* Bio */}
          <p className="text-foreground/70 max-w-2xl">
            Experienced mason with 12+ years working on high-rise residential and
            commercial projects. Led teams of up to 20 masons on projects for Lodha
            Group, Godrej Properties, and Shapoorji Pallonji. Specialize in premium
            finishing work.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Profile Views</span>
                <span className="font-bold">1.2K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Jobs Applied</span>
                <span className="font-bold">34</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Jobs Completed</span>
                <span className="font-bold">23</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Rating</span>
                <span className="font-bold text-brand-600">4.9★</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Availability</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span>Available Now</span>
              </div>
              <button className="w-full px-3 py-2 border border-border rounded-lg hover:bg-muted text-sm font-semibold transition-colors">
                Update Status
              </button>
            </div>
          </div>

          {/* Salary Expectation */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Expected Salary</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-foreground/70 mb-2">Monthly</p>
                <p className="text-2xl font-bold text-brand-600">₹35K - ₹50K</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-2">Daily Wage</p>
                <p className="text-2xl font-bold text-brand-600">₹1,500 - ₹2,500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Skills</h3>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Bricklaying",
                "Plastering",
                "Stonework",
                "Finishing",
                "Team Leadership",
                "Blueprint Reading",
                "Quality Control",
                "Safety Compliance",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Work History</h3>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-4 border border-border/30 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold">Lead Mason</p>
                    <p className="text-sm text-foreground/70">Lodha Group</p>
                    <p className="text-xs text-foreground/60">2022 - Present</p>
                  </div>
                  <button className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-foreground/70">
                  Leading masonry team for 45-floor luxury tower
                </p>
              </div>

              <div className="p-4 border border-border/30 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold">Senior Mason</p>
                    <p className="text-sm text-foreground/70">Godrej Properties</p>
                    <p className="text-xs text-foreground/60">2019 - 2022</p>
                  </div>
                  <button className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Certifications</h3>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="p-4 border border-border/30 rounded-lg flex items-start justify-between">
                <div>
                  <p className="font-semibold text-sm">Skill India Certified Mason - Level 4</p>
                  <p className="text-xs text-foreground/60">NSDC • 2022 • Verified</p>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4 border border-border/30 rounded-lg flex items-start justify-between">
                <div>
                  <p className="font-semibold text-sm">Safety Training Certificate</p>
                  <p className="text-xs text-foreground/60">L&T Institute • 2023 • Verified</p>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}