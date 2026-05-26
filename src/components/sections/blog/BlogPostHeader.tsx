interface Props {
  title: string
  date: string
  category: string
  author: string
}

export function BlogPostHeader({ title, date, category, author }: Props) {
  return (
    <header className="mb-12 border-b pb-8">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-primary font-semibold tracking-widest uppercase text-sm bg-primary/10 px-3 py-1 rounded-full">{category}</span>
        <span className="text-muted-foreground font-medium text-sm">{date}</span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground">
        Written by <span className="font-semibold text-foreground">{author}</span>
      </p>
    </header>
  )
}
