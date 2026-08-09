import clsx from "clsx";

interface BorderFrameProps {
  isScrolled: boolean;
}

export default function BorderFrame({ isScrolled }: BorderFrameProps) {
  return (
    <div
      className={clsx(
        "border-jci-bg absolute inset-0 transform transition-all duration-400",
        isScrolled ? "border-22 md:border-55" : "border-0"
      )}
      aria-hidden="true"
      role="presentation"
    />
  );
}
