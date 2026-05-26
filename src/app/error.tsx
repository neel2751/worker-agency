"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Container className="max-w-xl text-center">
        <div className="p-8 border border-border/50 rounded-2xl bg-background shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-red-50 dark:bg-red-950">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-3">Something went wrong</h2>
          <p className="text-muted-foreground mb-2">
            An unexpected error occurred while loading this page. Our team has been notified.
          </p>
          {error?.digest && (
            <p className="text-xs text-muted-foreground/60 mb-6 font-mono">
              Error ID: {error.digest}
            </p>
          )}

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              onClick={() => reset()}
              className="bg-brand-500 hover:bg-brand-600 text-white"
            >
              Try Again
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/help">Help Center</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}