import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
    return (
        <section className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px]" aria-labelledby="proyectos-heading">
            <header className="sr-only">
                <h1 id="proyectos-heading">Proyectos</h1>
            </header>

            <RotatedText text="Dentro de nuestros proyectos" />

            <div className="relative w-full pt-48 pb-32">
                <InfoContainer
                    subtitle="Proyectos"
                    title="Nuestros Proyectos"
                    description="Cuando nos unimos, creamos un impacto más grande. Juntos, construimos un mañana mejor."
                />
            </div>

            <BackgroundImage
                image="/images/secciones/proyecto-feria-libro.webp"
                alt="Imagen de fondo de proyectos de JCI Ambato"
            />
        </section>
    );

}