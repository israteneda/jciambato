interface InfoContainerProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function InfoContainer({ subtitle, title, description }: InfoContainerProps) {
  return (
    <section>
      <div className="hidden md:block">
        <div className="absolute left-0 top-[80px] -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
          <div
            className="relative whitespace-nowrap text-[11px] font-medium uppercase not-italic leading-none tracking-[2px] text-[rgb(174,174,174)]"
            aria-hidden="true"
          >
            {subtitle}
            <span className="absolute left-[-170px] top-[6px] h-[1px] w-[160px] bg-[rgb(174,174,174)] content-['']"></span>
          </div>
        </div>
      </div>

      <div className="md:ml-36">
        <div className="flex">
          <header className="md:max-w-xl">
            <div className="mt-20">
              <h2 className="text-left text-4xl font-bold not-italic leading-[1.17] tracking-normal text-black md:text-5xl">
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
