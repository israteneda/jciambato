import BackgroundText from "@/components/background-text";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Presentacion() {
  return (
    <Section>
      <div className="overflow-hidden">
        <Container>
          <div>
            <div className="text-jci-navy text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
              Liderazgo con historia
            </div>
            <div className="mt-8">
              <h1 className="text-left text-4xl leading-[1.1] font-light tracking-[-1px] not-italic md:max-w-[75%] md:text-6xl lg:text-[65px]">
                A lo largo de más de 50 años, JCI Ambato ha fomentado el desarrollo de líderes en la
                ciudad.
              </h1>
            </div>
            <div className="mt-16">
              <Button
                size="lg"
                className="border-jci-blue text-jci-blue group relative overflow-hidden bg-transparent hover:bg-transparent"
                aria-label="Conoce nuestra misión y visión"
              >
                <Link href="/nosotros">
                  <span className="bg-jci-blue absolute inset-0 -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0" />
                  <span className="relative transition-colors duration-300 group-hover:text-white">
                    Nuestra misión y visión
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-16">
        <BackgroundText primary="JCI AMBATO" secondary="LIDERAZGO" inset={25} />
      </div>
    </Section>
  );
}
