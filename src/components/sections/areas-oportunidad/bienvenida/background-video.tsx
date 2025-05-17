// Componente para el fondo con imagen
export const BackgroundImage = () => (
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center z-10"
    style={{
      backgroundImage: "url('/images/secciones/areas-oportunidad.jpeg')",
    }}
    aria-label="Imagen de presentación de la organización"
    aria-hidden="true"
  />
);
