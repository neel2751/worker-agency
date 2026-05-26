/**
 * Endpoint definitions. Change the path strings here to match your backend.
 * Components/hooks import these functions — they never call fetch directly.
 */
import { fetchClient } from "@/lib/api-client"
import type { ContactFormData } from "@/schemas/contact.schema"
import type { CareersFormData } from "@/schemas/careers.schema"

export interface ApiResult<T = unknown> {
  success: boolean
  message?: string
  data?: T
}

/** Endpoint paths — single place to edit when backend routes change. */
export const ENDPOINTS = {
  contact: "/api/contact",
  consultation: "/api/consultation",
  newsletter: "/api/newsletter",
  jobApplication: "/api/applications",
} as const

/* -------------------------------------------------------------------------- */
/*  CLIENT side                                                               */
/* -------------------------------------------------------------------------- */

export function submitContact(data: ContactFormData) {
  return fetchClient<ApiResult>(ENDPOINTS.contact, {
    method: "POST",
    body: data,
  })
}

export function bookConsultation(data: ContactFormData) {
  return fetchClient<ApiResult>(ENDPOINTS.consultation, {
    method: "POST",
    body: data,
  })
}

export function subscribeNewsletter(email: string) {
  return fetchClient<ApiResult>(ENDPOINTS.newsletter, {
    method: "POST",
    body: { email },
  })
}

/* -------------------------------------------------------------------------- */
/*  CANDIDATE side                                                            */
/* -------------------------------------------------------------------------- */

export function submitJobApplication(data: CareersFormData) {
  return fetchClient<ApiResult>(ENDPOINTS.jobApplication, {
    method: "POST",
    body: data,
  })
}