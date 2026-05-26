import { Container } from "@/components/layout/Container"
import { HERO_STATS } from "@/data/stats"
import { AnimatedCounter } from "@/components/common/AnimatedCounter"

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4 md:gap-12">
          {HERO_STATS.slice(0, 4).map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3">
              <div className="font-display text-5xl font-bold tracking-tight text-gradient-gold md:text-6xl">
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}