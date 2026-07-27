"use client";

import type { FAQItem } from "@/features/inicio/types/faq";
import { generateFAQSchema } from "@/lib/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = "Preguntas Frecuentes",
  subtitle = "Encuentra respuestas a las dudas más comunes sobre JCI Ambato",
  className = "",
}: FAQSectionProps) {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <section className={`px-4 py-16 ${className}`}>
      {/* JSON-LD Schema para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-3xl">
        {/* Encabezado de la sección */}
        <div className="mb-12 text-center">
          <p className="text-jci-yellow text-sm leading-[1.85] font-bold tracking-normal uppercase">
            {subtitle}
          </p>
          <h2 className="text-jci-black mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
        </div>

        {/* Accordion */}
        <Accordion defaultValue={["item-0"]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-jci-black text-left text-base font-semibold md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                <div className="whitespace-pre-line">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
