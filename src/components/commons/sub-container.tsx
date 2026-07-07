interface InfoContainerProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function InfoContainer({ subtitle, title, description }: InfoContainerProps) {
  return (
    <section>
      <div className="hidden md:block">
        <div className="absolute top-20 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
          <div
            className="relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap text-jci-gray uppercase not-italic"
            aria-hidden="true"
          >
            {subtitle}
            <span className="absolute top-1.5 -left-42.5 h-px w-40 bg-jci-gray content-['']"></span>
          </div>
        </div>
      </div>

      <div className="md:ml-36">
        <div className="flex">
          <header className="md:max-w-xl">
            <div className="mt-20">
              <h2 className="text-left text-4xl leading-[1.17] font-bold tracking-normal text-jci-black not-italic md:text-5xl">
                {title}
              </h2>
            </div>
            <div className="mt-8">
              <div className="text-jci-black flex flex-col gap-3 text-left text-base leading-[1.78]">
                {description}
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
