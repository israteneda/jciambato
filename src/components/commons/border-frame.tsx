import clsx from "clsx";

interface BorderFrameProps {
    isScrolled: boolean;
}

export default function BorderFrame({ isScrolled }: BorderFrameProps) {
    return (
        <div
            className={clsx(
                "absolute inset-0 border-gray-50 transition-all duration-300 transform z-10",
                isScrolled ? "border-[22px] lg:border-[55px]" : "border-0"
            )}
            aria-hidden="true"
        />

    );
}
