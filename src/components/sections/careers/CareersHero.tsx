import { Container } from "@/components/layout/Container"

export function CareersHero() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-900/50 border-b">
      <Container className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Build the Future of Enterprise Integration
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Join a team of elite architects solving the most complex data integration challenges in the Workday ecosystem.
        </p>
      </Container>
    </div>
  )
}
