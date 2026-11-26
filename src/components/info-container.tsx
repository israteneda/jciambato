import { Container } from "./layout/container";

interface InfoContainerProps {
  subtitle: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
}

export default function InfoContainer({
  subtitle,
  title,
  description,
  tone = "light",
}: InfoContainerProps) {
  const subtitleColor = tone === "light" ? "text-jci-yellow" : "text-jci-teal";
  const textColor = tone === "light" ? "text-gray-200" : "text-jci-black";

  return (
    <div className="relative z-10">
      <Container>
        <header>
          <h2
            className={`${subtitleColor} text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic`}
          >
            {subtitle}
          </h2>

          <div className="mt-3">
            <h1
              className={`${textColor} max-w-240 text-left text-3xl leading-none font-bold tracking-[-0.5px] normal-case not-italic md:text-6xl lg:text-[72px]`}
            >
              {title}
            </h1>
          </div>
        </header>

        <div className="mt-9">
          <p
            className={`${textColor} max-w-xl text-left text-xl leading-[1.45] font-normal tracking-normal not-italic`}
          >
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
