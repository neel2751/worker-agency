"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Props {
  role: string
}

export function ApplyForm({ role }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    formData.append('role', role)

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setIsSuccess(true)
      } else {
        alert("Failed to submit application. Please try again.")
      }
    } catch (error) {
      alert("An error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">Application Received!</h3>
        <p className="text-muted-foreground">Thank you for your interest. Our recruiting team will review your application and be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
        <Input id="linkedin" name="linkedin" type="url" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="resume">Resume/CV</Label>
        <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
        <Textarea id="coverLetter" name="coverLetter" rows={5} />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
