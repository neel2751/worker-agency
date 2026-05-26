interface Props {
  metrics: { label: string, value: string }[]
}

export function CaseStudyMetrics({ metrics }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-background border rounded-2xl shadow-sm text-left -mt-24 mb-16 relative z-10 max-w-4xl mx-auto">
      {metrics.map(metric => (
        <div key={metric.label}>
          <div className="text-3xl font-bold font-display text-primary mb-1">{metric.value}</div>
          <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
        </div>
      ))}
    </div>
  )
}
