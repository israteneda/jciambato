import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {

  return (
    <section className="inset-0 w-full fixed overflow-hidden items-center box-border h-screen pb-[80px]" aria-labelledby="miembros-heading">
      <header className="sr-only">
        <h1 id="miembros-heading">Miembros JCI Ambato</h1>
      </header>

      <RotatedText text="Membresía JCI Ambato" />

      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Miembros"
          title="Miembros JCI Ambato"
          description="Apasionados por su desarrollo personal y por construir un mundo mejor."
        />
      </div>

      <BackgroundImage
        image="/images/secciones/miembros.webp"
        alt="Imagen de fondo de miembros de JCI Ambato"
      />
    </section>
  );
}
