export interface Job {
  id: string
  title: string
  slug: string
  companyId: string
  companyName: string
  companyLogo: string
  category: string // matches WORKER_CATEGORIES slug
  jobType:
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Daily Wage"
    | "Project-based"
    | "Internship"
    | "Apprenticeship"
  experienceLevel:
    | "Fresher"
    | "Entry Level"
    | "Mid Level"
    | "Senior Level"
    | "Expert"
  location: {
    city: string
    state: string
    isRemote?: boolean
    onSite: boolean
  }
  salary: {
    min: number
    max: number
    period: "monthly" | "daily" | "hourly" | "project"
    currency: "INR"
  }
  description: string
  responsibilities: string[]
  requirements: string[]
  skills: string[]
  benefits?: string[]
  openings: number
  applicants: number
  views: number
  postedDate: string // ISO date string
  deadline?: string
  urgent?: boolean
  featured?: boolean
  verified: boolean
  status: "active" | "closed" | "paused"
}

export const JOBS: Job[] = [
  {
    id: "job-001",
    title: "Senior Mason - Residential Project",
    slug: "senior-mason-residential-project-lodha",
    companyId: "lodha-group",
    companyName: "Lodha Group",
    companyLogo: "/images/clients/lodha-group.svg",
    category: "mason",
    jobType: "Contract",
    experienceLevel: "Senior Level",
    location: { city: "Mumbai", state: "Maharashtra", onSite: true },
    salary: { min: 28000, max: 45000, period: "monthly", currency: "INR" },
    description:
      "Lodha Group is hiring experienced masons for a premium residential township project in Thane. Looking for skilled masons with proven track record in luxury construction.",
    responsibilities: [
      "Execute bricklaying and stonework as per architectural drawings",
      "Apply cement, plaster, and finishing materials to walls and surfaces",
      "Supervise junior masons and labour helpers on site",
      "Ensure quality standards and timely completion of assigned work",
      "Coordinate with site engineer for material requirements",
    ],
    requirements: [
      "Minimum 5 years of experience as a mason",
      "Experience with high-rise residential projects",
      "Ability to read basic construction drawings",
      "Knowledge of safety procedures on construction sites",
    ],
    skills: ["Bricklaying", "Plastering", "Stonework", "Finishing", "Team Leadership"],
    benefits: ["Free accommodation", "PF & ESI", "Overtime pay", "Festival bonus"],
    openings: 15,
    applicants: 84,
    views: 1240,
    postedDate: "2026-05-18",
    deadline: "2026-06-15",
    urgent: true,
    featured: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-002",
    title: "Certified Electrician - Metro Project",
    slug: "certified-electrician-metro-afcons",
    companyId: "afcons",
    companyName: "Afcons Infrastructure",
    companyLogo: "/images/clients/afcons.svg",
    category: "electrician",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    location: { city: "Ahmedabad", state: "Gujarat", onSite: true },
    salary: { min: 35000, max: 55000, period: "monthly", currency: "INR" },
    description:
      "Join Afcons' metro rail project in Ahmedabad. Looking for certified electricians for tunnel and station electrical works.",
    responsibilities: [
      "Install electrical wiring, conduits, and panels for metro stations",
      "Read and interpret electrical schematics and blueprints",
      "Conduct safety checks and troubleshoot electrical issues",
      "Maintain logs of installation and testing activities",
    ],
    requirements: [
      "ITI Electrician certificate (mandatory)",
      "3-6 years of experience in industrial/infrastructure projects",
      "Knowledge of LT/HT systems preferred",
      "Valid electrical license",
    ],
    skills: ["Wiring", "Panel Installation", "Conduit Work", "Safety Compliance", "LT/HT Systems"],
    benefits: ["Health insurance", "PF", "Site allowance", "Annual bonus"],
    openings: 8,
    applicants: 142,
    views: 2150,
    postedDate: "2026-05-15",
    deadline: "2026-06-20",
    featured: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-003",
    title: "Site Engineer - Commercial Building",
    slug: "site-engineer-commercial-brigade",
    companyId: "brigade-group",
    companyName: "Brigade Group",
    companyLogo: "/images/clients/brigade-group.svg",
    category: "site-engineer",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    location: { city: "Bengaluru", state: "Karnataka", onSite: true },
    salary: { min: 45000, max: 75000, period: "monthly", currency: "INR" },
    description:
      "Brigade Group is hiring site engineers for a 35-storey commercial tower project in Whitefield, Bengaluru.",
    responsibilities: [
      "Supervise day-to-day construction activities on site",
      "Coordinate with architects, contractors, and consultants",
      "Maintain quality, safety, and progress reports",
      "Review and approve material requirements",
      "Resolve technical issues during execution",
    ],
    requirements: [
      "B.E./B.Tech in Civil Engineering",
      "3-5 years of experience in commercial construction",
      "Proficiency in AutoCAD and MS Project",
      "Strong communication and leadership skills",
    ],
    skills: ["AutoCAD", "Site Supervision", "Quality Control", "MS Project", "Team Management"],
    benefits: ["Health insurance", "Performance bonus", "Career growth", "PF & gratuity"],
    openings: 4,
    applicants: 215,
    views: 3420,
    postedDate: "2026-05-12",
    deadline: "2026-06-25",
    featured: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-004",
    title: "Welder - Bridge Construction",
    slug: "welder-bridge-hcc",
    companyId: "hcc",
    companyName: "HCC",
    companyLogo: "/images/clients/hcc.svg",
    category: "welder",
    jobType: "Contract",
    experienceLevel: "Senior Level",
    location: { city: "Surat", state: "Gujarat", onSite: true },
    salary: { min: 32000, max: 55000, period: "monthly", currency: "INR" },
    description:
      "Experienced welders needed for HCC's flyover bridge project. ARC, MIG, and TIG welding required.",
    responsibilities: [
      "Perform structural welding on steel girders and reinforcement",
      "Interpret welding symbols and structural drawings",
      "Inspect completed welds for quality and integrity",
      "Maintain welding equipment in safe working condition",
    ],
    requirements: [
      "5+ years of welding experience in infrastructure projects",
      "Certified in ARC, MIG, and TIG welding",
      "Knowledge of structural steel welding standards",
    ],
    skills: ["Arc Welding", "MIG", "TIG", "Structural Steel", "Blueprint Reading"],
    openings: 12,
    applicants: 67,
    views: 980,
    postedDate: "2026-05-20",
    urgent: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-005",
    title: "Plumber - Hotel Construction",
    slug: "plumber-hotel-tata",
    companyId: "tata-projects",
    companyName: "Tata Projects",
    companyLogo: "/images/clients/tata-projects.svg",
    category: "plumber",
    jobType: "Project-based",
    experienceLevel: "Mid Level",
    location: { city: "Pune", state: "Maharashtra", onSite: true },
    salary: { min: 25000, max: 42000, period: "monthly", currency: "INR" },
    description:
      "Tata Projects is hiring skilled plumbers for a 5-star hotel project. 18-month project duration.",
    responsibilities: [
      "Install water supply and drainage systems",
      "Fix bathroom and kitchen plumbing fixtures",
      "Pressure-test pipelines and identify leaks",
      "Work as per project drawings and BOQ",
    ],
    requirements: [
      "ITI Plumber certificate or equivalent",
      "Minimum 4 years of hotel/commercial plumbing experience",
      "Knowledge of CPVC, PPR, and copper piping",
    ],
    skills: ["Pipe Fitting", "CPVC", "PPR", "Drainage", "Fixture Installation"],
    benefits: ["Accommodation", "Food allowance", "PF", "Project bonus"],
    openings: 10,
    applicants: 98,
    views: 1420,
    postedDate: "2026-05-17",
    verified: true,
    status: "active",
  },
  {
    id: "job-006",
    title: "Carpenter - Interior Fit-out",
    slug: "carpenter-interior-godrej",
    companyId: "godrej-properties",
    companyName: "Godrej Properties",
    companyLogo: "/images/clients/godrej-properties.svg",
    category: "carpenter",
    jobType: "Daily Wage",
    experienceLevel: "Mid Level",
    location: { city: "Mumbai", state: "Maharashtra", onSite: true },
    salary: { min: 800, max: 1500, period: "daily", currency: "INR" },
    description:
      "Carpenters needed for luxury apartment interior fit-out. Daily wage with overtime opportunities.",
    responsibilities: [
      "Install modular kitchens, wardrobes, and false ceilings",
      "Build wooden frames and partitions",
      "Finish surfaces, sanding, and polishing",
    ],
    requirements: [
      "Minimum 3 years of finish carpentry experience",
      "Experience with modular furniture installation",
    ],
    skills: ["Modular Kitchen", "Wardrobes", "False Ceiling", "Finishing", "Hand Tools"],
    openings: 20,
    applicants: 156,
    views: 2340,
    postedDate: "2026-05-19",
    urgent: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-007",
    title: "Crane Operator - High-Rise Project",
    slug: "crane-operator-shapoorji",
    companyId: "shapoorji-pallonji",
    companyName: "Shapoorji Pallonji",
    companyLogo: "/images/clients/shapoorji-pallonji.svg",
    category: "crane-operator",
    jobType: "Full-time",
    experienceLevel: "Expert",
    location: { city: "Mumbai", state: "Maharashtra", onSite: true },
    salary: { min: 50000, max: 85000, period: "monthly", currency: "INR" },
    description:
      "Senior tower crane operators needed for a 60-floor residential tower in Bandra. Must have valid license.",
    responsibilities: [
      "Operate tower crane safely as per load charts",
      "Coordinate with site supervisors for material movement",
      "Perform daily inspection of crane equipment",
      "Maintain operator logbook and incident reports",
    ],
    requirements: [
      "Valid Tower Crane Operator license",
      "10+ years of experience on high-rise projects",
      "Familiar with luffing jib and flat-top cranes",
    ],
    skills: ["Tower Crane", "Load Calculation", "Safety Compliance", "Equipment Maintenance"],
    benefits: ["Health insurance", "PF", "Bonus", "Free meals"],
    openings: 3,
    applicants: 42,
    views: 720,
    postedDate: "2026-05-14",
    featured: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-008",
    title: "Site Supervisor - Highway Project",
    slug: "site-supervisor-highway-ncc",
    companyId: "ncc-limited",
    companyName: "NCC Limited",
    companyLogo: "/images/clients/ncc.svg",
    category: "site-supervisor",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    location: { city: "Jaipur", state: "Rajasthan", onSite: true },
    salary: { min: 45000, max: 80000, period: "monthly", currency: "INR" },
    description:
      "Site supervisors for a 6-lane national highway expansion project. 2-year contract with accommodation.",
    responsibilities: [
      "Manage labour gangs (30-50 workers per shift)",
      "Daily progress tracking and reporting",
      "Coordinate equipment, material, and manpower",
      "Ensure safety protocols are followed",
    ],
    requirements: [
      "Diploma in Civil Engineering",
      "5+ years of road/highway construction experience",
      "Strong leadership and Hindi/English communication",
    ],
    skills: ["Team Management", "Highway Construction", "Quality Control", "Reporting", "Hindi/English"],
    benefits: ["Accommodation", "Vehicle allowance", "PF", "Annual bonus"],
    openings: 6,
    applicants: 178,
    views: 2890,
    postedDate: "2026-05-11",
    verified: true,
    status: "active",
  },
  {
    id: "job-009",
    title: "Civil Engineering Internship",
    slug: "civil-engineering-internship-lt",
    companyId: "lt-construction",
    companyName: "L&T Construction",
    companyLogo: "/images/clients/lt-construction.svg",
    category: "civil-engineer",
    jobType: "Internship",
    experienceLevel: "Fresher",
    location: { city: "Ahmedabad", state: "Gujarat", onSite: true },
    salary: { min: 15000, max: 25000, period: "monthly", currency: "INR" },
    description:
      "6-month paid internship for civil engineering students. Hands-on exposure to live infrastructure projects with mentorship from senior engineers.",
    responsibilities: [
      "Assist site engineers in daily project work",
      "Learn QA/QC and project planning",
      "Prepare DPRs and monthly reports",
      "Site visits and progress documentation",
    ],
    requirements: [
      "Pursuing or recently completed B.E./B.Tech Civil Engineering",
      "Strong academics (60%+)",
      "Eagerness to learn",
    ],
    skills: ["AutoCAD basics", "MS Office", "Communication", "Problem Solving"],
    benefits: ["Stipend", "PPO opportunity", "Certificate", "Free training"],
    openings: 25,
    applicants: 432,
    views: 5680,
    postedDate: "2026-05-10",
    deadline: "2026-06-10",
    featured: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-010",
    title: "Safety Officer - Industrial Plant",
    slug: "safety-officer-industrial-kalpataru",
    companyId: "kalpataru",
    companyName: "Kalpataru Projects",
    companyLogo: "/images/clients/kalpataru.svg",
    category: "safety-officer",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    location: { city: "Vadodara", state: "Gujarat", onSite: true },
    salary: { min: 35000, max: 60000, period: "monthly", currency: "INR" },
    description:
      "Safety officer for a petrochemical plant construction site. NEBOSH/IOSH certification preferred.",
    responsibilities: [
      "Implement EHS plan as per project standards",
      "Conduct daily toolbox talks and safety audits",
      "Investigate incidents and prepare reports",
      "Train workers on safety procedures",
    ],
    requirements: [
      "Diploma/Degree in Industrial Safety",
      "3-5 years EHS experience in industrial projects",
      "NEBOSH IGC or equivalent",
    ],
    skills: ["EHS", "Risk Assessment", "NEBOSH", "Auditing", "Training"],
    benefits: ["Insurance", "PF", "Site allowance", "Career development"],
    openings: 2,
    applicants: 89,
    views: 1340,
    postedDate: "2026-05-16",
    verified: true,
    status: "active",
  },
  {
    id: "job-011",
    title: "Steel Fixer - Foundation Work",
    slug: "steel-fixer-foundation-afcons",
    companyId: "afcons",
    companyName: "Afcons Infrastructure",
    companyLogo: "/images/clients/afcons.svg",
    category: "steel-fixer",
    jobType: "Daily Wage",
    experienceLevel: "Mid Level",
    location: { city: "Chennai", state: "Tamil Nadu", onSite: true },
    salary: { min: 700, max: 1200, period: "daily", currency: "INR" },
    description:
      "Steel fixers required for port project foundation work. Daily wage with food and accommodation.",
    responsibilities: [
      "Cut, bend, and tie reinforcement bars",
      "Read rebar drawings and BBS",
      "Work in foundation and slab areas",
    ],
    requirements: [
      "3+ years experience in heavy civil projects",
      "Ability to read BBS (Bar Bending Schedule)",
    ],
    skills: ["Rebar Cutting", "Bar Bending", "BBS Reading", "Tying"],
    benefits: ["Food", "Accommodation", "Overtime"],
    openings: 30,
    applicants: 123,
    views: 1820,
    postedDate: "2026-05-21",
    urgent: true,
    verified: true,
    status: "active",
  },
  {
    id: "job-012",
    title: "Painter - Luxury Villas",
    slug: "painter-luxury-villas-prestige",
    companyId: "prestige-group",
    companyName: "Prestige Group",
    companyLogo: "/images/clients/prestige-group.svg",
    category: "painter",
    jobType: "Project-based",
    experienceLevel: "Mid Level",
    location: { city: "Bengaluru", state: "Karnataka", onSite: true },
    salary: { min: 22000, max: 38000, period: "monthly", currency: "INR" },
    description:
      "Skilled painters for premium villa project. Interior, exterior, and textured finishes required.",
    responsibilities: [
      "Apply interior and exterior paints",
      "Texture finishes and decorative coatings",
      "Surface preparation and putty work",
    ],
    requirements: [
      "4+ years painting experience",
      "Experience with premium finishes (Asian Paints Royale, etc.)",
    ],
    skills: ["Interior Paint", "Exterior Paint", "Texture", "Surface Prep"],
    openings: 18,
    applicants: 76,
    views: 1120,
    postedDate: "2026-05-13",
    verified: true,
    status: "active",
  },
]

// ============================================
// HELPERS
// ============================================
export const FEATURED_JOBS = JOBS.filter((j) => j.featured)
export const URGENT_JOBS = JOBS.filter((j) => j.urgent)
export const LATEST_JOBS = [...JOBS]
  .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
  .slice(0, 8)

export const getJobBySlug = (slug: string) => JOBS.find((j) => j.slug === slug)
export const getJobsByCategory = (category: string) =>
  JOBS.filter((j) => j.category === category)
export const getJobsByCompany = (companyId: string) =>
  JOBS.filter((j) => j.companyId === companyId)
export const getJobsByCity = (city: string) =>
  JOBS.filter((j) => j.location.city.toLowerCase() === city.toLowerCase())

export const JOB_STATS = {
  total: JOBS.length,
  active: JOBS.filter((j) => j.status === "active").length,
  urgent: URGENT_JOBS.length,
  featured: FEATURED_JOBS.length,
  internships: JOBS.filter((j) => j.jobType === "Internship").length,
}