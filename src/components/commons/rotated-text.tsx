interface RotatedTextProps {
  text: string;
}

export default function RotatedText({ text }: RotatedTextProps) {
  return (
    <div className="hidden md:block">
      <span
        className="absolute left-[27px] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform select-none whitespace-nowrap text-[11px] font-semibold uppercase leading-[60px] tracking-[1px] text-[#aeaeae]"
        aria-hidden="true"
        role="presentation"
      >
        {text}
      </span>
    </div>
  );
}
