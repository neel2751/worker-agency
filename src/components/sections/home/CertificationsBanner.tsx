import { TrustBadges } from "../shared/TrustBadges"

export function CertificationsBanner() {
  return (
    <div className="border-y border-border/60 bg-background py-12">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Certified &amp; compliant
      </p>
      <div className="overflow-x-auto px-4">
        <div className="flex min-w-max justify-center">
          <TrustBadges />
        </div>
      </div>
    </div>
  )
}