import { ENGAGEMENT_MODELS } from "@/data/engagement-models"
import { CheckCircle2, XCircle, Clock, DollarSign } from "lucide-react"

export function EngagementModels() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {ENGAGEMENT_MODELS.map((model, idx) => (
        <div key={idx} className={`p-8 border rounded-3xl flex flex-col ${model.name === 'Implementation' ? 'border-accent shadow-lg relative' : 'bg-card shadow-sm'}`}>
          {model.name === 'Implementation' && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
              Most Popular
            </div>
          )}
          <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
          <p className="text-muted-foreground mb-2">{model.idealFor}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="h-4 w-4" />
            <span>{model.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <DollarSign className="h-4 w-4" />
            <span>{model.pricingModel}</span>
          </div>
          <div className="space-y-3 flex-1">
            <p className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Includes:</p>
            {model.inclusions.map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
            <p className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mt-4">Not Included:</p>
            {model.notIncluded.map((item, i) => (
              <div key={i} className="flex gap-3">
                <XCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/contact" className={`block text-center py-3 px-4 rounded-md font-semibold transition-colors ${model.name === 'Implementation' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
              Get Started
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
