import Image from "next/image";

interface Aliado {
  alt: string;
  src: string;
}

const aliados: Aliado[] = [
  {
    alt: "Logo UTI",
    src: "/aliados/logo-UTI.webp",
  },
  {
    alt: "Logo UTA",
    src: "/aliados/logo-UTA.webp",
  },
  {
    alt: "Logo Rompiendo Barreras",
    src: "/aliados/logo-RB.png",
  },
  {
    alt: "Logo MAGAP",
    src: "/aliados/logo-MAGAP.png",
  },
];

export default function Aliados() {
  return (
    <section>
      <div className="relative md:w-[calc(100%-180px)] mx-[30px] md:mx-[90px]">
        <div className="flex justify-center">
          <h4 className="text-2xl font-bold not-italic leading-[1.25] tracking-normal text-left text-jci-off-black md:text-[calc(22.4px+0.5vw)]">
            Aliados Estratégicos
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap justify-center  mt-10 gap-10 p-5 md:p-8">
        {aliados.map((aliado, index) => (
          <Image
            key={index}
            src={aliado.src}
            alt={aliado.alt}
            width={200}
            height={50}
            className="object-contain"
          />
        ))}
        <Image
          src="/images/aliados/logo-municipio.png"
          alt="Logo Municipio"
          width={200}
          height={50}
          className="object-contain"
        />
      </div>
    </section>
  );
}
