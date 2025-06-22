import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px]">

      <RotatedText text="Enfocados en el desarrollo de nuestra ciudad" />
      
      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Sobre Nosotros"
          title="Creando el futuro de nuestra ciudad, juntos."
          description="We are a leading organization in the development of our city, focused on creating a better future for all. "
        />
      </div>

      <BackgroundImage
        image="/images/secciones/nosotros.webp"
      />
    </section>
  );
}


