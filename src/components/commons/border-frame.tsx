import clsx from "clsx";

interface BorderFrameProps {
  isScrolled: boolean;
}

export default function BorderFrame({ isScrolled }: BorderFrameProps) {
  return (
    <div
      className={clsx(
        "absolute inset-0 z-10 transform border-gray-50 transition-all duration-400",
        isScrolled ? "border-[22px] md:border-[55px]" : "border-0"
      )}
      aria-hidden="true"
      role="presentation"
    />
  );
}
