import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="relative z-10 box-border h-auto w-full pt-48 pb-32">
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
