interface InfoContainerProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function InfoContainer({ subtitle, title, description }: InfoContainerProps) {
  return (
    <section>
      <div className="hidden md:block">
        <div className="absolute top-[80px] left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
          <div
            className="relative text-[rgb(174,174,174)] leading-none text-[11px] font-medium not-italic tracking-[2px] whitespace-nowrap uppercase"
            aria-hidden="true"
          >
            {subtitle}
            <span className="absolute top-[6px] left-[-170px] w-[160px] h-[1px] bg-[rgb(174,174,174)] content-['']"></span>
          </div>
        </div>
      </div>

      <div className="md:ml-36">
        <div className="flex">
          <header className="md:max-w-xl">
            <div className="mt-20">
              <h2 className="text-4xl md:text-5xl font-bold not-italic text-left leading-[1.17] tracking-normal text-black">
                {title}
              </h2>
            </div>
            <div className="mt-8">
              <div className="flex flex-col gap-3 text-left text-base leading-[1.78] text-jci-black">
                {description}
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
