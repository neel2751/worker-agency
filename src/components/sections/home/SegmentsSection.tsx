"use client"

import { Container } from "@/components/layout/Container"
import { SEGMENTS } from "@/data/segments"
import {
  ArrowRight,
  Building2,
  Wrench,
  Truck,
  Flame,
  Home,
  ClipboardList,
  Building,
  Landmark,
} from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "building-2": Building2,
  wrench: Wrench,
  truck: Truck,
  flame: Flame,
  home: Home,
  "clipboard-list": ClipboardList,
  building: Building,
  landmark: Landmark,
}

export function SegmentsSection() {
  return (
    <section className="bg-background py-28">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Who we serve
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            8 construction segments,{" "}
            <span className="text-gradient-gold">one Workday solution</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Whether you&apos;re a general contractor juggling 200 projects or a
            specialty trade with 50 union locals — we&apos;ve done it before.
          </p>
        </div>

        <div className="mb-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((segment) => {
            const Icon = iconMap[segment.icon] || Building2
            return (
              <Link
                key={segment.slug}
                href={`/solutions/${segment.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elev-2"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">
                  {segment.name}
                </h3>
                <p className="mb-6 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {segment.heroDesc}
                </p>
                <div className="flex items-center text-sm font-semibold text-accent">
                  Explore solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-semibold transition-all hover:border-accent/40"
          >
            View all construction segments
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  )
}