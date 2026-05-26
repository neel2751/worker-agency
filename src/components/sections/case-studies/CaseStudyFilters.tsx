import { Button } from "@/components/ui/button"

export function CaseStudyFilters() {
  const filters = ["All", "Finance", "Healthcare", "Retail", "Technology"]
  
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {filters.map((filter, idx) => (
        <Button 
          key={filter} 
          variant={idx === 0 ? "default" : "outline"}
          className="rounded-full"
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
