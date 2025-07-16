"use client";
import { useScroll } from "@/hooks";
import Image from "next/image";
import BorderFrame from "@/components/commons/border-frame";
import InfoContainer from "@/components/commons/info-container";
import BackgroundImage from "@/components/commons/background-image";
import { AreaOportunidad } from "@/data/areas-oportunidad";


export default function Bienvenida({ area }: { area: AreaOportunidad }) {
    const isScrolled = useScroll();

    return (
        <section className="relative" aria-labelledby={`area-${area.slug}-heading`}>
            <header className="sr-only">
                <h1 id={`area-${area.slug}-heading`}>{area.title}</h1>
            </header>

            <div className="flex w-full">
                <div className="h-screen flex lg:px-[180px] pb-[92px] items-center box-border">
                    <BorderFrame isScrolled={isScrolled} />

                    <InfoContainer
                        subtitle={area.subtitle}
                        title={area.title}
                        description={area.description}
                    />

                    <BackgroundImage
                        image={area.background_image}
                        alt={`Imagen de fondo de ${area.title}`}
                    />
                </div>

                <div className="hidden md:block absolute z-20 top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                        aria-label="Desplazarse hacia abajo"
                        onClick={() => {
                            // Función para scroll suave hacia abajo
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: 'smooth'
                            });
                        }}
                    >
                        <Image
                            src="/icons/arrow-down.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="relative w-[30px] h-[30px] object-contain"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>

            <nav className="absolute left-1/2 bottom-0 transform -translate-x-1/2 rotate-90 z-20">
                <div className="">
                    <button
                        className="flex items-center"
                        aria-label="Descubrir más contenido"
                        onClick={() => {
                            // Función para scroll suave hacia abajo
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: 'smooth'
                            });
                        }}
                    >
                        <span className="text-jci-aqua text-[10.5px] font-semibold text-end uppercase">Descubre <br /> más</span>
                        <Image
                            src="/icons/arrow-down.svg"
                            alt=""
                            width={500}
                            height={500}
                            className="w-[96px] h-[69px] -rotate-90 object-cover"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </nav>
        </section>
    );
}