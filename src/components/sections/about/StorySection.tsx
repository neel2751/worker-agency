import { Container } from "@/components/layout/Container"

export function StorySection() {
  return (
    <section className="py-24 bg-background">
      <Container className="max-w-4xl">
        <div className="prose prose-lg prose-slate dark:prose-invert">
          <h2>Our Story</h2>
          <p>
            NorthStream was founded by a core group of former Workday engineers who saw a recurring problem in the ecosystem: generalist IT firms were being hired to implement complex Workday architectures.
          </p>
          <p>
            We realized that true enterprise integration requires specialists. It requires architects who dream in XSLT, who understand the nuances of PECI, and who know exactly when to use Studio over EIBs.
          </p>
          <p>
            Since our founding, we've remained steadfastly dedicated to one thing and one thing only: building the best Workday integrations in the industry.
          </p>
        </div>
      </Container>
    </section>
  )
}
