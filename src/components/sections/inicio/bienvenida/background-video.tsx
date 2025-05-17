// Componente para el video de fondo
export const BackgroundVideo = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    aria-hidden="true"
    aria-label="Video de presentación de la organización"
    className="absolute inset-0 w-full h-full object-cover z-10"
    src="/videos/rotary.mp4"
  >
    {/* WebM es más eficiente y carga más rápido en la mayoría de los navegadores modernos. */}
    <source src="/videos/rotary.webm" type="video/webm" />
    <source src="/videos/rotary.mp4" type="video/mp4" />
    {/* Si el video no se carga, se muestra una imagen en su lugar. */}
    <img
      alt="Imagen de presentación de la organización"
      className="absolute inset-0 w-full h-full object-cover"
      src="/images/fallback.jpg"
    />
  </video>
);
