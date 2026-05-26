export const INTEGRATION_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "hcm", label: "HCM" },
  { id: "finance", label: "Finance" },
  { id: "payroll", label: "Payroll" },
  { id: "construction", label: "Construction" },
  { id: "reporting", label: "Reporting" },
]

export const INTEGRATIONS = [
  { slug: "procore", name: "Procore", direction: "Bidirectional", shortDesc: "Sync workers, costs, and project data between Workday and Procore.", method: "REST API", category: "construction" },
  { slug: "sage", name: "Sage 300", direction: "Outbound", shortDesc: "Push GL entries and cost codes from Workday to Sage 300 CRE.", method: "File-based", category: "finance" },
  { slug: "hcss", name: "HCSS HeavyJob", direction: "Bidirectional", shortDesc: "Sync field labor hours and equipment data with Workday HCM.", method: "REST API", category: "construction" },
  { slug: "lcptracker", name: "LCPtracker", direction: "Outbound", shortDesc: "Export certified payroll and prevailing wage data automatically.", method: "REST API", category: "payroll" },
  { slug: "adp", name: "ADP Workforce Now", direction: "Bidirectional", shortDesc: "Bidirectional sync of payroll and employee records.", method: "REST API", category: "payroll" },
  { slug: "oracle", name: "Oracle Financials", direction: "Bidirectional", shortDesc: "Connect Workday financials with Oracle ERP for unified reporting.", method: "REST API", category: "finance" },
  { slug: "servicenow", name: "ServiceNow", direction: "Bidirectional", shortDesc: "Automate HR service delivery and ticketing via ServiceNow.", method: "REST API", category: "hcm" },
  { slug: "tableau", name: "Tableau", direction: "Outbound", shortDesc: "Stream Workday workforce and financial data into Tableau dashboards.", method: "REST API", category: "reporting" },
  { slug: "powerbi", name: "Power BI", direction: "Outbound", shortDesc: "Live Workday data feeds for Power BI reporting and analytics.", method: "REST API", category: "reporting" },
  { slug: "greenhouse", name: "Greenhouse", direction: "Bidirectional", shortDesc: "Sync candidate and requisition data between Workday Recruiting and Greenhouse.", method: "REST API", category: "hcm" },
  { slug: "docusign", name: "DocuSign", direction: "Bidirectional", shortDesc: "Automate offer letters and onboarding documents via DocuSign.", method: "REST API", category: "hcm" },
  { slug: "salesforce", name: "Salesforce", direction: "Bidirectional", shortDesc: "Align HR and CRM data for workforce planning and client delivery.", method: "REST API", category: "finance" },
]
