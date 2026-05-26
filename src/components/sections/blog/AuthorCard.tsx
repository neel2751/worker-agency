import { Linkedin } from "lucide-react"

interface Props {
  name: string
  bio?: string
}

export function AuthorCard({ name, bio = "Workday Integration Architect at NorthStream." }: Props) {
  return (
    <div className="mt-16 p-8 bg-card border rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
      <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full shrink-0" />
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{bio}</p>
        <button className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
        </button>
      </div>
    </div>
  )
}
