// Componente para el video de fondo
export const BackgroundVideo = () => (
  <div className="absolute inset-0">
    <video
      autoPlay
      className="w-full h-full object-cover"
      src="/videos/rotary.mp4"
      loop
      preload="auto"
      muted
      playsInline
    />

    {/* Fondo Oscuro */}
    <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
  </div>
);
