import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {

  return (
    <section className="inset-0 w-full fixed overflow-hidden items-center box-border h-screen pb-[80px]">

      <RotatedText text="Dentro de nuestras áreas de oportunidad" />

      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Miembros"
          title="Miembros JCI Ambato"
          description="JCI Ambato es una organización de jóvenes líderes y emprendedores que buscan crear un impacto positivo en la sociedad."
        />
      </div>

      <BackgroundImage
        image="/images/secciones/miembros.webp"
      />
    </section>
  );
}
