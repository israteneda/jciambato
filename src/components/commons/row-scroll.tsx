import Image from "next/image";

export default function RowScroll() {
    return (
        <div className="hidden sm:block absolute z-20 top-1/2 -right-2 transform -translate-x-1/2 -translate-y-1/2">
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
                    width={45}
                    height={45}
                    className="relative w-[45px] h-[45px] object-contain"
                    aria-hidden="true"
                />
            </button>
        </div>
    );
}