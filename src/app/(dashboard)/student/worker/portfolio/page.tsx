"use client"

import { useState } from "react"
import { Plus, Trash2, Edit2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Lodha World Towers - Worli, Mumbai",
    description: "Premium brick & stone masonry work on 60-floor luxury residential tower",
    images: ["/images/portfolio/lodha-1.jpg"],
    projectType: "Residential",
    date: "2022 - Present",
    role: "Lead Mason",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Godrej Tower - Pune",
    description: "Exterior cladding and wall construction for commercial office tower",
    images: ["/images/portfolio/godrej-1.jpg"],
    projectType: "Commercial",
    date: "2019 - 2022",
    role: "Senior Mason",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Shapoorji Pallonji - Residential Complex",
    description: "Masonry work on premium residential complex with 8 towers",
    images: ["/images/portfolio/sp-1.jpg"],
    projectType: "Residential",
    date: "2015 - 2019",
    role: "Mason",
    rating: 4.7,
  },
]

export default function WorkerPortfolioPage() {
  const [portfolio, setPortfolio] = useState(PORTFOLIO_ITEMS)
  const [isAdding, setIsAdding] = useState(false)

  const removeItem = (id: number) => {
    setPortfolio((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
          <p className="text-foreground/70">
            Showcase your best projects and work samples
          </p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-border/50 bg-background overflow-hidden hover:shadow-card-hover transition-all"
          >
            {/* Image */}
            <div className="aspect-video bg-muted relative overflow-hidden group">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Button
                  size="sm"
                  className="bg-white text-foreground hover:bg-white/90"
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 rounded-full text-xs font-semibold">
                  {item.projectType}
                </span>
                <span className="text-sm font-semibold text-amber-600 flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  {item.rating}★
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                {item.description}
              </p>

              {/* Meta */}
              <div className="space-y-2 mb-4 text-sm border-t border-border/30 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Role</span>
                  <span className="font-semibold">{item.role}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Duration</span>
                  <span className="font-semibold">{item.date}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-2"
                >
                  <Edit2 className="h-4 w-4" />
                  Edit
                </Button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-500/10 border border-red-200 dark:border-red-900/30 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="rounded-xl border-2 border-dashed border-border/50 bg-background hover:border-brand-300 hover:bg-brand-50/30 dark:hover:bg-brand-500/5 transition-all flex flex-col items-center justify-center aspect-video group"
        >
          <Plus className="h-12 w-12 text-muted-foreground group-hover:text-brand-600 transition-colors mb-2" />
          <p className="text-sm font-semibold text-foreground/70 group-hover:text-brand-600">
            Add Project
          </p>
        </button>
      </div>

      {/* Tips Section */}
      <div className="rounded-xl border border-border/50 bg-background p-6">
        <h3 className="text-lg font-bold mb-4">Portfolio Tips</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-sm">
              1
            </div>
            <div>
              <p className="font-semibold text-sm">Add High-Quality Images</p>
              <p className="text-sm text-foreground/70">
                Use clear, well-lit photos of your completed work
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-sm">
              2
            </div>
            <div>
              <p className="font-semibold text-sm">Describe Your Role</p>
              <p className="text-sm text-foreground/70">
                Explain what you did and your responsibilities
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-sm">
              3
            </div>
            <div>
              <p className="font-semibold text-sm">Highlight Key Projects</p>
              <p className="text-sm text-foreground/70">
                Feature your best and most complex work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}