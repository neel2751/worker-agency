import { Container } from "@/components/layout/Container"
import { CERTIFICATIONS } from "@/data/certifications"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react"

export function CertificationsSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Certified Excellence</h2>
          <p className="text-muted-foreground">
            Our team holds the highest levels of certification in the Workday ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CERTIFICATIONS.map((cert: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }, idx: Key | null | undefined) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-card border rounded-2xl shadow-sm">
              <div className="h-16 w-16 bg-primary/10 rounded-full mb-4" />
              <h3 className="font-semibold text-center">{cert.name}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}