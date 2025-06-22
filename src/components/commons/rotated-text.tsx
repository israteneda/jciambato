interface RotatedTextProps {
  text: string;
}

export default function RotatedText({ text }: RotatedTextProps) {
  return (
    <div className="hidden md:block">
      <span className="absolute top-1/2 left-[30px] text-[#aeaeae] text-[11px] font-semibold z-[3] leading-[60px] tracking-[1px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
        {text}
      </span>
    </div>
  );
}