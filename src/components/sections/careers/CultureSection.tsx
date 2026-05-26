import { Container } from "@/components/layout/Container"

export function CultureSection() {
  return (
    <section className="py-24 bg-background">
      <Container className="max-w-4xl">
        <div className="prose prose-lg prose-slate dark:prose-invert">
          <h2>Engineering-First Culture</h2>
          <p>
            At NorthStream, we are engineers first. We believe that great architecture comes from deep technical understanding, not high-level slide decks. Our culture is built around continuous learning, deep-dives into documentation, and solving puzzles that others deemed impossible.
          </p>
          <p>
            We don't micromanage. We hire the best and give them the autonomy, tools, and trust to deliver extraordinary results. If you love dissecting complex XSLT or optimizing API payloads, you'll feel right at home here.
          </p>
        </div>
      </Container>
    </section>
  )
}
