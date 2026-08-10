import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FiAward, FiGlobe, FiUsers } from "react-icons/fi";

export default function Beneficios() {
  return (
    <Section className="bg-jci-bg" aria-labelledby="beneficios-heading">
      <Container>
        <div className="relative hidden lg:block">
          <div className="absolute top-20 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
            <div className="text-jci-gray after:bg-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap uppercase after:absolute after:top-1.5 after:-left-42.5 after:h-px after:w-40 after:content-['']">
              Cada día
            </div>
          </div>
        </div>

        <div className="relative md:ml-44">
          <header className="mt-20 md:max-w-xl">
            <h2 className="text-jci-black text-left text-4xl leading-[1.17] font-bold tracking-normal not-italic md:max-w-lg md:text-5xl">
              Beneficios de ser parte de JCI Ambato
            </h2>
          </header>

          <div className="mt-8">
            <ul
              className="text-jci-black max-w-md space-y-4 text-base"
              role="list"
              aria-label="Lista de beneficios"
            >
              <li className="flex items-start">
                <FiAward className="text-jci-teal mt-1 mr-3 h-6 w-6 shrink-0" aria-hidden="true" />
                <span>
                  Acceso a <strong>capacitaciones y entrenamientos</strong> exclusivos para
                  potenciar tu liderazgo.
                </span>
              </li>
              <li className="flex items-start">
                <FiGlobe className="text-jci-teal mt-1 mr-3 h-6 w-6 shrink-0" aria-hidden="true" />
                <span>
                  Oportunidad de participar en <strong>proyectos locales e internacionales</strong>{" "}
                  de alto impacto.
                </span>
              </li>
              <li className="flex items-start">
                <FiUsers className="text-jci-teal mt-1 mr-3 h-6 w-6 shrink-0" aria-hidden="true" />
                <span>
                  <strong>Networking</strong> con una red global de jóvenes líderes, empresarios y
                  profesionales.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
