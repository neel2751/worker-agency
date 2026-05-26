import { JobRole } from "@/types";

export const CAREERS: JobRole[] = [
  {
    slug: "senior-integration-architect",
    title: "Senior Integration Architect",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Lead enterprise-scale integration architectures for Fortune 500 clients.",
    responsibilities: ["Design Workday integration landscapes", "Lead Studio development", "Mentor junior devs"],
    requirements: ["7+ years Workday integration experience", "Advanced Studio certification", "Excellent communication"],
    benefits: ["Competitive salary", "Remote work", "Health/Dental"]
  },
  {
    slug: "workday-studio-developer",
    title: "Workday Studio Developer",
    department: "Engineering",
    location: "New York / Hybrid",
    type: "Full-time",
    description: "Develop complex Workday Studio assemblies.",
    responsibilities: ["Build Studio assemblies", "XSLT transformations", "Unit testing"],
    requirements: ["3+ years Studio experience", "Java proficiency", "Integration Core cert"],
    benefits: ["Competitive salary", "Hybrid flexibility", "401k matching"]
  },
  {
    slug: "global-payroll-specialist",
    title: "Global Payroll Integration Specialist",
    department: "Consulting",
    location: "London / Hybrid",
    type: "Full-time",
    description: "Implement complex PECI and PICOF integrations for global clients.",
    responsibilities: ["Configure PECI extracts", "Map earnings/deductions", "Lead parallel testing"],
    requirements: ["5+ years Workday Payroll", "Global payroll vendor experience (ADP/NGA)"],
    benefits: ["Bonus structure", "Pension plan", "Health insurance"]
  },
  {
    slug: "managed-services-consultant",
    title: "Managed Services Consultant",
    department: "Support",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Provide tier 3 support and minor enhancements for live integrations.",
    responsibilities: ["Monitor integrations", "Resolve break/fix tickets", "Release testing"],
    requirements: ["2+ years Workday experience", "Strong troubleshooting skills", "ITIL awareness"],
    benefits: ["Flexible hours", "Remote work", "Learning budget"]
  },
  {
    slug: "enterprise-sales-director",
    title: "Enterprise Sales Director",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Drive new business acquisition for Workday integration consulting services.",
    responsibilities: ["Lead generation", "Complex deal negotiation", "Account management"],
    requirements: ["10+ years enterprise software/services sales", "Workday ecosystem knowledge"],
    benefits: ["Uncapped commission", "Remote work", "Executive benefits"]
  },
  {
    slug: "api-engineer",
    title: "API Middleware Engineer",
    department: "Engineering",
    location: "Remote (US/Canada)",
    type: "Full-time",
    description: "Build middleware layers connecting Workday to third-party systems.",
    responsibilities: ["Develop REST/SOAP APIs", "Configure MuleSoft/Boomi", "Security implementations"],
    requirements: ["5+ years API development", "MuleSoft/Boomi experience", "Workday API knowledge"],
    benefits: ["Competitive salary", "Remote work", "Tech stipend"]
  },
  {
    slug: "security-auditor",
    title: "Workday Security Auditor",
    department: "Consulting",
    location: "New York",
    type: "Full-time",
    description: "Conduct deep ISU audits and security redesigns.",
    responsibilities: ["Audit tenant security", "Configure ISSGs", "Ensure SOC2 compliance"],
    requirements: ["Workday Security Pro cert", "3+ years security experience", "CISSP preferred"],
    benefits: ["Bonus structure", "Office perks", "Health/Dental"]
  },
  {
    slug: "engagement-manager",
    title: "Engagement Manager",
    department: "Consulting",
    location: "Remote (UK/Europe)",
    type: "Full-time",
    description: "Manage large-scale integration delivery projects.",
    responsibilities: ["Project planning", "Budget management", "Stakeholder communication"],
    requirements: ["PMP certification", "5+ years managing Workday projects", "Client-facing skills"],
    benefits: ["Competitive salary", "Travel opportunities", "Pension plan"]
  }
];
