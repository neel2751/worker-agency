import Link from "next/link"
import { POPULAR_CATEGORIES } from "@/data/services"
import { ArrowRight } from "lucide-react"

export function WorkerCategoriesSection() {
  return (
    <section className="py-20 relative">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Find Your Match</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Construction Trades & Skills
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Browse 22+ construction trades. Whether you're hiring or job hunting, find the right fit.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {POPULAR_CATEGORIES.slice(0, 8).map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.slug}
                href={`/workers?category=${category.slug}`}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all card-lift"
              >
                {/* Background accent */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity", category.color)} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center mb-4", category.color)}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Category name */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-500 transition-colors">
                    {category.title}
                  </h3>

                  {/* Stats */}
                  <div className="space-y-2 text-sm mb-4">
                    <p className="text-muted-foreground">
                      {category.jobCount.toLocaleString()} jobs available
                    </p>
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "h-2 w-2 rounded-full",
                        category.demandLevel === "High" ? "bg-green-500" : "bg-amber-500"
                      )} />
                      <span className="text-xs font-semibold">
                        {category.demandLevel} Demand
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
                    Browse
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 text-brand-600 hover:text-brand-700 font-semibold group"
          >
            View All 22 Trades
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"