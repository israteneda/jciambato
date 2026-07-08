import Image from "next/image";

interface BackgroundImageProps {
  image: string;
  alt?: string;
}

export default function BackgroundImage({ image, alt = "Imagen de fondo" }: BackgroundImageProps) {
  return (
    <figure className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="relative h-full w-full overflow-hidden bg-white">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full bg-transparent object-cover"
        />
      </div>

      {/* Fondo Oscuro */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
    </figure>
  );
}
