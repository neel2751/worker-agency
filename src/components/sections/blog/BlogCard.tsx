import Link from "next/link"

interface Props {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}

export function BlogCard({ slug, title, excerpt, date, category }: Props) {
  return (
    <Link href={`/blog/${slug}`} className="group block bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex-col">
      <div className="h-48 bg-slate-100 dark:bg-slate-800" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{category}</span>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground line-clamp-2 flex-1">{excerpt}</p>
      </div>
    </Link>
  )
}
