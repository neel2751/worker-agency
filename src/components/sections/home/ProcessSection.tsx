import { Container } from "@/components/layout/Container"
import { PROCESS_STEPS } from "@/data/process-steps"

export function ProcessSection() {
  return (
    <section className="bg-background py-28">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Our methodology
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Assess <span className="text-accent">→</span> Design{" "}
            <span className="text-accent">→</span> Deliver{" "}
            <span className="text-accent">→</span> Sustain
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A proven 4-step process for Workday construction integrations.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center gap-8 md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden w-1/2 md:block" />

                  <div className="absolute left-8 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-accent font-display text-xl font-bold text-accent-foreground shadow-elev-2 md:left-1/2">
                    {step.number}
                  </div>

                  <div
                    className={`w-full pl-20 md:w-1/2 md:pl-0 ${
                      isEven
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-elev-2 md:p-8">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {step.codeName}
                      </span>
                      <h3 className="mb-3 mt-2 font-display text-2xl font-bold">
                        {step.title}
                      </h3>
                      <p className="mb-5 leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isEven ? "md:justify-end" : ""
                        }`}
                      >
                        {step.activities.slice(0, 2).map((activity, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                          >
                            {activity.split(":")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}