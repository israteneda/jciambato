import Image from "next/image";

export default function Aliados() {

  return (
    <section className="select-none" aria-labelledby="aliados-heading">
      <header className="relative md:w-[calc(100%-180px)] mx-8 md:mx-20 lg:mx-auto">
        <div className="flex justify-center">
          <h2 id="aliados-heading" className="text-2xl font-bold not-italic leading-[1.25] tracking-normal text-left text-jci-off-black md:text-[calc(22.4px+0.5vw)]">
            Aliados Estratégicos
          </h2>
        </div>
      </header>

      <div className="flex flex-wrap justify-center mt-9 gap-10 lg:gap-16 p-8" role="list" aria-label="Logos de aliados estratégicos">
        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-UTA.webp"
            alt="Logo Universidad Técnica de Ambato"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-municipalidad.webp"
            alt="Logo Municipio de Ambato"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-UTI.webp"
            alt="Logo Universidad Tecnológica Indoamérica"
            width={250}
            height={100}
            className="object-contain w-auto h-[75px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-miess.webp"
            alt="Logo Ministerio de Inclusión Económica y Social"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-tstt.webp"
            alt="Logo Instituto Superior Tecnológico Tungurahua"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-hcpt.webp"
            alt="Logo Honorable Gobierno Provincial de Tungurahua"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-cfct.webp"
            alt="Logo Centro de Formación Ciudadana de Tungurahua"
            width={250}
            height={100}
            className="object-contain w-auto h-[70px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-RB.webp"
            alt="Logo Rotary Club"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-magp.webp"
            alt="Logo Ministerio de Agricultura, Ganadería y Pesca"
            width={250}
            height={100}
            className="object-contain w-auto h-[110px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-utpl.webp"
            alt="Logo Universidad Técnica Particular de Loja"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>

        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-ssc.webp"
            alt="Logo Safe & Sound Cities"
            width={250}
            height={100}
            className="object-contain w-auto h-[90px]"
            draggable="false"
          />
        </figure>
      </div>
    </section>
  );
}
