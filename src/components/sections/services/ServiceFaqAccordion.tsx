import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQS } from "@/data/faqs"

export function ServiceFaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.slice(0, 4).map((faq, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left text-base font-semibold">{faq.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
