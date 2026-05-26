import { useMutation } from "@tanstack/react-query"
import { useToast } from "./use-toast"
import { ApiError } from "@/lib/api-client"
import {
  submitContact,
  bookConsultation,
  subscribeNewsletter,
  submitJobApplication,
} from "@/lib/api/endpoints"

function messageFrom(error: unknown, fallback: string) {
  if (error instanceof ApiError) return error.message || fallback
  if (error instanceof Error) return error.message || fallback
  return fallback
}

/** Client → general contact / project inquiry. */
export function useContactMutation() {
  const { showSuccess, showError } = useToast()
  return useMutation({
    mutationFn: submitContact,
    onSuccess: () =>
      showSuccess(
        "Inquiry received",
        "An Integration Architect will reach out within 24 hours."
      ),
    onError: (error) =>
      showError(
        "We couldn't send that",
        messageFrom(error, "Please retry or email us directly.")
      ),
  })
}

/** Client → book a consultation slot. */
export function useConsultationMutation() {
  const { showSuccess, showError } = useToast()
  return useMutation({
    mutationFn: bookConsultation,
    onSuccess: () =>
      showSuccess(
        "Consultation requested",
        "We'll confirm your discovery call shortly."
      ),
    onError: (error) =>
      showError(
        "Booking failed",
        messageFrom(error, "Please try again in a moment.")
      ),
  })
}

/** Footer / blog newsletter capture. */
export function useNewsletterMutation() {
  const { showSuccess, showError } = useToast()
  return useMutation({
    mutationFn: (email: string) => subscribeNewsletter(email),
    onSuccess: () =>
      showSuccess("You're subscribed", "Field notes, straight to your inbox."),
    onError: (error) =>
      showError(
        "Subscription failed",
        messageFrom(error, "Please try again later.")
      ),
  })
}

/** Candidate → job application. */
export function useJobApplicationMutation() {
  const { showSuccess, showError } = useToast()
  return useMutation({
    mutationFn: submitJobApplication,
    onSuccess: () =>
      showSuccess(
        "Application submitted",
        "Our talent team reviews every application personally."
      ),
    onError: (error) =>
      showError(
        "Application failed",
        messageFrom(error, "Please try again or email careers@northstream.com.")
      ),
  })
}