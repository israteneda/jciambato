interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionHeader({ subtitle, title, description }: SectionHeaderProps) {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <div className="absolute top-20 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
          <div className="text-jci-gray after:bg-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap uppercase after:absolute after:top-1.5 after:-left-42.5 after:h-px after:w-40 after:content-['']">
            {subtitle}
          </div>
        </div>
      </div>

      <div className="relative md:ml-44">
        <header className="mt-20 md:max-w-xl">
          <h2 className="text-jci-black text-left text-4xl leading-[1.17] font-bold tracking-normal not-italic md:max-w-117.5 md:text-5xl">
            {title}
          </h2>
          <div className="mt-8">
            <p className="text-jci-black flex flex-col gap-3 text-left text-base leading-[1.78] font-normal tracking-normal not-italic md:max-w-117.5">
              {description}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}