import { Container } from "@/components/layout/Container"
import { CASE_STUDIES } from "@/data/case-studies"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react"

export function CaseStudyHighlight() {
  const featured = CASE_STUDIES[0]

  return (
    <section className="bg-background py-28">
      <Container>
        <div className="border-glow relative grid items-stretch overflow-hidden rounded-3xl border border-border/70 bg-card lg:grid-cols-2">
          <div className="p-10 md:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Featured case study
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Transforming global HR for a Fortune 500 contractor
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              {featured.challenge}
            </p>

            <div className="mb-12 grid grid-cols-2 gap-8">
             {featured.metrics.slice(0, 2).map((metric: { value: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; label: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }, idx: Key | null | undefined) => (
  <div key={idx}>
    <div className="font-display text-4xl font-bold tracking-tight text-gradient-gold">
      {metric.value}
    </div>
    <div className="mt-1 text-sm font-medium text-muted-foreground">
      {metric.label}
    </div>
  </div>
))}
            </div>

            <Link
              href={`/case-studies/${featured.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-elev-1 transition-all hover:bg-accent/90"
            >
              Read the full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative min-h-[340px] overflow-hidden bg-primary">
            <div className="blueprint-pattern absolute inset-0 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-transparent" />
            <div className="absolute bottom-8 right-8 h-24 w-24 animate-glow-pulse rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  )
}