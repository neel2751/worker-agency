import {
  Hammer,
  Zap,
  Wrench,
  Pickaxe,
  Flame,
  Paintbrush,
  HardHat,
  Truck,
  Cog,
  Building2,
  ShieldCheck,
  Ruler,
  Compass,
  ClipboardList,
  Users,
  Layers,
  Wind,
  Droplets,
  Mountain,
  Construction,
  TreePine,
  Lightbulb,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

export interface WorkerCategory {
  shortDesc: ReactNode
  id:  string | number | null | undefined
  name: ReactNode
  slug: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  jobCount: number
  avgSalary: string
  demandLevel: "High" | "Medium" | "Low"
  skills: string[]
  popular?: boolean
}

export const WORKER_CATEGORIES: WorkerCategory[] = [
  {
    slug: "mason",
    title: "Mason",
    description: "Skilled in bricklaying, plastering, and stone masonry for residential and commercial construction.",
    icon: Hammer,
    color: "bg-brand-100 text-brand-600",
    jobCount: 1842,
    avgSalary: "₹18,000 - ₹35,000",
    demandLevel: "High",
    skills: ["Bricklaying", "Plastering", "Stonework", "Cement Work"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "electrician",
    title: "Electrician",
    description: "Install, repair, and maintain electrical systems for buildings, sites, and infrastructure projects.",
    icon: Zap,
    color: "bg-hiviz-100 text-hiviz-700",
    jobCount: 2156,
    avgSalary: "₹22,000 - ₹45,000",
    demandLevel: "High",
    skills: ["Wiring", "Panel Installation", "Conduit Work", "Troubleshooting"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "plumber",
    title: "Plumber",
    description: "Install and repair water supply, drainage, and sewage systems across construction projects.",
    icon: Droplets,
    color: "bg-blue-100 text-blue-600",
    jobCount: 1654,
    avgSalary: "₹20,000 - ₹40,000",
    demandLevel: "High",
    skills: ["Pipe Fitting", "Drainage", "Water Systems", "Leak Repair"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "carpenter",
    title: "Carpenter",
    description: "Build, install, and repair wooden structures including frames, fixtures, and finishings.",
    icon: Wrench,
    color: "bg-amber-100 text-amber-700",
    jobCount: 1423,
    avgSalary: "₹18,000 - ₹38,000",
    demandLevel: "High",
    skills: ["Framing", "Cabinetry", "Roofing", "Finish Work"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "welder",
    title: "Welder",
    description: "Join metal parts using welding equipment for structural steel, pipelines, and fabrication.",
    icon: Flame,
    color: "bg-red-100 text-red-600",
    jobCount: 1287,
    avgSalary: "₹25,000 - ₹50,000",
    demandLevel: "High",
    skills: ["Arc Welding", "TIG", "MIG", "Structural Steel"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "painter",
    title: "Painter",
    description: "Apply paint, varnish, and finishes to interior and exterior surfaces of buildings.",
    icon: Paintbrush,
    color: "bg-purple-100 text-purple-600",
    jobCount: 982,
    avgSalary: "₹15,000 - ₹30,000",
    demandLevel: "Medium",
    skills: ["Interior Paint", "Exterior Paint", "Texture", "Polishing"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "steel-fixer",
    title: "Steel Fixer",
    description: "Cut, bend, and position steel reinforcement bars for concrete structures.",
    icon: Layers,
    color: "bg-steel-100 text-steel-700",
    jobCount: 856,
    avgSalary: "₹20,000 - ₹38,000",
    demandLevel: "High",
    skills: ["Rebar Cutting", "Bar Bending", "Tying", "Blueprint Reading"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "tile-layer",
    title: "Tile Layer",
    description: "Install ceramic, marble, and stone tiles on floors, walls, and surfaces.",
    icon: Layers,
    color: "bg-teal-100 text-teal-600",
    jobCount: 743,
    avgSalary: "₹18,000 - ₹35,000",
    demandLevel: "Medium",
    skills: ["Floor Tiling", "Wall Tiling", "Grouting", "Cutting"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "crane-operator",
    title: "Crane Operator",
    description: "Operate tower cranes, mobile cranes, and lifting equipment on construction sites.",
    icon: Construction,
    color: "bg-orange-100 text-orange-600",
    jobCount: 654,
    avgSalary: "₹35,000 - ₹70,000",
    demandLevel: "High",
    skills: ["Tower Crane", "Mobile Crane", "Safety", "Load Calculation"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "heavy-equipment-operator",
    title: "Heavy Equipment Operator",
    description: "Operate bulldozers, excavators, loaders, and other heavy machinery on sites.",
    icon: Truck,
    color: "bg-yellow-100 text-yellow-700",
    jobCount: 892,
    avgSalary: "₹28,000 - ₹55,000",
    demandLevel: "High",
    skills: ["Excavator", "Bulldozer", "Loader", "Site Maintenance"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "site-supervisor",
    title: "Site Supervisor",
    description: "Oversee daily construction operations, manage labor, and ensure project timelines.",
    icon: ClipboardList,
    color: "bg-indigo-100 text-indigo-600",
    jobCount: 1124,
    avgSalary: "₹35,000 - ₹75,000",
    demandLevel: "High",
    skills: ["Team Management", "Quality Control", "Safety", "Reporting"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "civil-engineer",
    title: "Civil Engineer",
    description: "Design, plan, and supervise construction of buildings, roads, bridges, and infrastructure.",
    icon: Building2,
    color: "bg-brand-100 text-brand-600",
    jobCount: 1567,
    avgSalary: "₹40,000 - ₹1,20,000",
    demandLevel: "High",
    skills: ["AutoCAD", "Structural Design", "Project Planning", "Site Survey"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "site-engineer",
    title: "Site Engineer",
    description: "Handle technical aspects of construction sites including drawings, measurements, and quality.",
    icon: Compass,
    color: "bg-cyan-100 text-cyan-600",
    jobCount: 1342,
    avgSalary: "₹30,000 - ₹65,000",
    demandLevel: "High",
    skills: ["Site Layout", "Measurements", "Drawing Review", "Quality Check"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "safety-officer",
    title: "Safety Officer",
    description: "Ensure construction sites follow safety regulations and prevent workplace accidents.",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
    jobCount: 678,
    avgSalary: "₹28,000 - ₹60,000",
    demandLevel: "Medium",
    skills: ["EHS", "Risk Assessment", "Compliance", "Training"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "surveyor",
    title: "Surveyor",
    description: "Measure and map construction sites, establishing boundaries and elevations.",
    icon: Ruler,
    color: "bg-pink-100 text-pink-600",
    jobCount: 542,
    avgSalary: "₹25,000 - ₹55,000",
    demandLevel: "Medium",
    skills: ["Total Station", "GPS Survey", "Mapping", "Land Survey"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "architect",
    title: "Architect",
    description: "Design buildings and structures combining aesthetics with structural integrity.",
    icon: Compass,
    color: "bg-violet-100 text-violet-600",
    jobCount: 924,
    avgSalary: "₹45,000 - ₹1,50,000",
    demandLevel: "Medium",
    skills: ["Design", "AutoCAD", "Revit", "3D Modeling"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "foreman",
    title: "Foreman",
    description: "Lead construction crews, assign tasks, and ensure daily targets are met on site.",
    icon: Users,
    color: "bg-rose-100 text-rose-600",
    jobCount: 812,
    avgSalary: "₹30,000 - ₹60,000",
    demandLevel: "High",
    skills: ["Crew Management", "Scheduling", "Quality", "Communication"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "helper",
    title: "Helper / Labourer",
    description: "Assist skilled tradesmen with material handling, cleanup, and general construction tasks.",
    icon: HardHat,
    color: "bg-concrete-200 text-concrete-700",
    jobCount: 3245,
    avgSalary: "₹12,000 - ₹22,000",
    demandLevel: "High",
    skills: ["Material Handling", "Site Cleanup", "Basic Tools", "Loading"],
    popular: true,
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "hvac-technician",
    title: "HVAC Technician",
    description: "Install and maintain heating, ventilation, and air conditioning systems.",
    icon: Wind,
    color: "bg-sky-100 text-sky-600",
    jobCount: 487,
    avgSalary: "₹25,000 - ₹50,000",
    demandLevel: "Medium",
    skills: ["AC Installation", "Ductwork", "Refrigeration", "Maintenance"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "glass-installer",
    title: "Glass Installer",
    description: "Install glass panels, windows, doors, and facades in commercial buildings.",
    icon: Layers,
    color: "bg-blue-100 text-blue-600",
    jobCount: 312,
    avgSalary: "₹20,000 - ₹40,000",
    demandLevel: "Medium",
    skills: ["Glass Fitting", "Facade", "Aluminum Work", "Safety"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "roofing-specialist",
    title: "Roofing Specialist",
    description: "Install and repair roofs using tiles, metal sheets, or membrane systems.",
    icon: Mountain,
    color: "bg-stone-100 text-stone-700",
    jobCount: 398,
    avgSalary: "₹22,000 - ₹42,000",
    demandLevel: "Medium",
    skills: ["Tile Roofing", "Metal Roofing", "Waterproofing", "Insulation"],
    id: undefined,
    name: undefined,
    shortDesc: undefined
  },
  {
    slug: "excavator-operator",
    title: "Excavator Operator",
    description: "Operate excavation machinery for digging foundations, trenches, and earthwork.",
    icon: Pickaxe,
    color: "bg-amber-100 text-amber-700",
    jobCount: 567,
    avgSalary: "₹25,000 - ₹50,000",
    demandLevel: "Medium",
    skills: ["Excavator", "Trenching", "Foundation Dig", "Site Prep"],
    id: undefined,
    name: undefined,
    shortDesc: undefined  
  },
]

export const POPULAR_CATEGORIES = WORKER_CATEGORIES.filter((c) => c.popular)

export const getCategoryBySlug = (slug: string) =>
  WORKER_CATEGORIES.find((c) => c.slug === slug)

export const CATEGORY_STATS = {
  totalCategories: WORKER_CATEGORIES.length,
  totalJobs: WORKER_CATEGORIES.reduce((sum, c) => sum + c.jobCount, 0),
  highDemandCount: WORKER_CATEGORIES.filter((c) => c.demandLevel === "High")
    .length,
}