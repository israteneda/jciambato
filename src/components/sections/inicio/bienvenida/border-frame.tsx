import clsx from "clsx";

// Componente para el marco que se dibuja en la pantalla
interface BorderFrameProps {
    isScrolled: boolean;
}

export const BorderFrame = ({ isScrolled }: BorderFrameProps) => (
    <div
        className={clsx(
            "absolute inset-0 border-gray-50 z-10 transition-all duration-300 transform",
            isScrolled ? "border-[22px] lg:border-[60px]" : "border-0"
        )}
        aria-hidden="true"
    />
);