"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { careersSchema, CareersFormData } from "@/schemas/careers.schema"
import { useJobApplicationMutation } from "@/hooks/use-contact-mutation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { CheckCircle2, Loader2 } from "lucide-react"

export function CareersForm({
  roleSlug,
  roleTitle,
}: {
  roleSlug: string
  roleTitle: string
}) {
  const form = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      resumeUrl: "",
      coverLetter: "",
      roleSlug,
    },
  })

  const { mutate, isPending, isSuccess } = useJobApplicationMutation()

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl font-bold">Application sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for applying to {roleTitle}. Our talent team reviews every
          application personally and will be in touch.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((d) => mutate(d))}
        className="space-y-5"
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Jordan Reyes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="jordan@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  LinkedIn{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://linkedin.com/in/…"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="resumeUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Resume URL{" "}
                <span className="text-muted-foreground">
                  (Drive, Dropbox, etc.)
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="https://drive.google.com/…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why NorthStream?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your Workday experience and why this role fits…"
                  className="min-h-[140px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="w-full rounded-full bg-accent py-6 text-base font-semibold text-accent-foreground hover:bg-accent/90"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
            </>
          ) : (
            `Apply for ${roleTitle}`
          )}
        </Button>
      </form>
    </Form>
  )
}