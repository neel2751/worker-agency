import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function BlogPostContent({ children }: Props) {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-primary hover:prose-a:text-primary/80">
      {children}
    </div>
  )
}
