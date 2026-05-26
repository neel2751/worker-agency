import { Container } from "@/components/layout/Container"

interface Props {
  title: string
  description: string
  icon?: string
}

export function ServiceDetailHero({ title, description }: Props) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 border-b pt-24 pb-16">
      <Container className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      </Container>
    </div>
  )
}
