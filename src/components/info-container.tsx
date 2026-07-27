"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    <section className="relative z-30 mx-8 max-w-6xl bg-transparent md:mx-20 lg:mx-auto">
      {shouldUseLightText ? (
        // Version Claro (para fondos oscuros)
        <>
          <header>
            <h2 className="text-jci-yellow text-xs leading-[1.85] font-bold tracking-normal uppercase not-italic">
              {subtitle}
            </h2>

            <div className="mt-8">
              <h1 className="max-w-4xl text-left text-3xl leading-none font-bold tracking-[-0.5px] text-gray-200 not-italic md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </div>
          </header>

          <div className="mt-9">
            <p className="max-w-xl text-left text-xl leading-[1.45] font-normal tracking-normal text-gray-100 not-italic">
              {description}
            </p>
          </div>
        </>
      ) : (
        // Version Oscuro (para fondos claros)
        <>
          <header>
            <h2 className="text-jci-teal text-xs leading-[1.85] font-bold tracking-normal uppercase not-italic">
              {subtitle}
            </h2>

            <div className="mt-8">
              <h1 className="max-w-4xl text-left text-3xl leading-none font-bold tracking-[-0.5px] text-jci-black not-italic lg:text-6xl">
                {title}
              </h1>
            </div>
          </header>

          <div className="mt-9">
            <p className="max-w-xl text-left text-xl leading-[1.45] font-normal tracking-normal text-jci-black not-italic">
              {description}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
