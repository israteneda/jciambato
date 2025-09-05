"use client"
import { RotatedText } from "@/components/commons";
import { NoticiaEvento } from "@/data/noticias-eventos";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

// Función para compartir en redes sociales
const shareOnSocialMedia = (platform: 'facebook' | 'linkedin', noticiaEvento: NoticiaEvento) => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const title = noticiaEvento.titulo;
    const description = noticiaEvento.descripcion || noticiaEvento.subtitulo || '';

    let shareUrl = '';

    switch (platform) {
        case 'facebook':
            // Facebook usa principalmente la URL, los metadatos OpenGraph se encargan del resto
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(`${title} - ${description}`)}&hashtag=%23JCIAmbato`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
            break;
    }

    // Abrir en nueva ventana
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    }
};


export default function Detalles({ noticiaEvento }: { noticiaEvento: NoticiaEvento }) {

    return (
        <section className="relative bg-transparent overflow-hidden" aria-labelledby={`noticiaEvento-${noticiaEvento.url}-heading`}>

            <div>
                <div className="h-[150px] md:h-80"></div>

                <div className="pt-24 md:pt-44 absolute top-0 left-0 right-0 z-20">
                    <div className="relative z-10 bg-transparent max-w-6xl mx-8 md:mx-20 lg:mx-auto">
                        <Link
                            href="/noticias-eventos"
                            className="group inline-flex items-center text-end font-semibold uppercase transition duration-400 cursor-pointer"
                            aria-label="Volver a noticias y eventos"
                        >
                            <div className="flex items-center py-4">
                                <div
                                    className="mr-3 flex items-center transform transition-transform duration-300 group-hover:-translate-x-1"
                                    aria-hidden="true"
                                >
                                    <HiOutlineArrowNarrowLeft className="h-5 w-5 text-jci-black transition-colors duration-300 group-hover:text-jci-aqua" />
                                </div>
                                <span className="text-xs leading-none text-jci-black transition-colors duration-300 group-hover:text-jci-aqua">
                                    Volver a noticias y eventos
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="inset-0 fixed pointer-events-none">
                        <RotatedText
                            text={`${noticiaEvento.titulo}`}
                        />
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="relative mx-auto md:max-w-6xl py-20 px-8 md:px-20 pb-36 md:bg-white">

                    <div className="">
                        <header>
                            <p className="text-xs leading-[1.85] font-bold uppercase text-jci-black ">
                                {noticiaEvento.tipo}
                            </p>
                            <div className="mt-8">
                                <h2 className="text-3xl md:text-[48px] font-aeonik-bold font-bold leading-[1.33] text-black max-w-[862px] text-left sm:text-[calc(28.8px+1vw)]">
                                    {noticiaEvento.titulo}
                                </h2>
                            </div>
                        </header>

                        <div className="mt-10 md:mt-20">
                            <div className="text-xs font-normal leading-[1.71] tracking-[1px] uppercase">
                                {noticiaEvento.fecha}
                            </div>
                            <div className="text-[10px] font-normal leading-[1.71] tracking-[1px] uppercase">
                                {noticiaEvento.lugar}
                            </div>
                        </div>

                        <div className="mt-5 md:mt-20">
                            <div className="border-t border-t-[#cccccc]">
                                <div className="mt-20">
                                    <div className="flex flex-col md:flex-row w-full">
                                        <div className="pr-0 md:pr-24 w-full">
                                            <div className="pb-20">
                                                <div className="flex flex-col gap-5 text-medium leading-[1.71] text-jci-off-black">
                                                    <p>
                                                        {noticiaEvento.descripcion}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-[20%]">
                                            <div className="flex flex-col items-start gap-2">
                                                <div className="text-xs font-semibold tracking-[1px] text-jci-black uppercase">
                                                    Compartir en
                                                </div>

                                                <div className="flex flex-col items-start gap-1">
                                                    <button
                                                        className="text-sm font-semibold text-gray-400 hover:text-jci-seafoam transition-colors duration-300 cursor-pointer"
                                                        onClick={() => shareOnSocialMedia('facebook', noticiaEvento)}
                                                        aria-label="Compartir en Facebook"
                                                    >
                                                        Facebook
                                                    </button>
                                                    <button
                                                        className="text-sm font-semibold text-gray-400 hover:text-jci-seafoam transition-colors duration-300 cursor-pointer"
                                                        onClick={() => shareOnSocialMedia('linkedin', noticiaEvento)}
                                                        aria-label="Compartir en LinkedIn"
                                                    >
                                                        LinkedIn
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className="hidden md:block absolute right-[50px] bottom-[25%] rotate-90 origin-bottom-right">
                        <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[6px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[-170px]" aria-hidden="true">
                            Conoce, Suma, Transforma
                        </div>
                    </div> */}
                </div>
            </div>


            {/*       <header className="sr-only">
                <h1 id={`proyecto-${proyecto.slug}-heading`}>{proyecto.titulo}</h1>
            </header>

            <div className="w-full flex justify-center">
                
            </div> */}



            {/* <div className="flex w-full">
                <div className="h-screen flex lg:px-[180px] pb-[92px] items-center box-border">
                    <BorderFrame isScrolled={isScrolled} />

                    <InfoContainer
                        subtitle={proyecto.subtitulo}
                        title={proyecto.titulo}
                        description={proyecto.descripcion || ""}
                    />

                    <BackgroundImage
                        image={proyecto.imagen}
                        alt={`Imagen de fondo de ${proyecto.titulo}`}
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
            </nav> */}
        </section>
    );
}