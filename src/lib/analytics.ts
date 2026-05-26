import { SITE_CONFIG } from "@/config/site"

export function trackPageView(path: string) {
  if (typeof window === "undefined") return

  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: path,
    })
  }

  if (window.posthog) {
    window.posthog.capture("$pageview", { path })
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Page view: ${path}`)
  }
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return

  const eventData = {
    ...properties,
    site: SITE_CONFIG.name,
    timestamp: new Date().toISOString(),
  }

  if (window.gtag) {
    window.gtag("event", eventName, eventData)
  }

  if (window.posthog) {
    window.posthog.capture(eventName, eventData)
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${eventName}`, eventData)
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void
    }
  }
}
