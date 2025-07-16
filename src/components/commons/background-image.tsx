import Image from "next/image";

interface BackgroundImageProps {
    image: string;
    alt?: string;
}

export default function BackgroundImage({ image, alt = "Imagen de fondo" }: BackgroundImageProps) {
    return (
        <figure className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="relative bg-white w-full h-full overflow-hidden" >
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="absolute h-full w-full inset-0 bg-transparent object-cover"
                />
            </div>

            {/* Fondo Oscuro */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        </figure>
    );
}
