import { CASE_STUDIES } from "@/data/case-studies"
import { CaseStudyCard } from "./CaseStudyCard"

export function CaseStudyGrid() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {CASE_STUDIES.map((study) => (
        <CaseStudyCard 
          key={study.slug}
          slug={study.slug}
          industry={study.industry}
          client={study.client}
          title={study.title}
          challenge={study.challenge}
          metrics={study.metrics}
        />
      ))}
    </div>
  )
}
