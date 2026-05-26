export interface CaseStudy {
  slug: string
  title: string
  client: string
  logo: string
  industry: string
  challenge: string
  solution: string
  results: string
  metrics: { label: string; value: string }[]
  tags: string[]
  image: string
  publishedAt: string
}