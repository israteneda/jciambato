"use client";

import { useState } from "react";
import DeclaracionPrivacidad from "./declaracion-privacidad";
import CondicionesUso from "./condiciones-uso";
import PoliticaCookies from "./politica-cookies";
import { Section } from "@/components/layout/section";

export default function PoliticaPrivacidad() {
  // Estado para controlar el botón de activo
  const [activeButton, setActiveButton] = useState(0);

  const politicas = [
    { title: "Declaración de Privacidad" },
    { title: "Condiciones de Uso" },
    { title: "Política de Cookies" },
  ];

  // Contenido de la politica seleccionada
  const renderContent = () => {
    switch (activeButton) {
      case 0:
        return <DeclaracionPrivacidad />;
      case 1:
        return <CondicionesUso />;
      case 2:
        return <PoliticaCookies />;
      default:
        return <DeclaracionPrivacidad />;
    }
  };

  return (
    <Section className="bg-gray-50">
      <nav className="mx-8 box-border flex min-h-28 items-center bg-gray-200">
        <div
          className="ml-8 flex flex-wrap gap-6 py-8 md:ml-20"
          role="tablist"
          aria-label="Políticas de privacidad"
        >
          {politicas.map((politica, index) => (
            <button
              key={index}
              onClick={() => setActiveButton(index)}
              className={`mr-11 py-0 text-left text-base leading-tight font-bold transition duration-300 hover:text-gray-700 ${
                activeButton === index ? "text-gray-800" : "text-gray-400"
              }`}
              role="tab"
              aria-selected={activeButton === index}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
            >
              {politica.title}
            </button>
          ))}
        </div>
      </nav>

      <div className="bg-white">
        {/* Contenedor con animación de transición */}
        <div className="transition-all duration-300 ease-in-out">
          <div className="" role="tabpanel" aria-labelledby={`tab-${activeButton}`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </Section>
  );
}
