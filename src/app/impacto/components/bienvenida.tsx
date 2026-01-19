import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section
      className="relative z-10 box-border h-auto w-full pt-48 pb-32"
      aria-labelledby="impacto-heading"
    >
      <header className="sr-only">
        <h1 id="impacto-heading">Impacto</h1>
      </header>

      <RotatedText text="Formas de Actuar" />
      <div className="relative w-full">
        <InfoContainer
          subtitle="Que Hacemos"
          title="Desarrollo y Liderazgo"
          description="Formamos jóvenes líderes que impulsan soluciones para transformar positivamente su entorno."
        />
      </div>
    </section>
  );
}
