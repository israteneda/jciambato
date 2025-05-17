import { Button } from "@heroui/button";

// Componente para el contenedor de información
export const InfoContainer = () => (
  <div className="mx-11 max-w-xl text-left lg:ml-28">
    <h2 className="mb-7 text-sm font-bold text-yellow-400 lg:text-base">IMPULSANDO EL CAMBIO</h2>
    <h1 id="section-title" className="mb-10 text-4xl font-bold text-cyan-600 lg:text-6xl">
      Líderes que Impactan el Futuro
    </h1>
    <p className="mt-7 mb-4 text-sm text-white lg:text-base">
      Con cada proyecto, impulsamos el cambio a través de la innovación, transformando ideas en
      soluciones que construyen comunidades más fuertes y mejoran vidas.
    </p>
    <Button
      radius="none"
      className="relative mt-4 bg-cyan-600 text-white group overflow-hidden"
      aria-label="Más información sobre nosotros"
    >
      <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
      <span className="relative z-10">Sobre Nosotros</span>
    </Button>
  </div>
);
