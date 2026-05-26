/**
 * NorthStream API client
 * ---------------------------------------------------------------------------
 * Single source of truth for talking to the backend.
 *
 * Configure the backend by setting ONE env var in `.env.local`:
 *
 *   NEXT_PUBLIC_API_BASE_URL=https://api.your-backend.com
 *
 * Leave it empty to use same-origin Next.js route handlers (e.g. /api/contact).
 * Every endpoint module (see lib/api/*) goes through `fetchClient`, so timeout,
 * retry, auth and error shape are handled in exactly one place.
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? ""

export class ApiError extends Error {
  status: number
  data: unknown

  constructor(status: number, message: string, data?: unknown) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.data = data
  }
}

type FetchOptions = Omit<RequestInit, "body"> & {
  params?: Record<string, string | number | boolean | undefined>
  /** Plain object is JSON-stringified automatically. */
  body?: unknown
  /** Abort after this many ms. Default 20000. */
  timeoutMs?: number
  /** Retry attempts on network failure / 5xx. Default 2. */
  retries?: number
  /** Bearer token, if your backend needs auth later. */
  token?: string
}

function buildUrl(
  endpoint: string,
  params?: FetchOptions["params"]
): string {
  const isAbsolute = /^https?:\/\//i.test(endpoint)
  const base = isAbsolute
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`

  if (!params) return base

  const search = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) search.set(key, String(value))
  }
  const qs = search.toString()
  return qs ? `${base}${base.includes("?") ? "&" : "?"}${qs}` : base
}

async function parseBody(response: Response): Promise<unknown> {
  const text = await response.text()
  if (!text) return null
  const contentType = response.headers.get("content-type") ?? ""
  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(text)
    } catch {
      return text
    }
  }
  return text
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function fetchClient<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    params,
    body,
    timeoutMs = 20_000,
    retries = 2,
    token,
    headers,
    ...rest
  } = options

  const url = buildUrl(endpoint, params)

  const finalHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(headers as Record<string, string>),
  }

  const init: RequestInit = {
    ...rest,
    headers: finalHeaders,
    body:
      body === undefined
        ? undefined
        : typeof body === "string"
          ? body
          : JSON.stringify(body),
  }

  let attempt = 0
  let lastError: unknown

  while (attempt <= retries) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const response = await fetch(url, {
        ...init,
        signal: controller.signal,
      })
      clearTimeout(timer)

      if (!response.ok) {
        const data = await parseBody(response)
        const rawMessage =
          (data &&
            typeof data === "object" &&
            "message" in data &&
            (data as Record<string, unknown>).message) ||
          response.statusText ||
          "Request failed"
        const message = String(rawMessage)

        // Retry transient server errors only.
        if (response.status >= 500 && attempt < retries) {
          lastError = new ApiError(response.status, message, data)
          await sleep(2 ** attempt * 400)
          attempt++
          continue
        }
        throw new ApiError(response.status, message, data)
      }

      return (await parseBody(response)) as T
    } catch (error) {
      clearTimeout(timer)

      if (error instanceof ApiError) throw error

      // Network error / abort — retry if attempts remain.
      lastError = error
      if (attempt < retries) {
        await sleep(2 ** attempt * 400)
        attempt++
        continue
      }
      const isAbort =
        error instanceof DOMException && error.name === "AbortError"
      throw new ApiError(
        0,
        isAbort
          ? "Request timed out. Please try again."
          : "Network error. Please check your connection and try again.",
        error
      )
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new ApiError(0, "Request failed")
}