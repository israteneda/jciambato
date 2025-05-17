// Componente para el video de fondo
export const BackgroundVideo = () => (
  <video
    src="/videos/rotary.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-10"
    aria-label="Video de presentación de la organización"
    aria-hidden="true"
  >
    {/* WebM es más eficiente y carga más rápido en la mayoría de los navegadores modernos. */}
    <source src="/videos/rotary.webm" type="video/webm" />
    <source src="/videos/rotary.mp4" type="video/mp4" />
    {/* Si el video no se carga, se muestra una imagen en su lugar. */}
    <img
      src="/images/fallback.jpg"
      alt="Imagen de presentación de la organización"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </video>
);
