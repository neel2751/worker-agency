import Link from "next/link"
import { INDUSTRIES } from "@/data/industries"
import { ArrowRight, Building, Landmark, Stethoscope, ShoppingBag, Cpu, Factory, GraduationCap } from "lucide-react"

const ICONS = {
  "landmark": Landmark,
  "stethoscope": Stethoscope,
  "shopping-bag": ShoppingBag,
  "cpu": Cpu,
  "factory": Factory,
  "building": Building,
  "graduation-cap": GraduationCap,
}

export function IndustriesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {INDUSTRIES.map((ind) => {
        const Icon = ICONS[ind.icon as unknown as keyof typeof ICONS] || Building
        return (
          <Link 
            key={ind.slug} 
            href={`/solutions/${ind.slug}`}
            className="group p-8 bg-card border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all flex flex-col h-full"
          >
            <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6">
              <Icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{ind.name}</h3>
            <p className="text-muted-foreground mb-8 flex-1">
              {ind.heroDesc}
            </p>
            <div className="flex items-center font-semibold text-primary">
              View Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
