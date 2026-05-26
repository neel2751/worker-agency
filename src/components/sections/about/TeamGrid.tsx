import { TEAM } from "@/data/team"
import { Linkedin } from "lucide-react"

export function TeamGrid() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
      {TEAM.map((member, idx) => (
        <div key={idx} className="group">
          <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl mb-4 overflow-hidden relative" />
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-block">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
