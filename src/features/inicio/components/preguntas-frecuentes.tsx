import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { generateFAQSchema } from "@/lib/json-ld";
import { faqsInicio } from "../data/faqs";
import { Container } from "@/components/layout/container";

const TITLE = "Preguntas Frecuentes";
const SUBTITLE = "Sobre JCI Ambato";

export default function PreguntasFrecuentes() {
  const faqSchema = generateFAQSchema(faqsInicio);

  return (
    <Section>
      {/* JSON-LD Schema para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Container>
        <div className="mb-12">
          <div className="text-jci-yellow text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
            <p> {SUBTITLE}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-jci-black text-left text-3xl leading-[1.33] font-bold tracking-normal normal-case not-italic md:text-5xl">
              {TITLE}
            </h3>
          </div>
        </div>

        <Accordion defaultValue={["item-0"]}>
          {faqsInicio.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-jci-black text-left text-base font-semibold md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-600">
                <div className="whitespace-pre-line">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
