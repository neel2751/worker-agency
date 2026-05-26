import { CheckCircle2 } from "lucide-react"

interface Props {
  solutions: string[]
}

export function IndustrySolutions({ solutions }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
      <div className="space-y-6">
        {solutions.map((solution, idx) => (
          <div key={idx} className="flex gap-4 p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
            <p className="text-muted-foreground">{solution}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
