export interface Project {
  id: string
  title: string
  slug: string
  postedBy: {
    id: string
    name: string
    logo: string
    type: "company" | "contractor" | "individual"
    verified: boolean
  }
  projectType: string // matches INDUSTRIES slug
  description: string
  scope: string[]
  location: {
    city: string
    state: string
    address?: string
  }
  budget: {
    min: number
    max: number
    currency: "INR"
    type: "fixed" | "range" | "negotiable"
  }
  timeline: {
    startDate: string // ISO
    endDate: string // ISO
    durationMonths: number
  }
  workforceNeeded: {
    totalWorkers: number
    categories: { category: string; count: number }[] // worker category slug + count
  }
  status: "Open for Bids" | "In Progress" | "On Hold" | "Completed" | "Cancelled"
  bids: number
  views: number
  postedDate: string
  deadline?: string // bidding deadline
  featured?: boolean
  urgent?: boolean
  verified: boolean
  attachments?: { name: string; type: "pdf" | "image" | "doc"; size: string }[]
  images?: string[]
}

export const PROJECTS: Project[] = [
  {
    id: "prj-001",
    title: "G+30 Residential Tower Construction - Bandra",
    slug: "g30-residential-tower-bandra",
    postedBy: {
      id: "lodha-group",
      name: "Lodha Group",
      logo: "/images/clients/lodha-group.svg",
      type: "company",
      verified: true,
    },
    projectType: "residential",
    description:
      "Construction of a 30-floor luxury residential tower with 240 apartments. Includes RCC framework, MEP, interior fit-out, and external facade. Looking for experienced contractors and skilled workforce.",
    scope: [
      "RCC structural work",
      "MEP installation",
      "Interior fit-out",
      "External facade & cladding",
      "Landscaping & amenities",
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Bandra West, Linking Road",
    },
    budget: {
      min: 180000000,
      max: 220000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-07-01",
      endDate: "2028-06-30",
      durationMonths: 24,
    },
    workforceNeeded: {
      totalWorkers: 350,
      categories: [
        { category: "mason", count: 80 },
        { category: "steel-fixer", count: 60 },
        { category: "carpenter", count: 40 },
        { category: "electrician", count: 30 },
        { category: "plumber", count: 25 },
        { category: "site-supervisor", count: 8 },
        { category: "civil-engineer", count: 5 },
        { category: "helper", count: 102 },
      ],
    },
    status: "Open for Bids",
    bids: 14,
    views: 1842,
    postedDate: "2026-05-15",
    deadline: "2026-06-15",
    featured: true,
    verified: true,
    images: [
      "/images/projects/residential-tower-1.jpg",
      "/images/projects/residential-tower-2.jpg",
    ],
    attachments: [
      { name: "Project_BOQ.pdf", type: "pdf", size: "2.4 MB" },
      { name: "Site_Layout.pdf", type: "pdf", size: "5.1 MB" },
    ],
  },
  {
    id: "prj-002",
    title: "6-Lane Highway Expansion Project - Ahmedabad to Vadodara",
    slug: "highway-expansion-ahmedabad-vadodara",
    postedBy: {
      id: "ncc-limited",
      name: "NCC Limited",
      logo: "/images/clients/ncc.svg",
      type: "company",
      verified: true,
    },
    projectType: "road-highway",
    description:
      "Expansion of existing 4-lane highway to 6-lane between Ahmedabad and Vadodara. 102 km stretch including 8 flyovers, 12 underpasses, and toll plazas.",
    scope: [
      "Earthwork and embankment",
      "Bituminous pavement",
      "Flyover construction",
      "Underpass & culvert works",
      "Toll plaza construction",
      "Road furniture & signage",
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "NH-48, Ahmedabad to Vadodara stretch",
    },
    budget: {
      min: 850000000,
      max: 950000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-08-01",
      endDate: "2028-12-31",
      durationMonths: 28,
    },
    workforceNeeded: {
      totalWorkers: 480,
      categories: [
        { category: "heavy-equipment-operator", count: 60 },
        { category: "excavator-operator", count: 40 },
        { category: "site-supervisor", count: 20 },
        { category: "civil-engineer", count: 12 },
        { category: "surveyor", count: 15 },
        { category: "safety-officer", count: 8 },
        { category: "helper", count: 325 },
      ],
    },
    status: "Open for Bids",
    bids: 8,
    views: 2654,
    postedDate: "2026-05-10",
    deadline: "2026-06-30",
    featured: true,
    urgent: true,
    verified: true,
    images: ["/images/projects/highway-1.jpg"],
  },
  {
    id: "prj-003",
    title: "Commercial Office Complex - IT Park, Whitefield",
    slug: "commercial-office-it-park-whitefield",
    postedBy: {
      id: "brigade-group",
      name: "Brigade Group",
      logo: "/images/clients/brigade-group.svg",
      type: "company",
      verified: true,
    },
    projectType: "commercial",
    description:
      "Construction of a 35-floor IT office complex with twin towers, basement parking for 800 vehicles, and modern amenities including auditorium and food court.",
    scope: [
      "Pile foundation & RCC structure",
      "Glass facade & cladding",
      "HVAC installation",
      "Fire safety systems",
      "Interior fit-out",
    ],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      address: "Whitefield IT Park, EPIP Zone",
    },
    budget: {
      min: 320000000,
      max: 380000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-07-15",
      endDate: "2028-09-30",
      durationMonths: 26,
    },
    workforceNeeded: {
      totalWorkers: 280,
      categories: [
        { category: "civil-engineer", count: 8 },
        { category: "site-engineer", count: 15 },
        { category: "mason", count: 50 },
        { category: "steel-fixer", count: 45 },
        { category: "electrician", count: 25 },
        { category: "plumber", count: 20 },
        { category: "glass-installer", count: 18 },
        { category: "hvac-technician", count: 12 },
        { category: "helper", count: 87 },
      ],
    },
    status: "Open for Bids",
    bids: 22,
    views: 3120,
    postedDate: "2026-05-08",
    deadline: "2026-06-20",
    featured: true,
    verified: true,
    images: ["/images/projects/office-complex-1.jpg"],
  },
  {
    id: "prj-004",
    title: "Cable-Stayed Bridge over Narmada River",
    slug: "cable-stayed-bridge-narmada",
    postedBy: {
      id: "hcc",
      name: "HCC",
      logo: "/images/clients/hcc.svg",
      type: "company",
      verified: true,
    },
    projectType: "bridge",
    description:
      "Design and construction of a 1.2 km cable-stayed bridge over the Narmada River connecting two highway segments. Includes approach roads and pylon construction.",
    scope: [
      "Pylon construction (140m height)",
      "Cable stay installation",
      "Deck construction",
      "Approach road & embankment",
      "Lighting & signage",
    ],
    location: {
      city: "Bharuch",
      state: "Gujarat",
    },
    budget: {
      min: 1200000000,
      max: 1450000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-09-01",
      endDate: "2029-08-31",
      durationMonths: 36,
    },
    workforceNeeded: {
      totalWorkers: 320,
      categories: [
        { category: "welder", count: 50 },
        { category: "steel-fixer", count: 45 },
        { category: "crane-operator", count: 12 },
        { category: "civil-engineer", count: 18 },
        { category: "site-supervisor", count: 25 },
        { category: "safety-officer", count: 10 },
        { category: "helper", count: 160 },
      ],
    },
    status: "Open for Bids",
    bids: 5,
    views: 1980,
    postedDate: "2026-05-05",
    deadline: "2026-07-15",
    featured: true,
    verified: true,
    images: ["/images/projects/bridge-1.jpg"],
  },
  {
    id: "prj-005",
    title: "Luxury Villa Interior Fit-out - 24 Units",
    slug: "luxury-villa-interior-fitout",
    postedBy: {
      id: "prestige-group",
      name: "Prestige Group",
      logo: "/images/clients/prestige-group.svg",
      type: "company",
      verified: true,
    },
    projectType: "interior-fitout",
    description:
      "Complete interior fit-out for 24 luxury villas including modular kitchens, wardrobes, false ceilings, premium flooring, and decorative wall finishes.",
    scope: [
      "Modular kitchen installation",
      "Wardrobe & storage",
      "False ceiling & gypsum work",
      "Marble & wooden flooring",
      "Wall paneling & decor",
    ],
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      address: "Prestige White Meadows, Whitefield",
    },
    budget: {
      min: 48000000,
      max: 62000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-06-15",
      endDate: "2026-12-15",
      durationMonths: 6,
    },
    workforceNeeded: {
      totalWorkers: 95,
      categories: [
        { category: "carpenter", count: 35 },
        { category: "tile-layer", count: 18 },
        { category: "painter", count: 20 },
        { category: "electrician", count: 8 },
        { category: "plumber", count: 6 },
        { category: "helper", count: 8 },
      ],
    },
    status: "Open for Bids",
    bids: 16,
    views: 1430,
    postedDate: "2026-05-18",
    deadline: "2026-06-10",
    urgent: true,
    verified: true,
    images: ["/images/projects/villa-interior-1.jpg"],
  },
  {
    id: "prj-006",
    title: "50 MW Solar Power Plant Construction",
    slug: "50mw-solar-plant",
    postedBy: {
      id: "tata-projects",
      name: "Tata Projects",
      logo: "/images/clients/tata-projects.svg",
      type: "company",
      verified: true,
    },
    projectType: "solar-renewable",
    description:
      "Construction of a 50 MW ground-mounted solar power plant on 200 acres. Includes module mounting, inverter stations, transmission line, and substation.",
    scope: [
      "Site preparation & leveling",
      "Pile foundation for mounting structures",
      "Solar panel installation",
      "Cabling & inverter setup",
      "Substation construction",
    ],
    location: {
      city: "Jodhpur",
      state: "Rajasthan",
    },
    budget: {
      min: 180000000,
      max: 215000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-08-01",
      endDate: "2027-07-31",
      durationMonths: 12,
    },
    workforceNeeded: {
      totalWorkers: 220,
      categories: [
        { category: "electrician", count: 40 },
        { category: "welder", count: 25 },
        { category: "heavy-equipment-operator", count: 15 },
        { category: "site-supervisor", count: 10 },
        { category: "civil-engineer", count: 6 },
        { category: "helper", count: 124 },
      ],
    },
    status: "Open for Bids",
    bids: 11,
    views: 1670,
    postedDate: "2026-05-12",
    deadline: "2026-06-25",
    featured: true,
    verified: true,
    images: ["/images/projects/solar-plant-1.jpg"],
  },
  {
    id: "prj-007",
    title: "Metro Station Construction - Phase 2",
    slug: "metro-station-phase-2",
    postedBy: {
      id: "afcons",
      name: "Afcons Infrastructure",
      logo: "/images/clients/afcons.svg",
      type: "company",
      verified: true,
    },
    projectType: "metro-railway",
    description:
      "Construction of 4 elevated metro stations as part of Ahmedabad Metro Phase 2 expansion. Includes platforms, concourses, escalators, and station finishing.",
    scope: [
      "Pile & substructure work",
      "Concrete platforms & concourse",
      "Steel roofing structure",
      "MEP & escalator installation",
      "Architectural finishing",
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    budget: {
      min: 540000000,
      max: 620000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-07-01",
      endDate: "2028-06-30",
      durationMonths: 24,
    },
    workforceNeeded: {
      totalWorkers: 380,
      categories: [
        { category: "mason", count: 60 },
        { category: "steel-fixer", count: 70 },
        { category: "welder", count: 35 },
        { category: "electrician", count: 30 },
        { category: "crane-operator", count: 8 },
        { category: "civil-engineer", count: 12 },
        { category: "site-supervisor", count: 18 },
        { category: "helper", count: 147 },
      ],
    },
    status: "In Progress",
    bids: 0,
    views: 980,
    postedDate: "2026-04-15",
    verified: true,
    images: ["/images/projects/metro-station-1.jpg"],
  },
  {
    id: "prj-008",
    title: "School Building Renovation - Government Project",
    slug: "school-renovation-govt",
    postedBy: {
      id: "ahluwalia-contracts",
      name: "Ahluwalia Contracts",
      logo: "/images/clients/ahluwalia-contracts.svg",
      type: "contractor",
      verified: true,
    },
    projectType: "renovation",
    description:
      "Renovation and modernization of 12 government school buildings in Lucknow district. Includes structural repair, new classrooms, sanitation, and painting.",
    scope: [
      "Structural repair & strengthening",
      "New classroom construction",
      "Toilet block & water tank",
      "Painting & finishing",
      "Compound wall & landscaping",
    ],
    location: {
      city: "Lucknow",
      state: "Uttar Pradesh",
    },
    budget: {
      min: 42000000,
      max: 55000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-06-01",
      endDate: "2027-03-31",
      durationMonths: 10,
    },
    workforceNeeded: {
      totalWorkers: 140,
      categories: [
        { category: "mason", count: 35 },
        { category: "painter", count: 25 },
        { category: "electrician", count: 12 },
        { category: "plumber", count: 10 },
        { category: "carpenter", count: 8 },
        { category: "helper", count: 50 },
      ],
    },
    status: "Open for Bids",
    bids: 19,
    views: 1240,
    postedDate: "2026-05-16",
    deadline: "2026-06-08",
    verified: true,
    images: ["/images/projects/school-renovation-1.jpg"],
  },
  {
    id: "prj-009",
    title: "Smart City Infrastructure - Phase 3",
    slug: "smart-city-phase-3",
    postedBy: {
      id: "lt-construction",
      name: "L&T Construction",
      logo: "/images/clients/lt-construction.svg",
      type: "company",
      verified: true,
    },
    projectType: "smart-city",
    description:
      "Phase 3 implementation of Ahmedabad Smart City project. Includes smart road lighting, IoT-based traffic systems, surveillance, and urban WiFi infrastructure.",
    scope: [
      "Smart pole installation",
      "Underground cabling",
      "IoT sensor deployment",
      "CCTV surveillance network",
      "Command & control center",
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    budget: {
      min: 240000000,
      max: 290000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-08-15",
      endDate: "2027-08-15",
      durationMonths: 12,
    },
    workforceNeeded: {
      totalWorkers: 165,
      categories: [
        { category: "electrician", count: 50 },
        { category: "civil-engineer", count: 10 },
        { category: "site-supervisor", count: 12 },
        { category: "excavator-operator", count: 8 },
        { category: "helper", count: 85 },
      ],
    },
    status: "Open for Bids",
    bids: 7,
    views: 1560,
    postedDate: "2026-05-13",
    deadline: "2026-07-01",
    featured: true,
    verified: true,
    images: ["/images/projects/smart-city-1.jpg"],
  },
  {
    id: "prj-010",
    title: "Industrial Warehouse Construction - 5 Lakh Sq Ft",
    slug: "industrial-warehouse-5lakh-sqft",
    postedBy: {
      id: "kalpataru",
      name: "Kalpataru Projects",
      logo: "/images/clients/kalpataru.svg",
      type: "company",
      verified: true,
    },
    projectType: "industrial",
    description:
      "Pre-engineered building (PEB) construction of a 5 lakh sq ft industrial warehouse with loading bays, office block, and utility area.",
    scope: [
      "PEB structural erection",
      "Roofing & wall cladding",
      "Concrete flooring",
      "Loading bays & dock levelers",
      "Office block fit-out",
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Chakan MIDC Industrial Area",
    },
    budget: {
      min: 160000000,
      max: 195000000,
      currency: "INR",
      type: "range",
    },
    timeline: {
      startDate: "2026-07-01",
      endDate: "2027-04-30",
      durationMonths: 10,
    },
    workforceNeeded: {
      totalWorkers: 195,
      categories: [
        { category: "welder", count: 40 },
        { category: "steel-fixer", count: 30 },
        { category: "crane-operator", count: 8 },
        { category: "electrician", count: 18 },
        { category: "site-supervisor", count: 10 },
        { category: "helper", count: 89 },
      ],
    },
    status: "Open for Bids",
    bids: 13,
    views: 1320,
    postedDate: "2026-05-17",
    deadline: "2026-06-18",
    verified: true,
    images: ["/images/projects/warehouse-1.jpg"],
  },
]

// ============================================
// HELPERS
// ============================================
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
export const URGENT_PROJECTS = PROJECTS.filter((p) => p.urgent)
export const OPEN_PROJECTS = PROJECTS.filter((p) => p.status === "Open for Bids")
export const LATEST_PROJECTS = [...PROJECTS]
  .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
  .slice(0, 6)

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug)
export const getProjectsByType = (type: string) =>
  PROJECTS.filter((p) => p.projectType === type)
export const getProjectsByState = (state: string) =>
  PROJECTS.filter((p) => p.location.state.toLowerCase() === state.toLowerCase())

export const PROJECT_STATS = {
  total: PROJECTS.length,
  open: OPEN_PROJECTS.length,
  inProgress: PROJECTS.filter((p) => p.status === "In Progress").length,
  featured: FEATURED_PROJECTS.length,
  totalValue: PROJECTS.reduce((sum, p) => sum + p.budget.max, 0),
}