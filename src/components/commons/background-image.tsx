import Image from "next/image";

interface BackgroundImageProps {
    image: string;
}

export default function BackgroundImage({ image }: BackgroundImageProps) {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="relative bg-white w-full h-full overflow-hidden" >
                <Image
                    src={image}
                    alt="Texto alternativo"
                    fill
                    className="absolute h-full w-full inset-0 bg-transparent object-cover"
                />
            </div>

            {/* Fondo Oscuro */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        </div>
    );
}
