// Componente para el fondo con imagen
export const BackgroundImage = () => (
  <div
    className="absolute inset-0 w-full h-5/6 bg-cover bg-center z-10"
    style={{
      backgroundImage: "url('/images/secciones/nosotros.webp')",
    }}
    aria-label="Imagen de presentación de la organización"
    aria-hidden="true"
  />
);
