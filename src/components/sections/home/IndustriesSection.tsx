import { Container } from "@/components/layout/Container"
import { SectionHeading } from "../shared/SectionHeading"
import { INDUSTRIES } from "@/data/industries"
import Link from "next/link"
import { Landmark, Stethoscope, ShoppingBag, Cpu, Factory, Building, GraduationCap, ArrowRight } from "lucide-react"

const ICONS = {
  "landmark": Landmark,
  "stethoscope": Stethoscope,
  "shopping-bag": ShoppingBag,
  "cpu": Cpu,
  "factory": Factory,
  "building": Building,
  "graduation-cap": GraduationCap,
}

export function IndustriesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y">
      <Container>
        <SectionHeading 
          eyebrow="Solutions by Industry"
          title="Tailored for your sector"
          description="We understand the unique compliance, scale, and operational challenges of your industry."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {INDUSTRIES.map((ind) => {
            const Icon = ICONS[ind.icon as unknown as keyof typeof ICONS] || Building
            return (
              <Link 
                key={ind.slug} 
                href={`/solutions/${ind.slug}`}
                className="group p-6 bg-card border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
                  {ind.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-primary">
                  View Solutions <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
