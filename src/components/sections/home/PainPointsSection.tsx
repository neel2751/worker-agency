"use client"

import { Container } from "@/components/layout/Container"
import { PAIN_POINTS } from "@/data/pain-points"
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function PainPointsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="blueprint-pattern absolute inset-0 opacity-50" />

      <Container className="relative">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            The problem
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Your union payroll is manual. Your certified payroll takes days.{" "}
            <span className="text-gradient-gold">We fix that.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {PAIN_POINTS.map((pain) => (
            <div
              key={pain.id}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-elev-2"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1.5 font-display text-lg font-bold">
                    {pain.painHeadline}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pain.painDescription}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-sm font-bold text-accent">
                      {pain.solutionHeadline}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pain.solutionDescription}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={`/services/${pain.relatedServiceSlug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-elev-2 transition-all hover:bg-accent/90"
          >
            Get a Construction Assessment
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  )
}