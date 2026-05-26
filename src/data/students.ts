export interface Student {
  id: string
  name: string
  slug: string
  avatar: string
  headline: string // e.g., "Final Year Civil Engineering Student"
  email: string
  phone: string
  location: {
    city: string
    state: string
    willingToRelocate: boolean
  }
  education: {
    degree: string
    specialization: string
    institute: string
    universityBoard?: string
    startYear: number
    endYear: number // expected
    currentYear: number // 1, 2, 3, 4 etc
    cgpa?: number
    percentage?: number
    status: "Pursuing" | "Completed"
  }
  previousEducation?: {
    qualification: string
    institute: string
    year: number
    percentage?: number
  }[]
  skills: string[]
  technicalSkills: string[] // software, tools
  languages: string[]
  about: string
  certifications: {
    name: string
    issuer: string
    year: number
    verified: boolean
  }[]
  internships?: {
    role: string
    company: string
    duration: string
    description?: string
    certificate?: boolean
  }[]
  projects?: {
    title: string
    description: string
    technologies?: string[]
    year: number
  }[]
  achievements?: string[]
  interests: string[] // job interests / categories
  lookingFor: ("Internship" | "Full-time" | "Part-time" | "Apprenticeship")[]
  availableFrom: string // ISO date
  expectedStipend?: {
    min: number
    max: number
    period: "monthly"
    currency: "INR"
  }
  expectedSalary?: {
    min: number
    max: number
    period: "monthly"
    currency: "INR"
  }
  applicationsCount: number
  savedJobsCount: number
  placementsCount: number
  profileViews: number
  profileCompletion: number // percentage
  resumeUploaded: boolean
  verified: boolean
  featured?: boolean
  joinedDate: string
}

export const STUDENTS: Student[] = [
  {
    id: "std-001",
    name: "Priya Sharma",
    slug: "priya-sharma-student",
    avatar: "/images/students/priya-sharma.jpg",
    headline: "Final Year B.Tech Civil Engineering | Nirma University",
    email: "priya.sharma@nirmauni.ac.in",
    phone: "+91 98765 12345",
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      willingToRelocate: true,
    },
    education: {
      degree: "B.Tech",
      specialization: "Civil Engineering",
      institute: "Nirma University",
      universityBoard: "Gujarat Technological University",
      startYear: 2022,
      endYear: 2026,
      currentYear: 4,
      cgpa: 8.7,
      status: "Pursuing",
    },
    previousEducation: [
      {
        qualification: "12th (Science - PCM)",
        institute: "Delhi Public School, Ahmedabad",
        year: 2022,
        percentage: 89.4,
      },
    ],
    skills: [
      "Structural Analysis",
      "Site Planning",
      "Quantity Surveying",
      "Project Management",
      "Communication",
      "Leadership",
    ],
    technicalSkills: ["AutoCAD", "Revit", "STAAD Pro", "MS Project", "Excel"],
    languages: ["English", "Hindi", "Gujarati"],
    about:
      "Final year Civil Engineering student passionate about sustainable construction and smart infrastructure. Completed industrial internship at Tata Projects with strong site execution exposure. Active member of college Civil Engineering Society.",
    certifications: [
      {
        name: "AutoCAD Civil 3D",
        issuer: "Autodesk",
        year: 2024,
        verified: true,
      },
      {
        name: "Revit Architecture - Beginner",
        issuer: "Coursera",
        year: 2024,
        verified: true,
      },
    ],
    internships: [
      {
        role: "Site Engineer Intern",
        company: "Tata Projects",
        duration: "Jun 2024 - Dec 2024 (6 months)",
        description:
          "Worked on commercial complex project. Learned site execution, quality checks, and DPR preparation.",
        certificate: true,
      },
    ],
    projects: [
      {
        title: "Earthquake-Resistant Building Design",
        description:
          "Final year project on seismic analysis of G+10 RCC structure using STAAD Pro.",
        technologies: ["STAAD Pro", "AutoCAD", "Excel"],
        year: 2025,
      },
    ],
    achievements: [
      "1st prize in Civil Engineering Project Expo 2024",
      "Department topper for 3 consecutive semesters",
      "Volunteer at Habitat for Humanity",
    ],
    interests: ["civil-engineer", "site-engineer"],
    lookingFor: ["Full-time"],
    availableFrom: "2026-06-01",
    expectedSalary: {
      min: 25000,
      max: 40000,
      period: "monthly",
      currency: "INR",
    },
    applicationsCount: 12,
    savedJobsCount: 23,
    placementsCount: 0,
    profileViews: 248,
    profileCompletion: 92,
    resumeUploaded: true,
    verified: true,
    featured: true,
    joinedDate: "2024-09-15",
  },
  {
    id: "std-002",
    name: "Arjun Mehta",
    slug: "arjun-mehta-student",
    avatar: "/images/students/arjun-mehta.jpg",
    headline: "B.Tech Civil Final Year | VJTI Mumbai",
    email: "arjun.mehta@vjti.org.in",
    phone: "+91 98765 23456",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      willingToRelocate: true,
    },
    education: {
      degree: "B.Tech",
      specialization: "Civil Engineering",
      institute: "VJTI Mumbai",
      universityBoard: "Mumbai University",
      startYear: 2022,
      endYear: 2026,
      currentYear: 4,
      cgpa: 9.1,
      status: "Pursuing",
    },
    skills: [
      "Structural Design",
      "Construction Management",
      "BIM",
      "Research",
      "Analytical Thinking",
    ],
    technicalSkills: ["AutoCAD", "Revit", "ETABS", "Primavera", "MATLAB"],
    languages: ["English", "Hindi", "Marathi"],
    about:
      "VJTI Civil Engineering student with strong academic record and keen interest in structural engineering. Looking for opportunities in design or site engineering roles with top construction firms.",
    certifications: [
      {
        name: "Revit Structure",
        issuer: "Autodesk",
        year: 2024,
        verified: true,
      },
      {
        name: "BIM Specialist",
        issuer: "BIM Heroes",
        year: 2025,
        verified: true,
      },
    ],
    internships: [
      {
        role: "Design Intern",
        company: "L&T Construction",
        duration: "May 2024 - Jul 2024 (2 months)",
        certificate: true,
      },
    ],
    achievements: [
      "Won inter-college BIM competition 2024",
      "Published paper on green building materials",
    ],
    interests: ["civil-engineer", "architect"],
    lookingFor: ["Full-time"],
    availableFrom: "2026-07-01",
    expectedSalary: {
      min: 30000,
      max: 55000,
      period: "monthly",
      currency: "INR",
    },
    applicationsCount: 8,
    savedJobsCount: 15,
    placementsCount: 0,
    profileViews: 312,
    profileCompletion: 95,
    resumeUploaded: true,
    verified: true,
    featured: true,
    joinedDate: "2024-08-20",
  },
  {
    id: "std-003",
    name: "Sneha Reddy",
    slug: "sneha-reddy-student",
    avatar: "/images/students/sneha-reddy.jpg",
    headline: "Diploma in Construction Management | 3rd Year",
    email: "sneha.reddy@gphyd.ac.in",
    phone: "+91 98765 34567",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      willingToRelocate: true,
    },
    education: {
      degree: "Diploma",
      specialization: "Construction Management",
      institute: "Government Polytechnic Hyderabad",
      startYear: 2023,
      endYear: 2026,
      currentYear: 3,
      percentage: 84.5,
      status: "Pursuing",
    },
    skills: [
      "Site Supervision Basics",
      "Material Management",
      "Quality Control",
      "Communication",
    ],
    technicalSkills: ["AutoCAD", "MS Office", "SketchUp"],
    languages: ["Telugu", "English", "Hindi"],
    about:
      "Diploma student passionate about breaking gender barriers in the construction industry. Looking for site engineer trainee or junior supervisor roles to start my career.",
    certifications: [
      {
        name: "AutoCAD 2D & 3D",
        issuer: "CADD Centre",
        year: 2024,
        verified: true,
      },
    ],
    internships: [
      {
        role: "Site Trainee",
        company: "GMR Infrastructure",
        duration: "May 2025 - Jun 2025 (1 month)",
        certificate: true,
      },
    ],
    achievements: [
      "Best Female Student Award 2024",
      "Active member of Women in Construction club",
    ],
    interests: ["site-supervisor", "site-engineer"],
    lookingFor: ["Internship", "Full-time"],
    availableFrom: "2026-05-01",
    expectedSalary: {
      min: 18000,
      max: 28000,
      period: "monthly",
      currency: "INR",
    },
    applicationsCount: 15,
    savedJobsCount: 32,
    placementsCount: 0,
    profileViews: 187,
    profileCompletion: 86,
    resumeUploaded: true,
    verified: true,
    joinedDate: "2025-01-10",
  },
  {
    id: "std-004",
    name: "Rohan Verma",
    slug: "rohan-verma-student",
    avatar: "/images/students/rohan-verma.jpg",
    headline: "M.Tech Structural Engineering | IIT Roorkee",
    email: "rohan.verma@iitr.ac.in",
    phone: "+91 98765 45678",
    location: {
      city: "Roorkee",
      state: "Uttarakhand",
      willingToRelocate: true,
    },
    education: {
      degree: "M.Tech",
      specialization: "Structural Engineering",
      institute: "IIT Roorkee",
      startYear: 2024,
      endYear: 2026,
      currentYear: 2,
      cgpa: 8.9,
      status: "Pursuing",
    },
    previousEducation: [
      {
        qualification: "B.Tech Civil Engineering",
        institute: "NIT Trichy",
        year: 2024,
        percentage: 86.2,
      },
    ],
    skills: [
      "Advanced Structural Analysis",
      "Seismic Design",
      "Research",
      "Steel Design",
      "Concrete Design",
    ],
    technicalSkills: ["STAAD Pro", "ETABS", "SAP2000", "ANSYS", "Python", "MATLAB"],
    languages: ["English", "Hindi"],
    about:
      "M.Tech student specializing in structural engineering with focus on seismic-resistant design. Looking for design engineer or structural engineer positions at top consultancies or developers.",
    certifications: [
      {
        name: "Advanced ETABS",
        issuer: "CSI",
        year: 2024,
        verified: true,
      },
      {
        name: "Earthquake Engineering",
        issuer: "NPTEL",
        year: 2023,
        verified: true,
      },
    ],
    projects: [
      {
        title: "Performance-Based Seismic Design of Tall Buildings",
        description: "M.Tech thesis on performance-based design methodology.",
        technologies: ["ETABS", "Python", "MATLAB"],
        year: 2025,
      },
    ],
    achievements: [
      "GATE 2024 - 99.2 percentile",
      "Best paper award at IIT Civil Engg Conference 2024",
    ],
    interests: ["civil-engineer", "architect"],
    lookingFor: ["Full-time"],
    availableFrom: "2026-07-01",
    expectedSalary: {
      min: 60000,
      max: 100000,
      period: "monthly",
      currency: "INR",
    },
    applicationsCount: 5,
    savedJobsCount: 11,
    placementsCount: 0,
    profileViews: 420,
    profileCompletion: 97,
    resumeUploaded: true,
    verified: true,
    featured: true,
    joinedDate: "2024-10-05",
  },
  {
    id: "std-005",
    name: "Karthik Subramanian",
    slug: "karthik-subramanian-student",
    avatar: "/images/students/karthik-subramanian.jpg",
    headline: "B.Arch Final Year | School of Planning & Architecture",
    email: "karthik.s@spa.ac.in",
    phone: "+91 98765 56789",
    location: {
      city: "Delhi",
      state: "Delhi",
      willingToRelocate: true,
    },
    education: {
      degree: "B.Arch",
      specialization: "Architecture",
      institute: "School of Planning and Architecture, Delhi",
      startYear: 2021,
      endYear: 2026,
      currentYear: 5,
      cgpa: 8.4,
      status: "Pursuing",
    },
    skills: [
      "Architectural Design",
      "3D Modeling",
      "Sustainable Design",
      "Concept Development",
      "Presentation",
    ],
    technicalSkills: ["AutoCAD", "Revit", "Rhino", "SketchUp", "Lumion", "Photoshop"],
    languages: ["English", "Hindi", "Tamil"],
    about:
      "B.Arch student passionate about sustainable and biophilic design. Looking for junior architect or design intern roles at progressive architecture firms.",
    certifications: [
      {
        name: "LEED Green Associate",
        issuer: "USGBC",
        year: 2024,
        verified: true,
      },
    ],
    internships: [
      {
        role: "Architecture Intern",
        company: "Morphogenesis",
        duration: "Jan 2024 - Apr 2024",
        certificate: true,
      },
    ],
    projects: [
      {
        title: "Net-Zero Office Complex - Bengaluru",
        description: "Conceptual design of a net-zero energy office tower.",
        technologies: ["Revit", "Lumion", "EnergyPlus"],
        year: 2025,
      },
    ],
    interests: ["architect"],
    lookingFor: ["Full-time", "Internship"],
    availableFrom: "2026-06-15",
    expectedSalary: {
      min: 28000,
      max: 45000,
      period: "monthly",
      currency: "INR",
    },
    applicationsCount: 9,
    savedJobsCount: 18,
    placementsCount: 0,
    profileViews: 276,
    profileCompletion: 90,
    resumeUploaded: true,
    verified: true,
    joinedDate: "2024-11-22",
  },
  {
    id: "std-006",
    name: "Aisha Khan",
    slug: "aisha-khan-student",
    avatar: "/images/students/aisha-khan.jpg",
    headline: "ITI Electrician | 2nd Year",
    email: "aisha.khan@itimumbai.in",
    phone: "+91 98765 67890",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      willingToRelocate: false,
    },
    education: {
      degree: "ITI",
      specialization: "Electrician",
      institute: "Government ITI Mumbai",
      startYear: 2024,
      endYear: 2026,
      currentYear: 2,
      percentage: 78.6,
      status: "Pursuing",
    },
    skills: [
      "Wiring",
      "Conduit Work",
      "Panel Installation Basics",
      "Safety Awareness",
    ],
    technicalSkills: ["Basic Multi-meter", "Hand Tools"],
    languages: ["Hindi", "English", "Marathi", "Urdu"],
    about:
      "ITI Electrician student looking for apprenticeship and entry-level opportunities. Eager to learn industrial wiring and join a construction company.",
    certifications: [],
    interests: ["electrician"],
    lookingFor: ["Apprenticeship", "Internship"],
    availableFrom: "2026-04-01",
    expectedStipend: {
      min: 10000,
      max: 18000,
      period: "monthly",
      currency: "INR",
    },
    applicationsCount: 18,
    savedJobsCount: 24,
    placementsCount: 0,
    profileViews: 156,
    profileCompletion: 75,
    resumeUploaded: true,
    verified: true,
    joinedDate: "2025-02-08",
  },
]

// ============================================
// HELPERS
// ============================================
export const FEATURED_STUDENTS = STUDENTS.filter((s) => s.featured)

export const getStudentBySlug = (slug: string) =>
  STUDENTS.find((s) => s.slug === slug)
export const getStudentsByInstitute = (institute: string) =>
  STUDENTS.filter((s) =>
    s.education.institute.toLowerCase().includes(institute.toLowerCase())
  )
export const getStudentsByCity = (city: string) =>
  STUDENTS.filter((s) => s.location.city.toLowerCase() === city.toLowerCase())
export const getStudentsLookingFor = (type: Student["lookingFor"][number]) =>
  STUDENTS.filter((s) => s.lookingFor.includes(type))

export const STUDENT_STATS = {
  total: STUDENTS.length,
  verified: STUDENTS.filter((s) => s.verified).length,
  withResume: STUDENTS.filter((s) => s.resumeUploaded).length,
  lookingForInternship: STUDENTS.filter((s) =>
    s.lookingFor.includes("Internship")
  ).length,
  lookingForFullTime: STUDENTS.filter((s) =>
    s.lookingFor.includes("Full-time")
  ).length,
}