import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Presentacion() {
  return (
    <Section className="py-0 md:py-0" aria-labelledby="presentacion-heading">
      <Container>
        <div className="bg-white px-8 py-20 pb-20 md:px-20">
          <header className="max-w-3xl">
            <p className="text-jci-gray text-xs leading-[1.85] font-bold tracking-normal uppercase not-italic">
              Cómo generamos impacto
            </p>
            <div className="mt-8">
              <h2 className="text-jci-black text-left text-3xl font-bold md:text-5xl md:leading-[1.33]">
                Liderando el desarrollo de líderes jóvenes en Ambato
              </h2>
            </div>
          </header>

          <div className="mt-16 md:mt-20">
            <div className="text-jci-black text-justify text-base leading-loose md:text-left">
              En JCI brindamos oportunidades de desarrollo de liderazgo prácticas, deliberadas y
              sostenibles. A través de una amplia gama de eventos, programas, sesiones de formación
              y proyectos, empoderamos a jóvenes líderes para generar un cambio real en sus
              comunidades y carreras.
            </div>
          </div>

          <div className="mt-20">
            <div className="my-5 leading-loose md:p-6">
              <p className="mb-4">Nuestro enfoque está guiado por cuatro áreas de oportunidad:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                    •
                  </span>
                  <span>
                    <strong>Negocios y Emprendimiento: </strong>
                    Impulsamos la innovación y el crecimiento mediante capacitación, networking y
                    conexiones con líderes de la industria.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                    •
                  </span>
                  <span>
                    <strong>Colaboración Internacional: </strong>
                    Conectamos a jóvenes líderes de más de 100 países para fomentar la cooperación
                    global y el entendimiento intercultural.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                    •
                  </span>
                  <span>
                    <strong>Desarrollo Individual: </strong>
                    Potenciamos el crecimiento personal y profesional con herramientas de liderazgo,
                    oratoria, mentoría y habilidades clave.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                    •
                  </span>
                  <span>
                    <strong>Impacto Comunitario: </strong>
                    Lideramos proyectos sociales sostenibles que responden a desafíos locales y
                    contribuyen a los Objetivos de Desarrollo Sostenible.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-jci-black text-justify text-base leading-loose md:text-left">
              Al integrar estas áreas, cada experiencia en JCI fortalece a nuestros miembros como
              agentes de cambio global. Ya sea liderando un proyecto, participando en una formación
              o asistiendo a un evento internacional, JCI te prepara para dejar huella.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
