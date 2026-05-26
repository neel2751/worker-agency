"use client"

import { Container } from "@/components/layout/Container"
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from "@/data/integrations"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered =
    activeCategory === "all"
      ? INTEGRATIONS
      : INTEGRATIONS.filter((i) => i.category === activeCategory)

  return (
    <section className="relative overflow-hidden bg-card/40 py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <Container className="relative">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Pre-built &amp; battle-tested
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {INTEGRATIONS.length}+ integrations,{" "}
            <span className="text-gradient-gold">ready to deploy</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Proven connectors for Procore, Sage, HCSS, LCPtracker and more.
            You&apos;re not starting from scratch — you&apos;re deploying
            solutions that already work.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {INTEGRATION_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground shadow-elev-1"
                  : "border border-border/70 bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 9).map((integration) => (
            <div
              key={integration.slug}
              className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elev-2"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-display text-lg font-bold">
                  {integration.name}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    integration.direction === "Bidirectional"
                      ? "bg-accent/15 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {integration.direction}
                </span>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {integration.shortDesc}
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
                  {integration.method}
                </span>
                <span className="rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
                  {integration.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/integrations"
            className="group inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent/80"
          >
            View all {INTEGRATIONS.length}+ integrations
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  )
}