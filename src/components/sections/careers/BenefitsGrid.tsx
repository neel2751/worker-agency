import { Container } from "@/components/layout/Container"
import { Heart, Laptop, GraduationCap, Plane, Coffee, Shield } from "lucide-react"

export function BenefitsGrid() {
  const benefits = [
    { title: "Remote-First", desc: "Work from anywhere in the US or Europe.", icon: Laptop },
    { title: "Premium Healthcare", desc: "100% covered premiums for you and your family.", icon: Heart },
    { title: "Continuous Learning", desc: "Annual budget for certifications and conferences.", icon: GraduationCap },
    { title: "Unlimited PTO", desc: "Take the time you need to recharge and avoid burnout.", icon: Plane },
    { title: "Home Office Stipend", desc: "$2,000 to set up your perfect engineering workstation.", icon: Coffee },
    { title: "401k Matching", desc: "We match 100% up to 6% of your salary.", icon: Shield },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Perks & Benefits</h2>
          <p className="text-muted-foreground">We take care of our team so they can focus on doing their best work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 bg-card border rounded-2xl shadow-sm">
              <benefit.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
