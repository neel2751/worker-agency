import { Container } from "@/components/layout/Container"
import { LEADERSHIP } from "@/data/leadership"
import { Linkedin } from "lucide-react"

export function LeadershipSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet the Architects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP.map((leader, idx) => (
            <div key={idx} className="group">
              <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl mb-4 overflow-hidden relative" />
              <h3 className="text-lg font-bold">{leader.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{leader.role}</p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{leader.bio}</p>
              {leader.linkedin && (
                <a href={leader.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
