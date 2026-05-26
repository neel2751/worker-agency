import { ReactNode } from "react"
import { Container } from "@/components/layout/Container"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { GradientBackground } from "@/components/common/GradientBackground"
import { GridPatternBackground } from "@/components/common/GridPatternBackground"

interface PageHeroProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden border-b">
      <GradientBackground />
      <GridPatternBackground />
      
      <Container className="relative z-10">
        <div className="mb-8">
          <Breadcrumbs />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>
          )}
          {children && (
            <div className="flex flex-wrap items-center gap-4">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
