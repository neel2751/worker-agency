import { AlertTriangle } from "lucide-react"

interface Props {
  challenges: string[]
}

export function IndustryChallenges({ challenges }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Common Challenges</h2>
      <div className="space-y-6">
        {challenges.map((challenge, idx) => (
          <div key={idx} className="flex gap-4 p-6 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl">
            <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
            <p className="text-muted-foreground">{challenge}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
