import { Container } from "@/components/layout/Container"
import { NewsletterForm } from "@/components/common/NewsletterForm"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-32 text-center">
      <div className="blueprint-pattern absolute inset-0 opacity-50" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <Container className="relative z-10 max-w-3xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Field notes
        </p>
        <h2 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Stay ahead of the{" "}
          <span className="text-gradient-gold">integration curve</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
          Join 5,000+ construction-tech leaders who get our Workday release
          analysis, certified-payroll deep dives, and architecture guides.
        </p>

        <div className="mx-auto flex max-w-md justify-center">
          <NewsletterForm className="w-full" />
        </div>
      </Container>
    </section>
  )
}