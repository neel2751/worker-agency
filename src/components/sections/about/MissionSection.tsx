import { Container } from "@/components/layout/Container"

export function MissionSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <Container className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Our Mission</h2>
        <p className="text-xl md:text-2xl leading-relaxed opacity-90">
          To architect the most resilient, scalable, and secure Workday integration ecosystems for the world's most complex enterprise environments.
        </p>
      </Container>
    </section>
  )
}
