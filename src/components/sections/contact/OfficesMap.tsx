import { MapPin } from "lucide-react"

export function OfficesMap() {
  const offices = [
    { city: "Cambridge, MA", type: "Global HQ" },
    { city: "Austin, TX", type: "Engineering Hub" },
    { city: "London, UK", type: "EMEA Operations" },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">While we are a remote-first organization, we maintain strategic hubs to support our global enterprise clients.</p>
        </div>
        
        <div className="relative w-full h-[400px] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden border">
  
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-400 via-slate-300 to-transparent dark:from-slate-600 dark:via-slate-700" />
            
          <div className="absolute top-[40%] left-[25%] flex flex-col items-center group cursor-pointer">
            <div className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg relative z-10 group-hover:scale-110 transition-transform">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="mt-2 text-xs font-bold bg-background px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Cambridge HQ
            </div>
          </div>
          
          <div className="absolute top-[50%] left-[20%] flex flex-col items-center group cursor-pointer">
            <div className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg relative z-10 group-hover:scale-110 transition-transform">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="mt-2 text-xs font-bold bg-background px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Austin Hub
            </div>
          </div>
          
          <div className="absolute top-[35%] left-[45%] flex flex-col items-center group cursor-pointer">
            <div className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg relative z-10 group-hover:scale-110 transition-transform">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="mt-2 text-xs font-bold bg-background px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              London Hub
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {offices.map(office => (
            <div key={office.city} className="flex items-center gap-3 justify-center p-4 bg-background border rounded-xl">
              <span className="font-bold">{office.city}</span>
              <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{office.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
