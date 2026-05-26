"use client"

import { PLATFORM_STATS } from "@/data/stats"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(target * progress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <div ref={ref}>{count.toLocaleString()}+</div>
}

export function StatisticsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-hiviz-400/5" />
      <div className="absolute inset-0 grid-pattern-soft pointer-events-none opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            India's Construction <span className="text-gradient-brand">Recruitment Leader</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Real numbers, real impact. See how BuildForce is transforming construction hiring.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLATFORM_STATS.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group text-center p-8 rounded-2xl border border-border/50 bg-background hover:border-brand-200 hover:shadow-elev-2 transition-all"
              >
                {Icon && (
                  <div className={cn(
                    "h-14 w-14 rounded-xl flex items-center justify-center mx-auto mb-4",
                    "bg-brand-50 group-hover:bg-brand-100 transition-colors"
                  )}>
                    <Icon className={cn("h-7 w-7", stat.color)} />
                  </div>
                )}

                <div className={cn("text-4xl sm:text-5xl font-bold mb-2", stat.color)}>
                  <AnimatedCounter target={stat.numericValue} />
                </div>

                <p className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </p>

                {stat.description && (
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/60 mb-6">
            Join thousands already transforming their construction careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/jobs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-xl transition-all hover:shadow-brand-glow"
            >
              Start Browsing Jobs
            </a>
            <a
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-brand-500 text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
            >
              Create Free Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"