export interface CaseStudy {
  slug: string
  title: string
  client: string
  logo: string
  industry: string
  challenge: string
  solution: string
  results: string
  metrics: { label: string; value: string }[]
  tags: string[]
  image: string
  publishedAt: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "top-50-enr-gc-payroll-transformation",
    title: "Top 50 ENR GC: 45% Reduction in Payroll Close Time",
    client: "Meridian Construction Group",
    logo: "/images/clients/logo-1.svg",
    industry: "General Contracting",
    challenge: "$2.8B revenue general contractor with 3,500 employees across 12 states struggled with union and non-union payroll complexity, certified payroll delays, and disconnected project accounting between Procore and Workday.",
    solution: "Integrated Procore with Workday Financials for real-time job costing, automated certified payroll to LCPtracker, and built union fringe automation covering 28 IBEW and UA locals. Implemented multi-company architecture for 2 operating companies.",
    results: "Reduced payroll close time from 3 days to 1.5 days, eliminated manual certified payroll preparation, and achieved real-time project P&L visibility across all active jobs.",
    metrics: [
      { label: "Payroll Close Time", value: "-45%" },
      { label: "Union Locals", value: "28" },
      { label: "Projects Integrated", value: "450+" },
    ],
    tags: ["Procore", "Union Payroll", "Certified Payroll", "LCPtracker"],
    image: "/images/case-studies/case-1.webp",
    publishedAt: "2023-10-12",
  },
  {
    slug: "national-mep-contractor-union-automation",
    title: "National MEP Contractor: Union Payroll Across 28 Locals",
    client: "Vantage Mechanical & Electrical",
    logo: "/images/clients/logo-2.svg",
    industry: "Specialty Contracting",
    challenge: "National electrical and mechanical specialty contractor with 4,200 union employees across 28 IBEW and UA locals faced manual CBA rate tracking, delayed fringe remittances, and Davis-Bacon reporting errors on public projects.",
    solution: "Implemented automated CBA rate change workflows in Workday, built fringe remittance integrations to 15 benefit funds, and configured Davis-Bacon reporting with prevailing wage rate automation.",
    results: "Automated 100% of CBA rate changes, reduced fringe remittance processing time by 80%, and achieved zero Davis-Bacon audit findings on federal projects.",
    metrics: [
      { label: "Union Employees", value: "4,200" },
      { label: "Fringe Automation", value: "100%" },
      { label: "Audit Findings", value: "0" },
    ],
    tags: ["Union Payroll", "CBA Automation", "Davis-Bacon", "Fringe Benefits"],
    image: "/images/case-studies/case-2.webp",
    publishedAt: "2023-11-05",
  },
  {
    slug: "heavy-civil-fhcss-equipment-integration",
    title: "Heavy Civil Firm: Equipment Costing + FHWA Compliance",
    client: "IronBridge Infrastructure",
    logo: "/images/clients/logo-3.svg",
    industry: "Heavy Civil",
    challenge: "$900M heavy highway contractor needed integrated equipment costing, FHWA 1391 compliance reporting, and seamless field time capture from remote job sites with limited connectivity.",
    solution: "Integrated HCSS HeavyJob with Workday for equipment and labor time capture, built FHWA-compliant certified payroll reporting, and implemented offline-capable mobile time entry for field crews.",
    results: "Achieved real-time equipment cost allocation to projects, automated FHWA 1391 reporting, and captured 100% of field hours with zero manual re-entry.",
    metrics: [
      { label: "Equipment Assets", value: "850" },
      { label: "Field Hours Captured", value: "100%" },
      { label: "FHWA Compliance", value: "100%" },
    ],
    tags: ["HCSS HeavyJob", "FHWA", "Equipment Costing", "Field Time"],
    image: "/images/case-studies/case-3.webp",
    publishedAt: "2024-01-20",
  },
  {
    slug: "construction-conglomerate-tenant-consolidation",
    title: "Construction Conglomerate: 6-Tenant Consolidation",
    client: "Summit Builders Holdings",
    logo: "/images/clients/logo-4.svg",
    industry: "Construction Holding",
    challenge: "Construction holding company with 6 acquired operating companies on separate Workday tenants needed consolidation into a single tenant with multi-company accounting and shared services.",
    solution: "Executed M&A integration playbook consolidating 6 Workday tenants into one, implementing multi-company accounting with intercompany eliminations, and establishing shared services model for payroll and HR.",
    results: "Completed tenant consolidation in 5 months, reduced IT costs by 40%, and established clean consolidated reporting for parent company while maintaining OpCo P&L separation.",
    metrics: [
      { label: "Tenants Consolidated", value: "6" },
      { label: "Timeline", value: "5 Months" },
      { label: "IT Cost Reduction", value: "40%" },
    ],
    tags: ["M&A", "Tenant Consolidation", "Multi-Company", "Shared Services"],
    image: "/images/case-studies/case-4.webp",
    publishedAt: "2024-02-15",
  },
  {
    slug: "home-builder-sales-commission-automation",
    title: "Home Builder: Sales Commission + Lot Accounting",
    client: "Heritage Homes National",
    logo: "/images/clients/logo-5.svg",
    industry: "Residential Construction",
    challenge: "Top-25 national home builder struggled with complex sales commission calculations, per-lot revenue recognition, warranty accruals, and integration with CRM and estimating systems.",
    solution: "Configured Workday for tiered sales commission plans with accelerator calculations, implemented lot-level accounting for revenue recognition, and integrated with Hyphen Solutions for option upgrade tracking.",
    results: "Automated 100% of sales commission calculations, achieved per-lot profitability visibility, and reduced month-end close time for revenue recognition by 60%.",
    metrics: [
      { label: "Commissions Automated", value: "100%" },
      { label: "Homes Annually", value: "8,500" },
      { label: "Close Time Reduction", value: "60%" },
    ],
    tags: ["Sales Commissions", "Lot Accounting", "Revenue Recognition", "Warranty"],
    image: "/images/case-studies/case-5.webp",
    publishedAt: "2024-03-01",
  },
  {
    slug: "infrastructure-developer-capital-projects",
    title: "Infrastructure Developer: Capital Project Accounting",
    client: "Atlas Infrastructure Partners",
    logo: "/images/clients/logo-6.svg",
    industry: "Infrastructure/REIT",
    challenge: "Infrastructure REIT developer needed Workday Financials for capital project tracking, construction-in-progress accounting, percentage-of-completion revenue, and asset transfer to operations.",
    solution: "Configured Workday for capital project accounting with CIP tracking, implemented percentage-of-completion revenue recognition per ASC 606, and built automated asset transfer workflows from development to operations.",
    results: "Achieved real-time capital project spend visibility, automated percentage-of-completion calculations, and streamlined asset handoff from construction to property management.",
    metrics: [
      { label: "Projects Tracked", value: "35" },
      { label: "Capital Deployed", value: "$1.2B" },
      { label: "Asset Transfers", value: "500+" },
    ],
    tags: ["Capital Projects", "CIP", "ASC 606", "Asset Management"],
    image: "/images/case-studies/case-6.webp",
    publishedAt: "2024-04-10",
  },
]