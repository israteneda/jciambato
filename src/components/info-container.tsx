"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Section } from "./layout/section";
import { Container } from "./layout/container";

interface InfoContainerProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function InfoContainer({ subtitle, title, description }: InfoContainerProps) {
  const pathname = usePathname();
  const [shouldUseLightText, setShouldUseLightText] = useState(false);

  // Función para detectar si debe usar texto claro (para fondos oscuros)
  const detectTextColor = () => {
    // Páginas que siempre necesitan texto claro (fondo oscuro)
    const lightTextPages = [
      "/",
      "/nosotros",
      "/proyectos",
      "/miembros",
      "/involucrate",
      "/noticias-eventos",
    ];

    // Páginas que siempre necesitan texto oscuro (fondo claro)
    const darkTextPages = [
      "/impacto",
      "/areas-oportunidad",
      "/politica-gestion",
      "/politica-privacidad",
    ];

    // Si estamos en una página que necesita texto claro
    if (lightTextPages.includes(pathname)) {
      setShouldUseLightText(true);
      return;
    }

    // Si estamos en una página que necesita texto oscuro
    if (darkTextPages.includes(pathname)) {
      setShouldUseLightText(false);
      return;
    }

    // Para páginas dinámicas (como áreas individuales), usar texto claro
    if (pathname.startsWith("/areas-oportunidad/")) {
      setShouldUseLightText(true);
      return;
    }

    // Por defecto, usar texto claro
    setShouldUseLightText(true);
  };

  useEffect(() => {
    detectTextColor();
  }, [pathname]);

  return (
    <Section className="z-10">
      {shouldUseLightText ? (
        // Version Claro (para fondos oscuros)
        <Container>
          <header>
            <h2 className="text-jci-yellow text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
              {subtitle}
            </h2>

            <div className="mt-3">
              <h1 className="max-w-240 text-left text-3xl leading-none font-bold tracking-[-0.5px] text-gray-200 normal-case not-italic md:text-5xl lg:text-[72px]">
                {title}
              </h1>
            </div>
          </header>

          <div className="mt-9">
            <p className="max-w-xl text-left text-xl leading-[1.45] font-normal tracking-normal text-gray-200 not-italic">
              {description}
            </p>
          </div>
        </Container>
      ) : (
        // Version Oscuro (para fondos claros)
        <Container>
          <header>
            <h2 className="text-jci-teal text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
              {subtitle}
            </h2>

            <div className="mt-3">
              <h1 className="text-jci-black max-w-240 text-left text-3xl leading-none font-bold tracking-[-0.5px] normal-case not-italic md:text-5xl lg:text-[72px]">
                {title}
              </h1>
            </div>
          </header>

          <div className="mt-9">
            <p className="text-jci-black max-w-xl text-left text-xl leading-[1.45] font-normal tracking-normal not-italic">
              {description}
            </p>
          </div>
        </Container>
      )}
    </Section>
  );
}
