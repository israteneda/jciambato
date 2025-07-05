interface RotatedTextProps {
  text: string;
}

export default function RotatedText({ text }: RotatedTextProps) {
  return (
    <div className="hidden lg:block">
      <span
        className="absolute top-1/2 left-[27px] text-[#aeaeae] text-[11px] font-semibold z-20 leading-[60px] tracking-[1px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap"
        aria-hidden="true"
        role="presentation"
      >
        {text}
      </span>
    </div>
  );
}