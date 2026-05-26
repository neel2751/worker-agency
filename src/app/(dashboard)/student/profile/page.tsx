"use client"

import { useState } from "react"
import { Camera, Plus, Edit2, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentProfilePage() {
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
                PS
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full border border-border shadow-sm hover:shadow-md">
                <Camera className="h-4 w-4 text-foreground" />
              </button>
            </div>

            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-bold mb-1">Priya Sharma</h1>
              <p className="text-foreground/70">
                Final Year Civil Engineering Student • Nirma University
              </p>
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
            Passionate about sustainable construction and smart infrastructure.
            Completed internship at Tata Projects. Active in college civil
            engineering society.
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
                <span className="font-bold">248</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Applications</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Interviews</span>
                <span className="font-bold">3</span>
              </div>
            </div>
          </div>

          {/* Completion */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <h3 className="font-bold mb-4">Profile Completion</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Education</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Resume</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <span>Portfolio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Education */}
          <div className="rounded-xl border border-border/50 bg-background p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Education</h3>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-4 border border-border/30 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold">B.Tech in Civil Engineering</p>
                    <p className="text-sm text-foreground/70">
                      Nirma University • 2022 - 2026
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-brand-600">
                    CGPA: 8.7
                  </span>
                </div>
              </div>
            </div>
          </div>

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
                "Structural Analysis",
                "AutoCAD",
                "Revit",
                "Site Planning",
                "Leadership",
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
                  <p className="font-semibold text-sm">AutoCAD Civil 3D</p>
                  <p className="text-xs text-foreground/60">
                    Autodesk • 2024
                  </p>
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