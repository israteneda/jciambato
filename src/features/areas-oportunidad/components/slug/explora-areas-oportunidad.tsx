import BackgroundText from "@/components/background-text";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import RotatedText from "@/components/rotated-text";
import { Button } from "@/components/ui/button";
import { AreaOportunidad } from "@/types/area-oportunidad";
import Link from "next/link";

// Función para extraer dos palabras clave del título
function extractTwoKeywords(title: string): [string, string] {
  // Palabras a excluir
  const excludeWords = ["y", "en", "la", "el", "de", "del", "con", "por", "para", "a", "al"];

  // Dividir el título en palabras y filtrar las excluidas
  const words = title
    .split(" ")
    .filter((word) => !excludeWords.includes(word.toLowerCase()))
    .map((word) => word.replace(/[^\w\s]/g, "")); // Remover puntuación

  // Tomar las dos primeras palabras relevantes
  const firstWord = words[0] || "";
  const secondWord = words[1] || "";

  return [firstWord.toUpperCase(), secondWord.toUpperCase()];
}

export default function ExploraAreasOportunidad({ area }: { area: AreaOportunidad }) {
  if (!area || !area.title) {
    return null; // O puedes retornar un componente de error/loading
  }

  {
    /* 
    Negocios y Emprendimiento -> NEGOCIOS, EMPRENDIMIENTO
    Cooperacion Internacional -> COOPERACION, INTERNACIONAL  
    Desarrollo Individual -> DESARROLLO, INDIVIDUAL
    Impacto en la Comunidad -> IMPACTO, COMUNIDAD
    */
  }
  // Extraer las dos palabras clave del título
  const [firstKeyword, secondKeyword] = extractTwoKeywords(area.title);

  return (
    <Section aria-labelledby={`explora-areas-oportunidad-${area.slug}-heading`}>
      <div className="relative">
        {/* Texto rotado */}
        <RotatedText text="Selecciona nuestras áreas" />

        {/* Caja de Información */}
        <div className="mt-16">
          <Container>
            <div className="text-jci-gray font-sans text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
              Quieres conocer más?
            </div>
            <div className="mt-2">
              <h2 className="text-jci-black max-w-4xl text-left text-3xl leading-[1.33] font-bold tracking-normal not-italic md:text-4xl">
                Echa un vistazo a los proyectos que nos han ayudado a crecer a lo largo de los años.
              </h2>
            </div>

            <div className="mt-9">
              <Button
                className="bg-jci-blue hover:bg-jci-blue group relative overflow-hidden text-white"
                aria-label="Explora nuestras áreas"
              >
                <Link href="/areas-oportunidad">
                  <span className="bg-jci-black absolute inset-0 h-full w-full -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0"></span>
                  <span className="relative z-10">Explora nuestras áreas</span>
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      </div>

      {/* Texto de fondo */}
      <div className="mt-16">
        <BackgroundText primary={firstKeyword} secondary={secondKeyword} />
      </div>
    </Section>
  );
}
