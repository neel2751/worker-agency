import {
  Home,
  Building2,
  Factory,
  TrafficCone,
  Train,
  Plane,
  Wrench,
  Sofa,
  Sun,
  Droplets,
  Cpu,
  ArrowLeftRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

export interface Industry {
  name: ReactNode
  heroDesc: ReactNode
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  color: string
  image: string
  projectCount: number
  activeWorkers: number
  highlights: string[]
  popular?: boolean
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "residential",
    title: "Residential Building",
    shortTitle: "Residential",
    description: "Houses, apartments, villas, and townships. From single-family homes to multi-tower complexes.",
    icon: Home,
    color: "bg-brand-100 text-brand-600",
    image: "/images/industries/residential.jpg",
    projectCount: 3245,
    activeWorkers: 18540,
    highlights: [
      "Apartment complexes",
      "Independent houses",
      "Villas & townships",
      "Affordable housing",
    ],
    popular: true,
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "commercial",
    title: "Commercial Building",
    shortTitle: "Commercial",
    description: "Office spaces, retail outlets, malls, hotels, and corporate parks for businesses.",
    icon: Building2,
    color: "bg-blue-100 text-blue-600",
    image: "/images/industries/commercial.jpg",
    projectCount: 1876,
    activeWorkers: 12340,
    highlights: [
      "Office towers",
      "Shopping malls",
      "Hotels & resorts",
      "Co-working spaces",
    ],
    popular: true,
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "industrial",
    title: "Industrial Construction",
    shortTitle: "Industrial",
    description: "Factories, warehouses, manufacturing plants, and industrial parks across sectors.",
    icon: Factory,
    color: "bg-steel-100 text-steel-700",
    image: "/images/industries/industrial.jpg",
    projectCount: 987,
    activeWorkers: 8920,
    highlights: [
      "Manufacturing units",
      "Warehouses",
      "Logistics parks",
      "Pre-engineered buildings",
    ],
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "road-highway",
    title: "Road & Highway",
    shortTitle: "Roads",
    description: "National highways, expressways, urban roads, and flyover projects across India.",
    icon: TrafficCone,
    color: "bg-hiviz-100 text-hiviz-700",
    image: "/images/industries/road-highway.jpg",
    projectCount: 654,
    activeWorkers: 14230,
    highlights: [
      "National highways",
      "Expressways",
      "City roads",
      "Flyovers & ramps",
    ],
    popular: true,
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "bridge",
    title: "Bridge Construction",
    shortTitle: "Bridges",
    description: "Road bridges, rail bridges, cable-stayed bridges, and major river crossings.",
    icon: ArrowLeftRight,
    color: "bg-cyan-100 text-cyan-600",
    image: "/images/industries/bridge.jpg",
    projectCount: 234,
    activeWorkers: 4120,
    highlights: [
      "Road bridges",
      "Rail bridges",
      "Cable-stayed",
      "Sea bridges",
    ],
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "metro-railway",
    title: "Metro / Railway",
    shortTitle: "Metro & Rail",
    description: "Metro rail networks, railway lines, stations, and depot construction projects.",
    icon: Train,
    color: "bg-purple-100 text-purple-600",
    image: "/images/industries/metro-railway.jpg",
    projectCount: 187,
    activeWorkers: 9876,
    highlights: [
      "Metro lines",
      "Railway tracks",
      "Stations",
      "Depots & yards",
    ],
    popular: true,
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "airport-port",
    title: "Airport / Port",
    shortTitle: "Airport & Port",
    description: "Airport terminals, runways, seaports, and dock infrastructure projects.",
    icon: Plane,
    color: "bg-indigo-100 text-indigo-600",
    image: "/images/industries/airport-port.jpg",
    projectCount: 76,
    activeWorkers: 5430,
    highlights: [
      "Terminal buildings",
      "Runways",
      "Sea ports",
      "Cargo facilities",
    ],
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "renovation",
    title: "Renovation",
    shortTitle: "Renovation",
    description: "Building renovation, restoration, and modernization of existing structures.",
    icon: Wrench,
    color: "bg-amber-100 text-amber-700",
    image: "/images/industries/renovation.jpg",
    projectCount: 1432,
    activeWorkers: 6540,
    highlights: [
      "Home renovation",
      "Office remodeling",
      "Heritage restoration",
      "Structural repair",
    ],
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "interior-fitout",
    title: "Interior Fit-out",
    shortTitle: "Interior",
    description: "Interior design, fit-out, and finishing for residential and commercial spaces.",
    icon: Sofa,
    color: "bg-rose-100 text-rose-600",
    image: "/images/industries/interior-fitout.jpg",
    projectCount: 2143,
    activeWorkers: 8760,
    highlights: [
      "Office interiors",
      "Home interiors",
      "Retail fit-out",
      "Modular furniture",
    ],
    popular: true,
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "solar-renewable",
    title: "Solar / Renewable Energy",
    shortTitle: "Renewable",
    description: "Solar parks, rooftop solar, wind farms, and renewable energy infrastructure.",
    icon: Sun,
    color: "bg-yellow-100 text-yellow-700",
    image: "/images/industries/solar-renewable.jpg",
    projectCount: 423,
    activeWorkers: 3210,
    highlights: [
      "Solar parks",
      "Rooftop solar",
      "Wind farms",
      "Battery storage",
    ],
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "water-sewage",
    title: "Water & Sewage",
    shortTitle: "Water",
    description: "Water treatment plants, pipelines, sewage systems, and urban water infrastructure.",
    icon: Droplets,
    color: "bg-blue-100 text-blue-600",
    image: "/images/industries/water-sewage.jpg",
    projectCount: 312,
    activeWorkers: 4320,
    highlights: [
      "Treatment plants",
      "Water pipelines",
      "Sewage systems",
      "Drainage",
    ],
    name: undefined,
    heroDesc: undefined,
  },
  {
    slug: "smart-city",
    title: "Smart City Infrastructure",
    shortTitle: "Smart City",
    description: "Smart city projects including IoT infrastructure, smart roads, and digital utilities.",
    icon: Cpu,
    color: "bg-teal-100 text-teal-600",
    image: "/images/industries/smart-city.jpg",
    projectCount: 156,
    activeWorkers: 2870,
    highlights: [
      "Smart roads",
      "IoT infrastructure",
      "Digital utilities",
      "Surveillance systems",
    ],
    name: undefined,
    heroDesc: undefined,
  },
]

export const POPULAR_INDUSTRIES = INDUSTRIES.filter((i) => i.popular)

export const getIndustryBySlug = (slug: string) =>
  INDUSTRIES.find((i) => i.slug === slug)

export const INDUSTRY_STATS = {
  totalIndustries: INDUSTRIES.length,
  totalProjects: INDUSTRIES.reduce((sum, i) => sum + i.projectCount, 0),
  totalWorkers: INDUSTRIES.reduce((sum, i) => sum + i.activeWorkers, 0),
}