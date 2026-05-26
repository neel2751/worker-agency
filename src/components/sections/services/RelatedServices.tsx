import Link from "next/link"
import { WORKER_CATEGORIES } from "@/data/services"
import { ArrowRight } from "lucide-react"

interface Props {
  currentSlug: string
}

export function RelatedServices({ currentSlug }: Props) {
  const related = WORKER_CATEGORIES.filter(s => s.slug !== currentSlug).slice(0, 3)
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {related.map(service => (
        <Link 
          key={service.slug} 
          href={`/services/${service.slug}`}
          className="group p-6 bg-slate-50 dark:bg-slate-900/50 border rounded-2xl hover:border-primary/40 transition-all flex flex-col"
        >
          <h4 className="font-bold mb-2">{service.title}</h4>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{service.shortDesc}</p>
          <div className="text-sm font-semibold text-primary flex items-center">
            Explore <ArrowRight className="ml-1 h-3 w-3" />
          </div>
        </Link>
      ))}
    </div>
  )
}
