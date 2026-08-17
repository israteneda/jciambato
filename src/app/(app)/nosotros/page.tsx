import {
  Bienvenida,
  Historia,
  MisionVision,
  Presentacion,
  Valores,
  Opinion,
} from "@/features/nosotros/components";

export const metadata = {
  title: "Sobre Nosotros — Liderazgo y Oportunidades",
  description:
    "Conoce nuestra misión, visión, valores y la historia de JCI Ambato en el desarrollo de líderes juveniles.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Bienvenida />
      <div className="h-160" aria-hidden="true"></div>
      <div className="bg-jci-bg absolute top-0 h-full w-full translate-y-[99.9vh]"></div>
      <Presentacion />
      <MisionVision />
      <Valores />
      <Opinion />
      <Historia />
    </>
  );
}
