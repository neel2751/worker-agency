export interface Blog {
  slug: string
  title: string
  excerpt: string
  content?: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
  readTime?: string
}