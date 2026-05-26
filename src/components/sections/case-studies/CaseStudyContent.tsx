import { CheckCircle2 } from "lucide-react"

interface Props {
  challenge: string
  solution: string
  tags: string[]
}

export function CaseStudyContent({ challenge, solution, tags }: Props) {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
      <h2>The Challenge</h2>
      <p>{challenge}</p>
      
      <h2>Our Solution</h2>
      <p>{solution}</p>
      
      <div className="my-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
        <h3 className="!mt-0 text-xl font-bold">Key Technologies Used</h3>
        <ul className="grid sm:grid-cols-2 gap-3 mt-6 mb-0 list-none pl-0">
          {tags.map(tag => (
            <li key={tag} className="flex items-center gap-2 m-0">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
