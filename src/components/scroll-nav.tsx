"use client";

import Image from "next/image";

export default function ScrollNav() {
  return (
    <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-90 transform">
      <div className="hidden md:block">
        <button
          className="flex cursor-pointer items-center"
          aria-label="Descubrir más contenido"
          onClick={() => {
            // Función para scroll suave hacia abajo
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-jci-teal max-w-26 text-right text-[11px] leading-3 font-bold tracking-[1px] uppercase md:text-[10.5px]">
            NOSOTROS
          </span>
          <Image
            src="/icons/arrow-down.svg"
            alt=""
            width={500}
            height={500}
            className="h-10 w-14 -rotate-90 object-cover md:h-16 md:w-24"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
