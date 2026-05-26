export interface Company {
  id: string
  name: string
  slug: string
  logo: string
  coverImage?: string
  tagline: string
  about: string
  industry: string[] // matches INDUSTRIES slug
  companyType: "Developer" | "Contractor" | "EPC" | "Infrastructure" | "Consultancy"
  size: "1-50" | "51-200" | "201-500" | "501-1000" | "1000-5000" | "5000+"
  founded: number
  headquarters: {
    city: string
    state: string
    country: string
  }
  branches?: { city: string; state: string }[]
  website?: string
  email: string
  phone: string
  socials?: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
  specialties: string[]
  certifications?: string[]
  awards?: string[]
  activeJobs: number
  activeProjects: number
  totalHires: number
  rating: number
  reviewCount: number
  followers: number
  verified: boolean
  featured?: boolean
  premium?: boolean
  joinedDate: string
}

export const COMPANIES: Company[] = [
  {
    id: "lt-construction",
    name: "L&T Construction",
    slug: "lt-construction",
    logo: "/images/clients/lt-construction.svg",
    coverImage: "/images/companies/lt-cover.jpg",
    tagline: "India's Largest Construction & EPC Conglomerate",
    about:
      "L&T Construction is India's largest construction services provider with over 8 decades of experience. We deliver integrated EPC solutions across buildings, infrastructure, heavy civil, power, and metallurgical sectors.",
    industry: ["commercial", "industrial", "road-highway", "metro-railway", "bridge"],
    companyType: "EPC",
    size: "5000+",
    founded: 1938,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    branches: [
      { city: "Chennai", state: "Tamil Nadu" },
      { city: "Delhi", state: "Delhi" },
      { city: "Bengaluru", state: "Karnataka" },
      { city: "Hyderabad", state: "Telangana" },
      { city: "Ahmedabad", state: "Gujarat" },
    ],
    website: "https://www.ltconstruction.com",
    email: "careers@ltconstruction.com",
    phone: "+91 22 6752 5656",
    socials: {
      linkedin: "https://linkedin.com/company/larsen-toubro",
      twitter: "https://twitter.com/larsentoubro",
    },
    specialties: [
      "Mega Infrastructure",
      "Metro Rail",
      "Highways",
      "Heavy Civil",
      "Power Transmission",
    ],
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    awards: [
      "Best Infrastructure Company - ICC 2024",
      "CIDC Vishwakarma Award 2023",
    ],
    activeJobs: 142,
    activeProjects: 67,
    totalHires: 8420,
    rating: 4.6,
    reviewCount: 1247,
    followers: 18420,
    verified: true,
    featured: true,
    premium: true,
    joinedDate: "2022-01-15",
  },
  {
    id: "tata-projects",
    name: "Tata Projects",
    slug: "tata-projects",
    logo: "/images/clients/tata-projects.svg",
    coverImage: "/images/companies/tata-cover.jpg",
    tagline: "Building Tomorrow's Infrastructure",
    about:
      "Tata Projects is one of India's fastest growing industrial infrastructure companies. We execute complex projects across power, transmission, civil construction, industrial systems, urban infrastructure, and oil & gas.",
    industry: ["industrial", "commercial", "metro-railway", "solar-renewable"],
    companyType: "EPC",
    size: "5000+",
    founded: 1979,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    branches: [
      { city: "Pune", state: "Maharashtra" },
      { city: "Delhi", state: "Delhi" },
      { city: "Bengaluru", state: "Karnataka" },
    ],
    website: "https://www.tataprojects.com",
    email: "careers@tataprojects.com",
    phone: "+91 22 6661 6500",
    socials: {
      linkedin: "https://linkedin.com/company/tata-projects",
    },
    specialties: [
      "Power EPC",
      "Urban Infrastructure",
      "Industrial Systems",
      "Smart Cities",
      "Oil & Gas",
    ],
    certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    activeJobs: 98,
    activeProjects: 42,
    totalHires: 5230,
    rating: 4.5,
    reviewCount: 892,
    followers: 12340,
    verified: true,
    featured: true,
    premium: true,
    joinedDate: "2022-03-20",
  },
  {
    id: "shapoorji-pallonji",
    name: "Shapoorji Pallonji",
    slug: "shapoorji-pallonji",
    logo: "/images/clients/shapoorji-pallonji.svg",
    coverImage: "/images/companies/sp-cover.jpg",
    tagline: "Engineering Excellence Since 1865",
    about:
      "Shapoorji Pallonji is one of India's oldest and most respected construction firms. Specializing in complex residential, commercial, and industrial projects across India and the Middle East.",
    industry: ["residential", "commercial", "industrial"],
    companyType: "Contractor",
    size: "5000+",
    founded: 1865,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    branches: [
      { city: "Pune", state: "Maharashtra" },
      { city: "Bengaluru", state: "Karnataka" },
      { city: "Delhi", state: "Delhi" },
    ],
    website: "https://www.shapoorjipallonji.com",
    email: "hr@shapoorjipallonji.com",
    phone: "+91 22 6749 8000",
    specialties: [
      "Luxury Residential",
      "Commercial Towers",
      "Heritage Restoration",
      "Industrial Construction",
    ],
    activeJobs: 87,
    activeProjects: 38,
    totalHires: 4150,
    rating: 4.4,
    reviewCount: 678,
    followers: 9870,
    verified: true,
    featured: true,
    premium: true,
    joinedDate: "2022-05-10",
  },
  {
    id: "lodha-group",
    name: "Lodha Group",
    slug: "lodha-group",
    logo: "/images/clients/lodha-group.svg",
    coverImage: "/images/companies/lodha-cover.jpg",
    tagline: "Building a Better Life",
    about:
      "Lodha Group is India's largest real estate developer by sales. We create iconic residential and commercial spaces across Mumbai, Pune, Bengaluru, and London.",
    industry: ["residential", "commercial"],
    companyType: "Developer",
    size: "1000-5000",
    founded: 1980,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    branches: [
      { city: "Pune", state: "Maharashtra" },
      { city: "Bengaluru", state: "Karnataka" },
    ],
    website: "https://www.lodhagroup.in",
    email: "careers@lodhagroup.in",
    phone: "+91 22 6133 4400",
    specialties: [
      "Luxury Residential",
      "Premium Townships",
      "Commercial Spaces",
      "Mixed-Use Developments",
    ],
    activeJobs: 64,
    activeProjects: 28,
    totalHires: 2840,
    rating: 4.3,
    reviewCount: 542,
    followers: 8650,
    verified: true,
    featured: true,
    premium: true,
    joinedDate: "2022-07-22",
  },
  {
    id: "godrej-properties",
    name: "Godrej Properties",
    slug: "godrej-properties",
    logo: "/images/clients/godrej-properties.svg",
    coverImage: "/images/companies/godrej-cover.jpg",
    tagline: "Designing for Life",
    about:
      "Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry. Operating across 12 cities in India.",
    industry: ["residential", "commercial"],
    companyType: "Developer",
    size: "1000-5000",
    founded: 1990,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    website: "https://www.godrejproperties.com",
    email: "careers@godrejproperties.com",
    phone: "+91 22 6169 8500",
    specialties: [
      "Sustainable Buildings",
      "Township Development",
      "Premium Residences",
    ],
    certifications: ["IGBC Green Homes", "LEED Certified Projects"],
    activeJobs: 52,
    activeProjects: 31,
    totalHires: 1980,
    rating: 4.5,
    reviewCount: 487,
    followers: 7320,
    verified: true,
    featured: true,
    premium: true,
    joinedDate: "2022-09-05",
  },
  {
    id: "brigade-group",
    name: "Brigade Group",
    slug: "brigade-group",
    logo: "/images/clients/brigade-group.svg",
    coverImage: "/images/companies/brigade-cover.jpg",
    tagline: "Building Positive Experiences",
    about:
      "Brigade Group is a leading property developer based in Bengaluru with projects across South India. Award-winning portfolio includes residential, commercial, retail, and hospitality.",
    industry: ["residential", "commercial"],
    companyType: "Developer",
    size: "501-1000",
    founded: 1986,
    headquarters: { city: "Bengaluru", state: "Karnataka", country: "India" },
    branches: [
      { city: "Chennai", state: "Tamil Nadu" },
      { city: "Hyderabad", state: "Telangana" },
      { city: "Kochi", state: "Kerala" },
    ],
    website: "https://www.brigadegroup.com",
    email: "careers@brigadegroup.com",
    phone: "+91 80 4137 9200",
    specialties: [
      "South India Real Estate",
      "Commercial Office Spaces",
      "Hospitality Projects",
      "Retail Malls",
    ],
    activeJobs: 43,
    activeProjects: 22,
    totalHires: 1450,
    rating: 4.4,
    reviewCount: 376,
    followers: 5840,
    verified: true,
    featured: true,
    premium: true,
    joinedDate: "2022-11-18",
  },
  {
    id: "afcons",
    name: "Afcons Infrastructure",
    slug: "afcons",
    logo: "/images/clients/afcons.svg",
    coverImage: "/images/companies/afcons-cover.jpg",
    tagline: "Engineering Excellence Across Borders",
    about:
      "Afcons Infrastructure is a leading infrastructure construction company in India and globally. Specializes in marine, urban infrastructure, metro & railways, hydro & underground, and oil & gas.",
    industry: ["metro-railway", "bridge", "road-highway"],
    companyType: "Infrastructure",
    size: "1000-5000",
    founded: 1959,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    website: "https://www.afcons.com",
    email: "careers@afcons.com",
    phone: "+91 22 6719 1000",
    specialties: [
      "Metro Construction",
      "Marine Projects",
      "Underground Tunneling",
      "Bridge Construction",
      "International Projects",
    ],
    awards: ["CIDC Vishwakarma Award", "EPC World Awards"],
    activeJobs: 76,
    activeProjects: 34,
    totalHires: 3240,
    rating: 4.5,
    reviewCount: 624,
    followers: 6890,
    verified: true,
    featured: true,
    premium: true,
    joinedDate: "2023-01-12",
  },
  {
    id: "hcc",
    name: "HCC",
    slug: "hcc",
    logo: "/images/clients/hcc.svg",
    coverImage: "/images/companies/hcc-cover.jpg",
    tagline: "Building Infrastructure for India",
    about:
      "Hindustan Construction Company (HCC) is one of India's leading infrastructure companies with over 95 years of expertise in transportation, power, water, and special projects.",
    industry: ["bridge", "road-highway", "industrial"],
    companyType: "Infrastructure",
    size: "1000-5000",
    founded: 1926,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    website: "https://www.hccindia.com",
    email: "careers@hccindia.com",
    phone: "+91 22 2575 1000",
    specialties: [
      "Hydropower Projects",
      "Nuclear Plants",
      "Bridges & Flyovers",
      "Roads & Highways",
      "Marine Works",
    ],
    activeJobs: 48,
    activeProjects: 19,
    totalHires: 2670,
    rating: 4.2,
    reviewCount: 423,
    followers: 4560,
    verified: true,
    featured: true,
    joinedDate: "2023-02-28",
  },
  {
    id: "ncc-limited",
    name: "NCC Limited",
    slug: "ncc-limited",
    logo: "/images/clients/ncc.svg",
    coverImage: "/images/companies/ncc-cover.jpg",
    tagline: "Diversified Infrastructure Solutions",
    about:
      "NCC Limited is a leading construction company in India with diversified operations across buildings, transportation, water & environment, electrical, irrigation, mining, oil & gas, and railways.",
    industry: ["road-highway", "industrial", "commercial", "water-sewage"],
    companyType: "Infrastructure",
    size: "1000-5000",
    founded: 1978,
    headquarters: { city: "Hyderabad", state: "Telangana", country: "India" },
    website: "https://www.ncclimited.com",
    email: "careers@ncclimited.com",
    phone: "+91 40 2329 5550",
    specialties: [
      "Highway Construction",
      "Water Treatment Plants",
      "Industrial Construction",
      "Mining Infrastructure",
    ],
    activeJobs: 56,
    activeProjects: 26,
    totalHires: 2120,
    rating: 4.3,
    reviewCount: 387,
    followers: 4120,
    verified: true,
    featured: true,
    joinedDate: "2023-04-15",
  },
  {
    id: "prestige-group",
    name: "Prestige Group",
    slug: "prestige-group",
    logo: "/images/clients/prestige-group.svg",
    coverImage: "/images/companies/prestige-cover.jpg",
    tagline: "Defining Quality in Real Estate",
    about:
      "Prestige Group is a Bengaluru-based real estate developer with a portfolio spanning residential, commercial, retail, hospitality, and services sectors across South India.",
    industry: ["residential", "commercial"],
    companyType: "Developer",
    size: "501-1000",
    founded: 1986,
    headquarters: { city: "Bengaluru", state: "Karnataka", country: "India" },
    website: "https://www.prestigeconstructions.com",
    email: "careers@prestigeconstructions.com",
    phone: "+91 80 2521 9100",
    specialties: [
      "Luxury Residential",
      "Premium Commercial",
      "Retail Malls",
      "Hospitality",
    ],
    activeJobs: 39,
    activeProjects: 24,
    totalHires: 1340,
    rating: 4.4,
    reviewCount: 298,
    followers: 5230,
    verified: true,
    featured: true,
    joinedDate: "2023-06-08",
  },
  {
    id: "kalpataru",
    name: "Kalpataru Projects",
    slug: "kalpataru",
    logo: "/images/clients/kalpataru.svg",
    coverImage: "/images/companies/kalpataru-cover.jpg",
    tagline: "Powering Tomorrow",
    about:
      "Kalpataru Projects International is a leading EPC company in power transmission & distribution, buildings & factories, oil & gas pipelines, railways, and urban infrastructure.",
    industry: ["industrial", "solar-renewable"],
    companyType: "EPC",
    size: "1000-5000",
    founded: 1981,
    headquarters: { city: "Mumbai", state: "Maharashtra", country: "India" },
    website: "https://www.kalpatarupower.com",
    email: "careers@kalpatarupower.com",
    phone: "+91 22 3064 5000",
    specialties: [
      "Power Transmission",
      "Pipelines",
      "Industrial Buildings",
      "Railway Infrastructure",
    ],
    activeJobs: 41,
    activeProjects: 18,
    totalHires: 1820,
    rating: 4.3,
    reviewCount: 245,
    followers: 3780,
    verified: true,
    featured: true,
    joinedDate: "2023-08-22",
  },
  {
    id: "ahluwalia-contracts",
    name: "Ahluwalia Contracts",
    slug: "ahluwalia-contracts",
    logo: "/images/clients/ahluwalia-contracts.svg",
    coverImage: "/images/companies/ahluwalia-cover.jpg",
    tagline: "Building India's Iconic Structures",
    about:
      "Ahluwalia Contracts is a leading construction company specializing in turnkey solutions for residential, commercial, institutional, and infrastructure projects across India.",
    industry: ["residential", "commercial", "industrial"],
    companyType: "Contractor",
    size: "501-1000",
    founded: 1965,
    headquarters: { city: "Delhi", state: "Delhi", country: "India" },
    website: "https://www.acilnet.com",
    email: "careers@acilnet.com",
    phone: "+91 11 4128 8000",
    specialties: [
      "High-Rise Buildings",
      "Institutional Projects",
      "Hospitals",
      "Educational Institutions",
    ],
    activeJobs: 32,
    activeProjects: 16,
    totalHires: 1120,
    rating: 4.2,
    reviewCount: 178,
    followers: 2890,
    verified: true,
    joinedDate: "2023-10-14",
  },
]

// ============================================
// HELPERS
// ============================================
export const FEATURED_COMPANIES = COMPANIES.filter((c) => c.featured)
export const PREMIUM_COMPANIES = COMPANIES.filter((c) => c.premium)
export const VERIFIED_COMPANIES = COMPANIES.filter((c) => c.verified)

export const getCompanyBySlug = (slug: string) =>
  COMPANIES.find((c) => c.slug === slug)
export const getCompaniesByType = (type: Company["companyType"]) =>
  COMPANIES.filter((c) => c.companyType === type)
export const getCompaniesByIndustry = (industry: string) =>
  COMPANIES.filter((c) => c.industry.includes(industry))
export const getCompaniesByCity = (city: string) =>
  COMPANIES.filter(
    (c) => c.headquarters.city.toLowerCase() === city.toLowerCase()
  )

export const COMPANY_STATS = {
  total: COMPANIES.length,
  verified: VERIFIED_COMPANIES.length,
  premium: PREMIUM_COMPANIES.length,
  totalJobs: COMPANIES.reduce((sum, c) => sum + c.activeJobs, 0),
  totalProjects: COMPANIES.reduce((sum, c) => sum + c.activeProjects, 0),
  totalHires: COMPANIES.reduce((sum, c) => sum + c.totalHires, 0),
}