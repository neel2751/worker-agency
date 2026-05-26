export interface Worker {
  id: string
  name: string
  slug: string
  avatar: string
  coverImage?: string
  headline: string // e.g., "Senior Mason | 8+ Years Experience"
  primaryCategory: string // matches WORKER_CATEGORIES slug
  secondaryCategories?: string[]
  experience: {
    years: number
    level: "Fresher" | "Entry Level" | "Mid Level" | "Senior Level" | "Expert"
  }
  location: {
    city: string
    state: string
    willingToRelocate: boolean
  }
  availability:
    | "Available Now"
    | "Available in 15 days"
    | "Available in 30 days"
    | "Not Available"
  expectedSalary: {
    min: number
    max: number
    period: "monthly" | "daily"
    currency: "INR"
    negotiable: boolean
  }
  skills: string[]
  languages: string[]
  about: string
  certifications: {
    name: string
    issuer: string
    year: number
    verified: boolean
  }[]
  education?: {
    degree: string
    institute: string
    year: number
  }[]
  workHistory: {
    role: string
    company: string
    duration: string
    description?: string
  }[]
  portfolio?: {
    title: string
    image: string
    description: string
  }[]
  rating: number // 1-5
  reviewCount: number
  jobsCompleted: number
  profileViews: number
  profileCompletion: number // percentage
  verified: boolean
  topRated?: boolean
  featured?: boolean
  joinedDate: string // ISO
}

export const WORKERS: Worker[] = [
  {
    id: "wrk-001",
    name: "Rajesh Kumar Sharma",
    slug: "rajesh-kumar-sharma",
    avatar: "/images/workers/rajesh-kumar.jpg",
    headline: "Senior Mason | 12+ Years in High-Rise Projects",
    primaryCategory: "mason",
    secondaryCategories: ["tile-layer"],
    experience: { years: 12, level: "Expert" },
    location: { city: "Ahmedabad", state: "Gujarat", willingToRelocate: true },
    availability: "Available in 15 days",
    expectedSalary: {
      min: 35000,
      max: 50000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: [
      "Bricklaying",
      "Plastering",
      "Stonework",
      "Tile Fixing",
      "Team Leadership",
      "Blueprint Reading",
    ],
    languages: ["Hindi", "Gujarati", "English"],
    about:
      "Experienced mason with 12+ years working on high-rise residential and commercial projects. Led teams of up to 20 masons on projects for Lodha Group, Godrej Properties, and Shapoorji Pallonji. Specialize in premium finishing work.",
    certifications: [
      {
        name: "Skill India Certified Mason - Level 4",
        issuer: "NSDC",
        year: 2022,
        verified: true,
      },
      {
        name: "Safety Training Certificate",
        issuer: "L&T Institute",
        year: 2023,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Lead Mason",
        company: "Lodha Group",
        duration: "2022 - Present",
        description: "Leading masonry team for 45-floor luxury tower",
      },
      {
        role: "Senior Mason",
        company: "Godrej Properties",
        duration: "2019 - 2022",
      },
      {
        role: "Mason",
        company: "Local Contractor",
        duration: "2014 - 2019",
      },
    ],
    portfolio: [
      {
        title: "Lodha World Towers - Worli",
        image: "/images/portfolio/work-1.jpg",
        description: "Premium brick & stone masonry on 60-floor tower",
      },
      {
        title: "Godrej Tower - Pune",
        image: "/images/portfolio/work-2.jpg",
        description: "Exterior cladding and wall construction",
      },
    ],
    rating: 4.9,
    reviewCount: 47,
    jobsCompleted: 23,
    profileViews: 1240,
    profileCompletion: 95,
    verified: true,
    topRated: true,
    featured: true,
    joinedDate: "2023-02-15",
  },
  {
    id: "wrk-002",
    name: "Mohammed Ashraf Khan",
    slug: "mohammed-ashraf-khan",
    avatar: "/images/workers/mohammed-ashraf.jpg",
    headline: "Certified Electrician | LT/HT Systems Specialist",
    primaryCategory: "electrician",
    experience: { years: 9, level: "Senior Level" },
    location: { city: "Mumbai", state: "Maharashtra", willingToRelocate: true },
    availability: "Available Now",
    expectedSalary: {
      min: 38000,
      max: 55000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: [
      "Wiring",
      "Panel Installation",
      "LT/HT Systems",
      "Conduit Work",
      "Troubleshooting",
      "PLC Basics",
    ],
    languages: ["Hindi", "English", "Marathi", "Urdu"],
    about:
      "ITI-certified electrician with hands-on experience in industrial and infrastructure projects. Worked on metro stations, commercial complexes, and manufacturing plants.",
    certifications: [
      {
        name: "ITI Electrician",
        issuer: "Government ITI Mumbai",
        year: 2015,
        verified: true,
      },
      {
        name: "Electrical Supervisor License",
        issuer: "Maharashtra Electrical Board",
        year: 2020,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Senior Electrician",
        company: "Afcons Infrastructure",
        duration: "2021 - Present",
      },
      {
        role: "Electrician",
        company: "Tata Projects",
        duration: "2018 - 2021",
      },
    ],
    rating: 4.8,
    reviewCount: 38,
    jobsCompleted: 19,
    profileViews: 980,
    profileCompletion: 92,
    verified: true,
    topRated: true,
    featured: true,
    joinedDate: "2023-05-10",
  },
  {
    id: "wrk-003",
    name: "Suresh Patel",
    slug: "suresh-patel",
    avatar: "/images/workers/suresh-patel.jpg",
    headline: "Heavy Equipment Operator | Crane & Excavator Certified",
    primaryCategory: "crane-operator",
    secondaryCategories: ["heavy-equipment-operator", "excavator-operator"],
    experience: { years: 14, level: "Expert" },
    location: { city: "Surat", state: "Gujarat", willingToRelocate: true },
    availability: "Available in 30 days",
    expectedSalary: {
      min: 55000,
      max: 80000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: [
      "Tower Crane",
      "Mobile Crane",
      "Excavator",
      "Bulldozer",
      "Load Calculation",
      "Safety Protocols",
    ],
    languages: ["Gujarati", "Hindi", "English"],
    about:
      "Highly experienced operator with valid licenses for tower crane, mobile crane, and excavator. Operated on infrastructure projects including bridges, highways, and high-rise buildings.",
    certifications: [
      {
        name: "Tower Crane Operator License",
        issuer: "DGFASLI",
        year: 2018,
        verified: true,
      },
      {
        name: "Heavy Equipment Safety Course",
        issuer: "L&T ECC",
        year: 2021,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Tower Crane Operator",
        company: "Shapoorji Pallonji",
        duration: "2020 - Present",
      },
      {
        role: "Mobile Crane Operator",
        company: "HCC",
        duration: "2015 - 2020",
      },
    ],
    rating: 4.9,
    reviewCount: 52,
    jobsCompleted: 28,
    profileViews: 1450,
    profileCompletion: 88,
    verified: true,
    topRated: true,
    featured: true,
    joinedDate: "2022-11-08",
  },
  {
    id: "wrk-004",
    name: "Vinod Yadav",
    slug: "vinod-yadav",
    avatar: "/images/workers/vinod-yadav.jpg",
    headline: "Certified Welder | ARC, MIG, TIG Expert",
    primaryCategory: "welder",
    experience: { years: 7, level: "Senior Level" },
    location: { city: "Pune", state: "Maharashtra", willingToRelocate: true },
    availability: "Available Now",
    expectedSalary: {
      min: 35000,
      max: 52000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: [
      "Arc Welding",
      "MIG Welding",
      "TIG Welding",
      "Structural Steel",
      "Pipe Welding",
      "Blueprint Reading",
    ],
    languages: ["Hindi", "Marathi", "English"],
    about:
      "Skilled welder with certifications in multiple welding processes. Worked on bridge construction, industrial fabrication, and PEB structures.",
    certifications: [
      {
        name: "ITI Welder",
        issuer: "Government ITI Pune",
        year: 2017,
        verified: true,
      },
      {
        name: "ASME Certified Welder",
        issuer: "Indian Welding Society",
        year: 2022,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Welder",
        company: "HCC",
        duration: "2021 - Present",
      },
      {
        role: "Welder",
        company: "Kalpataru Projects",
        duration: "2018 - 2021",
      },
    ],
    portfolio: [
      {
        title: "Bandra-Worli Sea Link Maintenance",
        image: "/images/portfolio/welding-1.jpg",
        description: "Structural welding repair work",
      },
    ],
    rating: 4.7,
    reviewCount: 29,
    jobsCompleted: 16,
    profileViews: 780,
    profileCompletion: 90,
    verified: true,
    topRated: true,
    joinedDate: "2023-08-22",
  },
  {
    id: "wrk-005",
    name: "Anjali Iyer",
    slug: "anjali-iyer",
    avatar: "/images/workers/anjali-iyer.jpg",
    headline: "Civil Site Engineer | B.E. + 5 Yrs Commercial Projects",
    primaryCategory: "site-engineer",
    secondaryCategories: ["civil-engineer"],
    experience: { years: 5, level: "Mid Level" },
    location: { city: "Bengaluru", state: "Karnataka", willingToRelocate: false },
    availability: "Available in 15 days",
    expectedSalary: {
      min: 55000,
      max: 80000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: [
      "AutoCAD",
      "Site Supervision",
      "MS Project",
      "Quality Control",
      "BIM Basics",
      "Team Management",
    ],
    languages: ["English", "Hindi", "Tamil", "Kannada"],
    about:
      "B.E. Civil Engineering graduate with 5 years on commercial high-rise projects. Strong in site execution, drawing review, and quality control.",
    certifications: [
      {
        name: "B.E. Civil Engineering",
        issuer: "Anna University",
        year: 2019,
        verified: true,
      },
      {
        name: "PMP Certified",
        issuer: "PMI",
        year: 2023,
        verified: true,
      },
    ],
    education: [
      {
        degree: "B.E. Civil Engineering",
        institute: "Anna University, Chennai",
        year: 2019,
      },
    ],
    workHistory: [
      {
        role: "Senior Site Engineer",
        company: "Brigade Group",
        duration: "2022 - Present",
      },
      {
        role: "Site Engineer",
        company: "Sobha Limited",
        duration: "2019 - 2022",
      },
    ],
    rating: 4.8,
    reviewCount: 18,
    jobsCompleted: 7,
    profileViews: 1120,
    profileCompletion: 96,
    verified: true,
    topRated: true,
    featured: true,
    joinedDate: "2023-04-12",
  },
  {
    id: "wrk-006",
    name: "Ramesh Singh",
    slug: "ramesh-singh",
    avatar: "/images/workers/ramesh-singh.jpg",
    headline: "Plumber | CPVC & PPR Pipe Installation Expert",
    primaryCategory: "plumber",
    experience: { years: 8, level: "Senior Level" },
    location: { city: "Delhi", state: "Delhi", willingToRelocate: true },
    availability: "Available Now",
    expectedSalary: {
      min: 28000,
      max: 42000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: ["Pipe Fitting", "CPVC", "PPR", "Drainage", "Fixture Installation", "Leak Repair"],
    languages: ["Hindi", "English"],
    about:
      "Skilled plumber with experience on luxury hotels, hospitals, and high-rise residential projects. Expert in modern piping systems.",
    certifications: [
      {
        name: "ITI Plumber",
        issuer: "Government ITI Delhi",
        year: 2016,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Senior Plumber",
        company: "Tata Projects",
        duration: "2021 - Present",
      },
      {
        role: "Plumber",
        company: "DLF Constructions",
        duration: "2017 - 2021",
      },
    ],
    rating: 4.6,
    reviewCount: 24,
    jobsCompleted: 14,
    profileViews: 650,
    profileCompletion: 85,
    verified: true,
    joinedDate: "2023-07-18",
  },
  {
    id: "wrk-007",
    name: "Lakshmi Devi",
    slug: "lakshmi-devi",
    avatar: "/images/workers/lakshmi-devi.jpg",
    headline: "Site Supervisor | Highway & Road Projects Specialist",
    primaryCategory: "site-supervisor",
    experience: { years: 11, level: "Expert" },
    location: { city: "Hyderabad", state: "Telangana", willingToRelocate: true },
    availability: "Available in 30 days",
    expectedSalary: {
      min: 50000,
      max: 75000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: [
      "Highway Construction",
      "Team Management",
      "Quality Control",
      "Safety Compliance",
      "Hindi/Telugu Communication",
      "Reporting",
    ],
    languages: ["Telugu", "Hindi", "English", "Tamil"],
    about:
      "Site supervisor with 11+ years on national highway and expressway projects. Managed gangs of 50+ workers across multiple sites.",
    certifications: [
      {
        name: "Diploma in Civil Engineering",
        issuer: "Government Polytechnic Hyderabad",
        year: 2013,
        verified: true,
      },
      {
        name: "Highway Construction Specialist",
        issuer: "IRC Academy",
        year: 2019,
        verified: true,
      },
    ],
    education: [
      {
        degree: "Diploma in Civil Engineering",
        institute: "Government Polytechnic Hyderabad",
        year: 2013,
      },
    ],
    workHistory: [
      {
        role: "Site Supervisor",
        company: "NCC Limited",
        duration: "2020 - Present",
      },
      {
        role: "Site Supervisor",
        company: "GMR Infrastructure",
        duration: "2015 - 2020",
      },
    ],
    rating: 4.9,
    reviewCount: 41,
    jobsCompleted: 17,
    profileViews: 1340,
    profileCompletion: 93,
    verified: true,
    topRated: true,
    featured: true,
    joinedDate: "2022-09-05",
  },
  {
    id: "wrk-008",
    name: "Mahesh Kumar",
    slug: "mahesh-kumar",
    avatar: "/images/workers/mahesh-kumar.jpg",
    headline: "Carpenter | Modular Kitchen & Wardrobe Specialist",
    primaryCategory: "carpenter",
    experience: { years: 6, level: "Mid Level" },
    location: { city: "Mumbai", state: "Maharashtra", willingToRelocate: false },
    availability: "Available Now",
    expectedSalary: {
      min: 800,
      max: 1400,
      period: "daily",
      currency: "INR",
      negotiable: true,
    },
    skills: ["Modular Kitchen", "Wardrobes", "False Ceiling", "Finishing", "Hand Tools", "Power Tools"],
    languages: ["Hindi", "Marathi", "English"],
    about:
      "Skilled carpenter specializing in luxury home interiors and modular furniture installation. Worked with top interior design firms.",
    certifications: [
      {
        name: "Skill India Certified Carpenter - Level 3",
        issuer: "NSDC",
        year: 2020,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Carpenter",
        company: "Godrej Interio",
        duration: "2020 - Present",
      },
    ],
    rating: 4.5,
    reviewCount: 19,
    jobsCompleted: 11,
    profileViews: 480,
    profileCompletion: 78,
    verified: true,
    joinedDate: "2024-01-15",
  },
  {
    id: "wrk-009",
    name: "Pradeep Mishra",
    slug: "pradeep-mishra",
    avatar: "/images/workers/pradeep-mishra.jpg",
    headline: "Safety Officer | NEBOSH Certified, 6 Yrs Industrial",
    primaryCategory: "safety-officer",
    experience: { years: 6, level: "Senior Level" },
    location: { city: "Vadodara", state: "Gujarat", willingToRelocate: true },
    availability: "Available in 15 days",
    expectedSalary: {
      min: 45000,
      max: 65000,
      period: "monthly",
      currency: "INR",
      negotiable: false,
    },
    skills: ["EHS Management", "NEBOSH", "Risk Assessment", "Auditing", "Safety Training", "Incident Investigation"],
    languages: ["Hindi", "Gujarati", "English"],
    about:
      "Certified safety officer with experience on petrochemical, power plant, and large infrastructure projects. NEBOSH IGC qualified.",
    certifications: [
      {
        name: "NEBOSH IGC",
        issuer: "NEBOSH UK",
        year: 2021,
        verified: true,
      },
      {
        name: "Diploma in Industrial Safety",
        issuer: "RLI Mumbai",
        year: 2018,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Safety Officer",
        company: "Kalpataru Projects",
        duration: "2022 - Present",
      },
      {
        role: "Safety Officer",
        company: "L&T Construction",
        duration: "2019 - 2022",
      },
    ],
    rating: 4.8,
    reviewCount: 22,
    jobsCompleted: 9,
    profileViews: 890,
    profileCompletion: 91,
    verified: true,
    topRated: true,
    joinedDate: "2023-03-20",
  },
  {
    id: "wrk-010",
    name: "Karan Joshi",
    slug: "karan-joshi",
    avatar: "/images/workers/karan-joshi.jpg",
    headline: "Steel Fixer | BBS Reading & Rebar Specialist",
    primaryCategory: "steel-fixer",
    experience: { years: 5, level: "Mid Level" },
    location: { city: "Chennai", state: "Tamil Nadu", willingToRelocate: true },
    availability: "Available Now",
    expectedSalary: {
      min: 25000,
      max: 38000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: ["Rebar Cutting", "Bar Bending", "BBS Reading", "Tying", "Foundation Work"],
    languages: ["Tamil", "Hindi", "English"],
    about:
      "Steel fixer with experience on metro, bridge, and high-rise foundation work. Capable of reading and executing complex BBS.",
    certifications: [
      {
        name: "Skill India Certified Bar Bender",
        issuer: "NSDC",
        year: 2021,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Steel Fixer",
        company: "Afcons Infrastructure",
        duration: "2022 - Present",
      },
    ],
    rating: 4.6,
    reviewCount: 14,
    jobsCompleted: 8,
    profileViews: 520,
    profileCompletion: 82,
    verified: true,
    joinedDate: "2023-10-08",
  },
  {
    id: "wrk-011",
    name: "Priya Sharma",
    slug: "priya-sharma",
    avatar: "/images/workers/priya-sharma.jpg",
    headline: "Civil Engineer | Fresher, B.Tech 2025",
    primaryCategory: "civil-engineer",
    experience: { years: 0, level: "Fresher" },
    location: { city: "Ahmedabad", state: "Gujarat", willingToRelocate: true },
    availability: "Available Now",
    expectedSalary: {
      min: 22000,
      max: 35000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: ["AutoCAD", "Revit", "MS Office", "Site Survey Basics", "Communication"],
    languages: ["English", "Hindi", "Gujarati"],
    about:
      "Recent B.Tech graduate in Civil Engineering. Completed internship at Tata Projects and seeking entry-level site engineer roles.",
    certifications: [
      {
        name: "AutoCAD Certified",
        issuer: "Autodesk",
        year: 2024,
        verified: true,
      },
    ],
    education: [
      {
        degree: "B.Tech Civil Engineering",
        institute: "Nirma University, Ahmedabad",
        year: 2025,
      },
    ],
    workHistory: [
      {
        role: "Site Engineer Intern",
        company: "Tata Projects",
        duration: "Jun 2024 - Dec 2024",
        description: "6-month internship on commercial complex project",
      },
    ],
    rating: 4.5,
    reviewCount: 3,
    jobsCompleted: 1,
    profileViews: 340,
    profileCompletion: 89,
    verified: true,
    joinedDate: "2025-01-10",
  },
  {
    id: "wrk-012",
    name: "Imran Sheikh",
    slug: "imran-sheikh",
    avatar: "/images/workers/imran-sheikh.jpg",
    headline: "Painter | Premium & Texture Finishes",
    primaryCategory: "painter",
    experience: { years: 9, level: "Senior Level" },
    location: { city: "Bengaluru", state: "Karnataka", willingToRelocate: false },
    availability: "Available in 15 days",
    expectedSalary: {
      min: 28000,
      max: 42000,
      period: "monthly",
      currency: "INR",
      negotiable: true,
    },
    skills: ["Interior Paint", "Exterior Paint", "Texture Finishes", "Royale Play", "Putty Work", "Surface Prep"],
    languages: ["Hindi", "Kannada", "English"],
    about:
      "Painter with extensive experience in premium villa and luxury apartment projects. Trained in Asian Paints Royale Play and texture finishes.",
    certifications: [
      {
        name: "Asian Paints Certified Painter",
        issuer: "Asian Paints Academy",
        year: 2022,
        verified: true,
      },
    ],
    workHistory: [
      {
        role: "Painter",
        company: "Prestige Group",
        duration: "2020 - Present",
      },
    ],
    rating: 4.7,
    reviewCount: 26,
    jobsCompleted: 13,
    profileViews: 670,
    profileCompletion: 84,
    verified: true,
    joinedDate: "2023-06-12",
  },
]

// ============================================
// HELPERS
// ============================================
export const FEATURED_WORKERS = WORKERS.filter((w) => w.featured)
export const TOP_RATED_WORKERS = WORKERS.filter((w) => w.topRated)
export const VERIFIED_WORKERS = WORKERS.filter((w) => w.verified)
export const AVAILABLE_WORKERS = WORKERS.filter(
  (w) => w.availability === "Available Now"
)

export const getWorkerBySlug = (slug: string) =>
  WORKERS.find((w) => w.slug === slug)
export const getWorkersByCategory = (category: string) =>
  WORKERS.filter(
    (w) =>
      w.primaryCategory === category ||
      w.secondaryCategories?.includes(category)
  )
export const getWorkersByCity = (city: string) =>
  WORKERS.filter((w) => w.location.city.toLowerCase() === city.toLowerCase())

export const WORKER_STATS = {
  total: WORKERS.length,
  verified: VERIFIED_WORKERS.length,
  topRated: TOP_RATED_WORKERS.length,
  available: AVAILABLE_WORKERS.length,
}