"use client"

import { useState } from "react"
import { FEATURED_TESTIMONIALS } from "@/data/testimonials"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const goToPrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? FEATURED_TESTIMONIALS.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIdx((prev) => (prev === FEATURED_TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 relative bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Hear From Our Community
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Real people, real results. See how BuildForce changed construction careers across India.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative mb-8">
            <div className="bg-white dark:bg-steel-900 rounded-2xl border border-border/50 p-8 sm:p-12 shadow-elev-2 min-h-96 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(FEATURED_TESTIMONIALS[currentIdx].rating).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-hiviz-400 text-hiviz-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl font-semibold mb-8 leading-relaxed text-foreground">
                "{FEATURED_TESTIMONIALS[currentIdx].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t">
                <img
                  src={FEATURED_TESTIMONIALS[currentIdx].avatar}
                  alt={FEATURED_TESTIMONIALS[currentIdx].name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">
                    {FEATURED_TESTIMONIALS[currentIdx].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {FEATURED_TESTIMONIALS[currentIdx].role} •{" "}
                    {FEATURED_TESTIMONIALS[currentIdx].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-16 -right-16">
              <button
                onClick={goToPrev}
                className="h-12 w-12 rounded-full border border-border hover:border-brand-500 hover:bg-brand-50 flex items-center justify-center transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="h-12 w-12 rounded-full border border-border hover:border-brand-500 hover:bg-brand-50 flex items-center justify-center transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2">
            {FEATURED_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  idx === currentIdx
                    ? "bg-brand-500 w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}