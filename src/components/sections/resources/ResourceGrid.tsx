import { BookOpen, FileText, Video, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ResourceGrid() {
  const hubs = [
    { title: "Technical Guides", desc: "Step-by-step documentation for complex integrations.", icon: BookOpen, href: "/resources/guides" },
    { title: "Whitepapers", desc: "Deep architectural insights and industry reports.", icon: FileText, href: "/resources/whitepapers" },
    { title: "Webinars", desc: "On-demand recordings of our technical sessions.", icon: Video, href: "/resources/webinars" }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {hubs.map(hub => (
        <Link 
          key={hub.title} 
          href={hub.href}
          className="group p-8 bg-card border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all flex flex-col"
        >
          <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6">
            <hub.icon size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-3">{hub.title}</h3>
          <p className="text-muted-foreground mb-8 flex-1">{hub.desc}</p>
          <div className="flex items-center font-semibold text-primary">
            Browse {hub.title} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  )
}
