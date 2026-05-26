import { Container } from "@/components/layout/Container"

interface Props {
  industry: string
  client: string
  title: string
}

export function CaseStudyHero({ industry, client, title }: Props) {
  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-900/50 border-b">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <span>{industry}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>{client}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            {title}
          </h1>
        </div>
      </Container>
    </div>
  )
}
