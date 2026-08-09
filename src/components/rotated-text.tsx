interface RotatedTextProps {
  text: string;
}

export default function RotatedText({ text }: RotatedTextProps) {
  return (
    <div className="hidden md:block">
      <span
        className="text-jci-gray pointer-events-none absolute top-1/2 left-6.75 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform text-[11px] leading-15 font-semibold tracking-[1px] whitespace-nowrap uppercase select-none"
        aria-hidden="true"
        role="presentation"
      >
        {text}
      </span>
    </div>
  );
}
