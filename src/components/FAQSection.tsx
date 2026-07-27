"use client";

import { generateFAQSchema } from "@/lib/json-ld";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

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
  // Generar JSON-LD para SEO
  const faqSchema = generateFAQSchema(faqs);

  return (
    <section className={`px-4 py-16 ${className}`}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Título de la sección */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>

        {/* Accordion con las preguntas */}
        <Accordion className="max-w-lg">
          {/* {{
            base: "px-6 py-2",
            title: "font-semibold text-gray-800 text-lg",
            trigger: "py-4",
            content: "text-gray-600 pb-6 pt-2",
          }} */}

          {faqs.map((faq, index) => (
            <AccordionItem key={index} aria-label={faq.question} title={faq.question} className="">
              <div className="whitespace-pre-line">{faq.answer}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
