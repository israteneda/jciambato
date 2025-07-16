import { BackgroundText, RotatedText } from "@/components/commons";
import { AreaOportunidad } from "@/data/areas-oportunidad";
import { Button } from "@heroui/button";
import Link from "next/link";

// Función para extraer dos palabras clave del título
function extractTwoKeywords(title: string): [string, string] {
    // Palabras a excluir
    const excludeWords = ['y', 'en', 'la', 'el', 'de', 'del', 'con', 'por', 'para', 'a', 'al'];

    // Dividir el título en palabras y filtrar las excluidas
    const words = title
        .split(' ')
        .filter(word => !excludeWords.includes(word.toLowerCase()))
        .map(word => word.replace(/[^\w\s]/g, '')); // Remover puntuación

    // Tomar las dos primeras palabras relevantes
    const firstWord = words[0] || '';
    const secondWord = words[1] || '';

    return [firstWord.toUpperCase(), secondWord.toUpperCase()];
}

export default function ExploraAreasOportunidad({ area }: { area: AreaOportunidad }) {


    if (!area || !area.title) {
        return null; // O puedes retornar un componente de error/loading
    }


    {/* 
    Negocios y Emprendimiento -> NEGOCIOS, EMPRENDIMIENTO
    Cooperacion Internacional -> COOPERACION, INTERNACIONAL  
    Desarrollo Individual -> DESARROLLO, INDIVIDUAL
    Impacto en la Comunidad -> IMPACTO, COMUNIDAD
    */}
    // Extraer las dos palabras clave del título
    const [firstKeyword, secondKeyword] = extractTwoKeywords(area.title);

    return (
        <section className="relative z-[1] bg-transparent">
            <div className="my-32">
                <div className="relative">
                    {/* Texto rotado */}
                    <RotatedText
                        text="Selecciona nuestras áreas"
                    />

                    {/* Caja de Información */}
                    <div className="mt-16">
                        <div className="relative z-10 bg-transparent max-w-6xl mx-8 md:mx-auto">
                            <div className="relative z-10">
                                <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-aeonik font-bold tracking-normal">
                                    Quieres conocer más?
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-3xl md:text-4xl font-bold not-italic text-left leading-[1.33] tracking-normal text-black max-w-4xl">
                                        Echa un vistazo a los proyectos que nos han ayudado a crecer a lo largo de los años.
                                    </h2>
                                </div>

                                <div className="mt-9">
                                    <Button
                                        radius="none"
                                        className="relative bg-jci-aqua text-white group overflow-hidden"
                                        aria-label="Explora nuestras áreas"
                                    >
                                        <Link href="/areas-oportunidad">
                                            <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-[#003D62] transition-transform duration-300 group-hover:translate-x-0"></span>
                                            <span className="relative z-10">Explora nuestras áreas</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Texto de fondo */}
                <div className="mt-16">
                    <BackgroundText
                        textoPrimario={firstKeyword}
                        textoSecundario={secondKeyword}
                        numberLeft={0.1}
                        numberRight={0.1}
                        numberLeftMobile={0.1}
                        numberRightMobile={0.1}
                    />
                </div>
            </div>
        </section>
    )
}