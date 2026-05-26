import { WORKER_CATEGORIES} from "@/data/services"
import { Container } from "@/components/layout/Container"
import {
  ArrowRight,
  Code,
  Database,
  Plug,
  Banknote,
  Network,
  LayoutTemplate,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

const ICONS = {
  code: Code,
  database: Database,
  plug: Plug,
  banknote: Banknote,
  network: Network,
  "layout-template": LayoutTemplate,
  "life-buoy": LifeBuoy,
  "shield-check": ShieldCheck,
}

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-card/40 py-28">
      <div className="blueprint-pattern absolute inset-0 opacity-50" />

      <Container className="relative">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Our expertise
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            End-to-end{" "}
            <span className="text-gradient-gold">integration services</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            From complex Workday Studio assemblies to 24/7 managed support — a
            complete bench for construction enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {WORKER_CATEGORIES.map((service) => {
            const Icon = ICONS[service.icon as unknown as keyof typeof ICONS] || Code
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elev-2"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDesc}
                </p>
                <div className="flex items-center text-sm font-semibold text-accent">
                  Explore
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}