import Link from "next/link"
import { WORKER_CATEGORIES } from "@/data/services"
import { Code, Database, Plug, Banknote, Network, LayoutTemplate, LifeBuoy, ShieldCheck } from "lucide-react"

const ICONS = {
  "code": Code,
  "database": Database,
  "plug": Plug,
  "banknote": Banknote,
  "network": Network,
  "layout-template": LayoutTemplate,
  "life-buoy": LifeBuoy,
  "shield-check": ShieldCheck,
}

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {WORKER_CATEGORIES.map((service) => {
        const Icon = ICONS[service.icon as unknown as keyof typeof ICONS] || Code
        return (
          <Link 
            key={service.slug} 
            href={`/services/${service.slug}`}
            className="group p-8 bg-card border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all flex flex-col h-full"
          >
            <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6">
              <Icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-8 flex-1">
              {service.shortDesc}
            </p>
            <div className="font-semibold text-primary">
              Learn More →
            </div>
          </Link>
        )
      })}
    </div>
  )
}
