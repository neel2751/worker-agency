"use client"

import { Container } from "@/components/layout/Container"
import { SectionHeading } from "../shared/SectionHeading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/common/CodeBlock"

export function IntegrationTypesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y">
      <Container>
        <SectionHeading 
          eyebrow="Technical Depth"
          title="We speak Workday's language natively"
          description="Whether it's a massive Studio assembly or a lightweight REST API, we build it the right way."
          align="center"
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <Tabs defaultValue="studio" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-background/50 backdrop-blur border">
              <TabsTrigger value="studio" className="py-3">Workday Studio</TabsTrigger>
              <TabsTrigger value="eib" className="py-3">EIB & XSLT</TabsTrigger>
              <TabsTrigger value="ccb" className="py-3">Core Connectors</TabsTrigger>
              <TabsTrigger value="api" className="py-3">Custom APIs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="studio" className="mt-6">
              <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Complex Routing & Orchestration</h3>
                  <p className="text-muted-foreground mb-6">
                    Harness the power of Workday Studio for scenarios that require conditional logic, looping, and multi-endpoint delivery.
                  </p>
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">✓ Advanced Error Handling</li>
                    <li className="flex items-center gap-2">✓ Large File Parsing</li>
                    <li className="flex items-center gap-2">✓ Java & XSLT Processing</li>
                  </ul>
                </div>
                <CodeBlock 
                  language="xml" 
                  code={`<wd:Report_Data>
  <wd:Report_Entry>
    <wd:Worker>
      <wd:ID wd:type="WID">
        a1b2c3d4e5f6
      </wd:ID>
    </wd:Worker>
    <!-- Studio Assembly Logic -->
  </wd:Report_Entry>
</wd:Report_Data>`}
                />
              </div>
            </TabsContent>

            <TabsContent value="eib" className="mt-6">
               <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Rapid Data Transfers</h3>
                  <p className="text-muted-foreground mb-6">
                    Efficiently extract or load data using Workday's Enterprise Interface Builder, enhanced with complex XSLT for specific vendor requirements.
                  </p>
                </div>
                <CodeBlock 
                  language="xslt" 
                  code={`<xsl:stylesheet version="2.0">
  <xsl:template match="/">
    <File>
      <xsl:apply-templates select="wd:Report_Data"/>
    </File>
  </xsl:template>
</xsl:stylesheet>`}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="ccb" className="mt-6">
              <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">Standardized Integrations</h3>
                <p className="text-muted-foreground">Leverage Workday's delivered templates for Benefits, Payroll, and Worker Syncs.</p>
              </div>
            </TabsContent>

            <TabsContent value="api" className="mt-6">
               <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Real-time Connectivity</h3>
                  <p className="text-muted-foreground mb-6">
                    Integrate directly using Workday Web Services (SOAP), REST, or OData for immediate, bidirectional data synchronization.
                  </p>
                </div>
                <CodeBlock 
                  language="typescript" 
                  code={`fetch("https://wd5-impl-services1.workday.com/ccx/api/v1/...", {
  headers: {
    "Authorization": "Bearer token",
    "Content-Type": "application/json"
  }
})`}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  )
}
