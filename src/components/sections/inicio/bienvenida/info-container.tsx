import { Button } from "@heroui/button";

// Componente para el contenedor de información
export const InfoContainer = () => {
  return (
    <div className="relative z-20">
      <div className="flex flex-col items-start">
        <div className="text-xs lg:text-sm uppercase text-jci-gold font-bold tracking-normal">
          Inpulsando el cambio
        </div>

        <div className="mt-6">
          <h1 className="text-white max-w-xl font-bold text-3xl lg:text-6xl">
            Líderes que Impactan el Futuro
          </h1>
        </div>

        <div className="mt-10">
          <div className="text-white max-w-md text-sm lg:text-medium leading-relaxed">
            Con cada proyecto, impulsamos el cambio a través de la innovación, transformando ideas
            en soluciones que construyen comunidades más fuertes y mejoran vidas.
          </div>
        </div>

        <div className="mt-9">
          <Button
            radius="none"
            className="relative bg-jci-aqua text-white group overflow-hidden"
            aria-label="Más información sobre nosotros"
          >
            <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative z-10">Sobre Nosotros</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
