import { Container } from "@/components/layout/Container"
import { CAREERS } from "@/data/careers"
import Link from "next/link"
import { ArrowRight, MapPin, Clock } from "lucide-react"

export function OpenPositionsList() {
  return (
    <section className="py-24 bg-background">
      <Container className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
        <div className="space-y-6">
          {CAREERS.map(job => (
            <Link 
              key={job.slug} 
              href={`/careers/${job.slug}`}
              className="group block p-8 bg-card border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs">{job.department}</span>
                  </div>
                </div>
                <div className="flex items-center font-semibold text-primary">
                  View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
