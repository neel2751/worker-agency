export function BlogTableOfContents() {

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border mb-12 hidden md:block">
      <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Table of Contents</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#introduction" className="text-muted-foreground hover:text-primary transition-colors">Introduction</a></li>
        <li><a href="#key-concepts" className="text-muted-foreground hover:text-primary transition-colors">Key Concepts</a></li>
        <li><a href="#implementation" className="text-muted-foreground hover:text-primary transition-colors">Implementation</a></li>
        <li><a href="#conclusion" className="text-muted-foreground hover:text-primary transition-colors">Conclusion</a></li>
      </ul>
    </div>
  )
}
