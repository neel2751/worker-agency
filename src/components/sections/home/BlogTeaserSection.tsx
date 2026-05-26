import { Container } from "@/components/layout/Container"
import { SectionHeading } from "../shared/SectionHeading"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BlogTeaserSection() {
  const posts = [
    { slug: "top-5-workday-integration-patterns", title: "Top 5 Workday Integration Patterns for 2024", excerpt: "Discover the most efficient ways to architecture your Workday data flows...", date: "2024-04-10" },
    { slug: "studio-vs-eib-when-to-use", title: "Workday Studio vs EIB: Which should you use?", excerpt: "A technical deep dive into when to use Enterprise Interface Builders vs custom Studio logic...", date: "2024-03-22" },
    { slug: "workday-security-best-practices", title: "Workday Security & Compliance Best Practices", excerpt: "How to secure your ISUs and prevent unauthorized access in your integrations...", date: "2024-02-15" }
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SectionHeading 
            eyebrow="Insights & Resources"
            title="Latest from our technical blog"
            className="mb-0"
          />
          <Button variant="outline" className="mt-6 md:mt-0" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-slate-200 dark:bg-slate-800" />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
