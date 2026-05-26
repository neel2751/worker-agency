import { Download } from "lucide-react"

interface Props {
  title: string
  description: string
  category: string
  pages: number
}

export function WhitepaperCard({ title, description, category, pages }: Props) {
  return (
    <div className="group p-8 bg-card border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{category}</span>
        <span className="text-sm text-muted-foreground font-medium">{pages} Pages</span>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-8 flex-1">{description}</p>
      
      <button className="flex items-center justify-center w-full py-3 px-4 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
        <Download className="mr-2 h-4 w-4" /> Download PDF
      </button>
    </div>
  )
}
