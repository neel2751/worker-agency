import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Props {
  slug: string
  industry: string
  client: string
  title: string
  challenge: string
  metrics: { label: string, value: string }[]
}

export function CaseStudyCard({ slug, industry, client, title, challenge, metrics }: Props) {
  return (
    <Link 
      href={`/case-studies/${slug}`}
      className="group p-8 md:p-10 bg-card border rounded-3xl hover:border-primary/40 hover:shadow-md transition-all flex flex-col h-full"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="text-primary font-semibold tracking-widest uppercase text-sm">
          {industry}
        </span>
        <span className="text-muted-foreground text-sm font-medium">
          {client}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-10 flex-1 leading-relaxed">
        {challenge}
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
        {metrics.map(metric => (
          <div key={metric.label}>
            <div className="text-2xl font-bold font-display text-primary">{metric.value}</div>
            <div className="text-xs font-medium text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center font-semibold text-primary">
        Read Full Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
