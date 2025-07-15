import Image from "next/image";

export default function Aliados() {

  return (
    <section className="select-none" aria-labelledby="aliados-heading">
      <header className="relative md:w-[calc(100%-180px)] mx-8 md:mx-20">
        <div className="flex justify-center">
          <h2 id="aliados-heading" className="text-2xl font-bold not-italic leading-[1.25] tracking-normal text-left text-jci-off-black md:text-[calc(22.4px+0.5vw)]">
            Aliados Estratégicos
          </h2>
        </div>
      </header>

      <div className="flex flex-wrap justify-center mt-10 gap-10 p-5 md:p-8" role="list" aria-label="Logos de aliados estratégicos">
        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-UTA.webp"
            alt="Logo Universidad Técnica de Ambato"
            width={250}
            height={100}
            className="object-contain w-[250px] h-[100px]"
          />
        </figure>
        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-MAGAP.webp"
            alt="Logo Ministerio de Agricultura, Ganadería, Acuacultura y Pesca"
            width={250}
            height={100}
            className="object-contain w-[250px] h-[100px]"
          />
        </figure>
        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-UTI.webp"
            alt="Logo Universidad Tecnológica Indoamérica"
            width={250}
            height={100}
            className="object-contain w-[250px] h-[100px]"
          />
        </figure>
        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-RB.webp"
            alt="Logo Rotary Club"
            width={250}
            height={100}
            className="object-contain w-[250px] h-[100px]"
          />
        </figure>
        <figure role="listitem" className="flex items-center justify-center">
          <Image
            src="/images/aliados/logo-municipio.webp"
            alt="Logo Municipio de Ambato"
            width={250}
            height={100}
            className="object-contain w-[250px] h-[100px]"
          />
        </figure>
      </div>
    </section>
  );
}
