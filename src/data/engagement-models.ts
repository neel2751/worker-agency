export const ENGAGEMENT_MODELS = [
  {
    name: "Staff Augmentation",
    idealFor: "Teams that need extra Workday expertise on demand.",
    duration: "Monthly rolling contract",
    pricingModel: "Time & Materials",
    inclusions: [
      "Dedicated Workday integration consultant",
      "Flexible hours — scale up or down monthly",
      "Access to our internal accelerator library",
      "Weekly status reporting",
    ],
    notIncluded: [
      "Project management overhead",
      "Dedicated QA engineer",
      "Post-engagement support SLA",
    ],
  },
  {
    name: "Implementation",
    idealFor: "Companies launching a new Workday integration from scratch.",
    duration: "8–20 weeks fixed timeline",
    pricingModel: "Fixed fee per project",
    inclusions: [
      "Full discovery, design, build, and UAT",
      "Dedicated project manager",
      "Functional and technical documentation",
      "Go-live hypercare (30 days)",
      "Knowledge transfer sessions",
    ],
    notIncluded: [
      "Ongoing post-hypercare support",
      "Future Workday release regression testing",
    ],
  },
  {
    name: "Managed Services",
    idealFor: "Enterprises that need 24/7 integration reliability.",
    duration: "12-month minimum commitment",
    pricingModel: "Monthly retainer",
    inclusions: [
      "99.9% uptime SLA with monitoring",
      "Break-fix support with guaranteed response times",
      "Workday bi-annual release regression testing",
      "Continuous optimization and enhancements",
      "Dedicated named account manager",
    ],
    notIncluded: [
      "Net-new integration builds (scoped separately)",
    ],
  },
]