export interface Client {
  id: string
  name: string
  logo: string // path to logo
  website?: string
  category: "developer" | "infrastructure" | "contractor" | "consultancy" | "epc"
  featured?: boolean
  tier: "tier-1" | "tier-2" | "tier-3" // company size tier
}

// ============================================
// PARTNER COMPANIES (logos shown on homepage)
// ============================================
export const CLIENTS: Client[] = [
  // ===== TIER 1 — Major National Players =====
  {
    id: "lt-construction",
    name: "L&T Construction",
    logo: "/images/clients/lt-construction.svg",
    website: "https://www.ltconstruction.com",
    category: "epc",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "tata-projects",
    name: "Tata Projects",
    logo: "/images/clients/tata-projects.svg",
    website: "https://www.tataprojects.com",
    category: "epc",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "shapoorji-pallonji",
    name: "Shapoorji Pallonji",
    logo: "/images/clients/shapoorji-pallonji.svg",
    website: "https://www.shapoorjipallonji.com",
    category: "contractor",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "dlf",
    name: "DLF Limited",
    logo: "/images/clients/dlf.svg",
    website: "https://www.dlf.in",
    category: "developer",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "godrej-properties",
    name: "Godrej Properties",
    logo: "/images/clients/godrej-properties.svg",
    website: "https://www.godrejproperties.com",
    category: "developer",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "brigade-group",
    name: "Brigade Group",
    logo: "/images/clients/brigade-group.svg",
    website: "https://www.brigadegroup.com",
    category: "developer",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "lodha-group",
    name: "Lodha Group",
    logo: "/images/clients/lodha-group.svg",
    website: "https://www.lodhagroup.in",
    category: "developer",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "prestige-group",
    name: "Prestige Group",
    logo: "/images/clients/prestige-group.svg",
    website: "https://www.prestigeconstructions.com",
    category: "developer",
    tier: "tier-1",
    featured: true,
  },

  // ===== TIER 1 — Infrastructure & EPC =====
  {
    id: "afcons",
    name: "Afcons Infrastructure",
    logo: "/images/clients/afcons.svg",
    website: "https://www.afcons.com",
    category: "infrastructure",
    tier: "tier-1",
    featured: true,
  },
  {
    id: "ircon",
    name: "IRCON International",
    logo: "/images/clients/ircon.svg",
    website: "https://www.ircon.org",
    category: "infrastructure",
    tier: "tier-1",
  },
  {
    id: "ncc-limited",
    name: "NCC Limited",
    logo: "/images/clients/ncc.svg",
    website: "https://www.ncclimited.com",
    category: "contractor",
    tier: "tier-1",
  },
  {
    id: "hcc",
    name: "HCC",
    logo: "/images/clients/hcc.svg",
    website: "https://www.hccindia.com",
    category: "infrastructure",
    tier: "tier-1",
  },

  // ===== TIER 2 — Regional Leaders =====
  {
    id: "oberoi-realty",
    name: "Oberoi Realty",
    logo: "/images/clients/oberoi-realty.svg",
    website: "https://www.oberoirealty.com",
    category: "developer",
    tier: "tier-2",
  },
  {
    id: "puravankara",
    name: "Puravankara",
    logo: "/images/clients/puravankara.svg",
    website: "https://www.puravankara.com",
    category: "developer",
    tier: "tier-2",
  },
  {
    id: "sobha-limited",
    name: "Sobha Limited",
    logo: "/images/clients/sobha.svg",
    website: "https://www.sobha.com",
    category: "developer",
    tier: "tier-2",
  },
  {
    id: "mahindra-lifespaces",
    name: "Mahindra Lifespaces",
    logo: "/images/clients/mahindra-lifespaces.svg",
    website: "https://www.mahindralifespaces.com",
    category: "developer",
    tier: "tier-2",
  },
  {
    id: "ahluwalia-contracts",
    name: "Ahluwalia Contracts",
    logo: "/images/clients/ahluwalia-contracts.svg",
    website: "https://www.acilnet.com",
    category: "contractor",
    tier: "tier-2",
  },
  {
    id: "kalpataru",
    name: "Kalpataru Projects",
    logo: "/images/clients/kalpataru.svg",
    website: "https://www.kalpatarupower.com",
    category: "epc",
    tier: "tier-2",
  },
  {
    id: "gmr-infrastructure",
    name: "GMR Infrastructure",
    logo: "/images/clients/gmr.svg",
    website: "https://www.gmrgroup.in",
    category: "infrastructure",
    tier: "tier-2",
  },
  {
    id: "gvk",
    name: "GVK Group",
    logo: "/images/clients/gvk.svg",
    website: "https://www.gvk.com",
    category: "infrastructure",
    tier: "tier-2",
  },

  // ===== TIER 2 — Specialty Contractors =====
  {
    id: "voltas",
    name: "Voltas",
    logo: "/images/clients/voltas.svg",
    website: "https://www.voltas.com",
    category: "contractor",
    tier: "tier-2",
  },
  {
    id: "blue-star",
    name: "Blue Star Limited",
    logo: "/images/clients/blue-star.svg",
    website: "https://www.bluestarindia.com",
    category: "contractor",
    tier: "tier-2",
  },
  {
    id: "aecom-india",
    name: "AECOM India",
    logo: "/images/clients/aecom.svg",
    website: "https://www.aecom.com/in",
    category: "consultancy",
    tier: "tier-2",
  },
  {
    id: "wsp-india",
    name: "WSP India",
    logo: "/images/clients/wsp.svg",
    website: "https://www.wsp.com/en-in",
    category: "consultancy",
    tier: "tier-2",
  },
]

// ============================================
// HELPERS
// ============================================
export const FEATURED_CLIENTS = CLIENTS.filter((c) => c.featured)

export const getClientsByCategory = (category: Client["category"]) =>
  CLIENTS.filter((c) => c.category === category)

export const getClientsByTier = (tier: Client["tier"]) =>
  CLIENTS.filter((c) => c.tier === tier)

// Stats for marketing display
export const CLIENT_STATS = {
  total: CLIENTS.length,
  tier1: CLIENTS.filter((c) => c.tier === "tier-1").length,
  developers: CLIENTS.filter((c) => c.category === "developer").length,
  contractors: CLIENTS.filter((c) => c.category === "contractor").length,
  infrastructure: CLIENTS.filter((c) => c.category === "infrastructure").length,
}