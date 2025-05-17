// Componente para el fondo con imagen
export const BackgroundImage = () => (
  <div
    aria-hidden="true"
    aria-label="Imagen de presentación de la organización"
    className="absolute inset-0 w-full h-full bg-cover bg-center z-10"
    style={{
      backgroundImage: "url('/images/secciones/nosotros.webp')",
    }}
  />
);
