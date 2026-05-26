"use client"

import { useState } from "react"
import { useNewsletterMutation } from "@/hooks/use-contact-mutation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react"

export function NewsletterForm({
  variant = "inline",
  className,
}: {
  variant?: "inline" | "footer"
  className?: string
}) {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const { mutate, isPending } = useNewsletterMutation()
  const isFooter = variant === "footer"

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    mutate(email, {
      onSuccess: () => {
        setEmail("")
        setSuccess(true)
        setTimeout(() => setSuccess(false), 4000)
      },
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex items-center gap-2", className)}
    >
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className={cn(
          "h-11",
          isFooter &&
            "border-steel-700 bg-steel-900/60 text-steel-100 placeholder:text-steel-500 focus:border-brand-500 focus:bg-steel-900"
        )}
      />
      <Button
        type="submit"
        disabled={isPending || success}
        size="icon"
        className={cn(
          "h-11 w-11 shrink-0 rounded-lg transition-colors",
          success
            ? "bg-green-600 hover:bg-green-600 text-white"
            : "bg-brand-500 hover:bg-brand-600 text-white"
        )}
        aria-label="Subscribe"
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : success ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <ArrowRight className="h-4 w-4" />
        )}
      </Button>
    </form>
  )
}