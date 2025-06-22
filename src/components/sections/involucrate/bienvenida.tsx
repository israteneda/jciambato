import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {

  return (
    <section
      className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px]"
      aria-label="Bienvenida a Involúcrate"
      role="banner"
    >

      <RotatedText text="Atrévete a ser el cambio que quieres ver en el mundo" />

      <header className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Involúcrate"
          title="Empieza siendo Junior"
          description="¿Te atreves a ser el cambio que quieres ver en el mundo?"
        />
      </header>
    </section>
  );
}
