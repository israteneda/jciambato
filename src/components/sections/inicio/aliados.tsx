import Image from "next/image";

export default function Aliados() {

  return (
    <section>
      <div className="relative md:w-[calc(100%-180px)] mx-8 md:mx-20">
        <div className="flex justify-center">
          <h4 className="text-2xl font-bold not-italic leading-[1.25] tracking-normal text-left text-jci-off-black md:text-[calc(22.4px+0.5vw)]">
            Aliados Estratégicos
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap justify-center  mt-10 gap-10 p-5 md:p-8">
        <Image
          src="/images/aliados/logo-UTA.webp"
          alt="Logo UTA"
          width={250}
          height={100}
          className="object-contain w-[250px] h-[100px]"
        />
        <Image
          src="/images/aliados/logo-MAGAP.webp"
          alt="Logo MAGAP"
          width={250}
          height={100}
          className="object-contain w-[250px] h-[100px]"
        />
        <Image
          src="/images/aliados/logo-UTI.webp"
          alt="Logo UTI"
          width={250}
          height={100}
          className="object-contain w-[250px] h-[100px]"
        />
        <Image
          src="/images/aliados/logo-RB.webp"
          alt="Logo RB"
          width={250}
          height={100}
          className="object-contain w-[250px] h-[100px]"
        />
        <Image
          src="/images/aliados/logo-municipio.webp"
          alt="Logo Municipio"
          width={250}
          height={100}
          className="object-contain w-[250px] h-[100px]"
        />
      </div>
    </section>
  );
}
