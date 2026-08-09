import Image from "next/image";

export default function RowScroll() {
  return (
    <div>
      {/* Botón de scroll pantallas grandes */}
      <div className="absolute top-1/2 -right-2 hidden -translate-x-1/2 -translate-y-1/2 transform sm:block">
        <button
          aria-label="Desplazarse hacia abajo"
          onClick={() => {
            // Función para scroll suave hacia abajo
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt=""
            width={45}
            height={45}
            className="relative h-11 w-11 object-contain"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Botón de scroll pantallas pequeñas */}
      <div className="absolute bottom-28 left-1/2 block -translate-x-1/2 -translate-y-1/2 transform md:hidden">
        <button
          aria-label="Desplazarse hacia abajo"
          onClick={() => {
            // Función para scroll suave hacia abajo
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt=""
            width={55}
            height={55}
            className="relative h-11 w-11 object-contain"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
