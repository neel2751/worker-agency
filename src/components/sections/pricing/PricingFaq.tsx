import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQS } from "@/data/faqs"

export function PricingFaq() {
  const pricingFaqs = FAQS.filter(faq => 
    faq.q.toLowerCase().includes("cost") || 
    faq.q.toLowerCase().includes("pricing") || 
    faq.q.toLowerCase().includes("engagement") ||
    faq.q.toLowerCase().includes("model") ||
    faq.q.toLowerCase().includes("retainer")
  )

  const displayFaqs = pricingFaqs.length > 0 ? pricingFaqs : FAQS.slice(0, 3)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Pricing FAQ</h2>
        <p className="text-muted-foreground">Common questions about our engagement models.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {displayFaqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left text-base font-semibold">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
