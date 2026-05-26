import { PROCESS_STEPS } from "@/data/process-steps"

export function ServiceProcessTimeline() {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      {PROCESS_STEPS.map((step, idx) => (
        <div key={step.number} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent/20 text-accent group-[.is-active]:bg-accent group-[.is-active]:text-accent-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
            {step.number}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border bg-card shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">{step.codeName}</span>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
