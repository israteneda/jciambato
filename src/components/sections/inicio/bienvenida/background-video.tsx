import Image from "next/image";

// Componente para el video de fondo
export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        autoPlay
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      >
        <source src="/videos/rotary.webm" type="video/webm" />
        <source src="/videos/rotary.mp4" type="video/mp4" />
      </video>
      <Image
        alt="Imagen de presentación de la organización"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        priority
        src="/lideralider2.jpeg"
      />
    </div>
  );
}
