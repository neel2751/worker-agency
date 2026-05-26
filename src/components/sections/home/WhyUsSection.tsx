import { Container } from "@/components/layout/Container"
import { SectionHeading } from "../shared/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import { IntegrationDiagram } from "@/components/common/IntegrationDiagram"

export function WhyUsSection() {
  const points = [
    { title: "Deep Specialization", desc: "We don't do generic IT consulting. We only do Workday Integrations." },
    { title: "Enterprise Ready", desc: "Our processes are audited for SOC2 and ISO 27001 compliance." },
    { title: "Architectural Excellence", desc: "We design for maintainability, not just immediate go-live." },
    { title: "SLA-Backed Support", desc: "Our managed services guarantee 99.9% uptime for your data flows." }
  ]

  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              eyebrow="Why NorthStream"
              title="The integration partner you've been looking for."
              description="Generic consultancies treat integrations as an afterthought. We treat them as the backbone of your HR technology landscape."
            />
            
            <div className="space-y-6 mt-8">
              {points.map((pt, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{pt.title}</h4>
                    <p className="text-muted-foreground">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <IntegrationDiagram />
          </div>
        </div>
      </Container>
    </section>
  )
}
