import Image from "next/image";

export default function MisionVision() {
  return (
    <section className="relative my-48">
      <div className="relative max-w-6xl px-8 md:mx-auto">
        <div className="flex flex-col md:flex-row gap-24 md:gap-0 items-center justify-between">
          {/* Caja de Información */}
          <div>
            <div className="flex">
              {/* Texto Vertical */}
              <div className="hidden md:block absolute top-0 left-3 translate-x-[-50%] translate-y-[-50%] -rotate-90 origin-bottom-right">
                <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[6px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[170px]">
                  A fantastic year
                </div>
              </div>

              <div className="relative md:ml-44">
                <div className="">
                  <h3 className="text-4xl text-black font-semibold leading-2 text-left">
                    Muestra Misión <br /> y Visión
                  </h3>
                </div>
                <div className="mt-8">
                  <div className="flex flex-col gap-3 text-gray-700 text-left text-medium leading-[1.78] max-w-[470px]">
                    <p>
                      To create value with products and services designed and executed by motivated
                      employees and partners
                    </p>

                    <p>
                      To create value with products and services designed and executed by motivated
                      employees and partners,{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caja de Imagen */}
          <div>
            <Image
              src="/icons/eye.svg"
              alt="Misión y Visión"
              width={500}
              height={500}
              className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
