import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { ArrowRight } from "lucide-react"

export function CtaBanner({ title = "Ready to transform your integrations?", subtitle = "Schedule a technical discovery call with our integration architects today." }) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative rounded-2xl overflow-hidden bg-primary px-6 py-16 md:py-20 md:px-16 text-center shadow-xl">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-primary-foreground/20" asChild>
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
