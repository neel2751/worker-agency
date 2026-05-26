import Link from "next/link"
import { HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"

export default function NotFound() {
  const popularLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Find Workers", href: "/workers" },
    { label: "Companies", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Help Center", href: "/help" },
  ]

  return (
    <div className="min-h-[80vh] flex items-center justify-center text-center">
      <Container className="max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-brand-50 dark:bg-brand-950">
            <HardHat className="h-16 w-16 text-brand-500" />
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-bold text-muted/30 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          We can't find that page
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
          Looks like this page has moved to another site or never existed. Let's get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {popularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg border border-border/50 text-sm text-foreground/70 hover:border-brand-200 hover:text-brand-600 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button size="lg" asChild className="bg-brand-500 hover:bg-brand-600 text-white">
          <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    </div>
  )
}