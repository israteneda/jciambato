"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { generateFAQSchema } from "@/lib/seo";

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
    <section className={`py-16 px-4 ${className}`}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>

        {/* Accordion con las preguntas */}
        <Accordion
          className="gap-3"
          itemClasses={{
            base: "px-6 py-2",
            title: "font-semibold text-gray-800 text-lg",
            trigger: "py-4",
            content: "text-gray-600 pb-6 pt-2",
          }}
        >
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
