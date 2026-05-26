import { Container } from "@/components/layout/Container"
import { VALUES } from "@/data/values"

export function ValuesSection() {
  return (
    <section className="py-24 bg-background border-b">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The principles that drive our engineering.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((value, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
