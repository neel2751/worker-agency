export const PROCESS_STEPS = [
  {
    number: 1,
    codeName: "Phase 01",
    title: "Assess",
    description:
      "We audit your existing systems, data flows, and integration landscape to identify gaps, risks, and quick wins before a single line of code is written.",
    activities: [
      "Discovery: Stakeholder interviews and system inventory",
      "Gap Analysis: Map current vs. desired state",
      "Risk Register: Surface data quality and compliance risks early",
      "Roadmap: Prioritized integration backlog with effort estimates",
    ],
  },
  {
    number: 2,
    codeName: "Phase 02",
    title: "Design",
    description:
      "We architect the integration solution — choosing the right Workday tool for each use case and producing detailed functional and technical specs.",
    activities: [
      "Architecture: Studio, EIB, Core Connector, or API selection",
      "Data Mapping: Field-level transformation specs",
      "Error Handling: Retry logic, alerting, and escalation paths",
      "Review: Client sign-off before any build begins",
    ],
  },
  {
    number: 3,
    codeName: "Phase 03",
    title: "Deliver",
    description:
      "We build, test, and deploy your integrations in a structured sprint cycle — with unit, integration, and UAT testing before every go-live.",
    activities: [
      "Build: Workday integration development in tenant",
      "Unit Testing: Developer-led test scenarios for all data paths",
      "UAT: Client-driven acceptance testing with sign-off",
      "Go-Live: Cutover support and hypercare monitoring",
    ],
  },
  {
    number: 4,
    codeName: "Phase 04",
    title: "Sustain",
    description:
      "Post-go-live, we monitor, maintain, and continuously improve your integrations as your business and Workday platform evolve.",
    activities: [
      "Monitoring: Automated alerts for integration failures",
      "Workday Updates: Regression testing after each release",
      "Enhancements: Ongoing optimization and new field mappings",
      "Support: SLA-backed ticket response and resolution",
    ],
  },
]