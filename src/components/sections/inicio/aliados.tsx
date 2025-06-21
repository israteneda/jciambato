import Image from "next/image";

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
        <Image
          src="/images/aliados/logo-UTA.webp"
          alt="Logo UTA"
          width={200}
          height={50}
          className="object-contain w-[200px] h-[50px]"
        />
        <Image
          src="/images/aliados/logo-MAGAP.webp"
          alt="Logo MAGAP"
          width={200}
          height={50}
          className="object-contain w-[200px] h-[50px]"
        />
        <Image
          src="/images/aliados/logo-UTI.webp"
          alt="Logo UTI"
          width={200}
          height={50}
          className="object-contain w-[200px] h-[50px]"
        />
        <Image
          src="/images/aliados/logo-RB.webp"
          alt="Logo RB"
          width={200}
          height={50}
          className="object-contain w-[200px] h-[50px]"
        />
        <Image
          src="/images/aliados/logo-municipio.webp"
          alt="Logo Municipio"
          width={200}
          height={50}
          className="object-contain w-[200px] h-[50px]"
        />
      </div>
    </section>
  );
}
