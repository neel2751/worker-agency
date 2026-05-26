import { CheckCircle2 } from "lucide-react"

interface Props {
  features: string[]
}

export function ServiceFeatureList({ features }: Props) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span className="font-medium">{feature}</span>
        </div>
      ))}
    </div>
  )
}
