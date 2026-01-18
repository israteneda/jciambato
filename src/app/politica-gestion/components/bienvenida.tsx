"use client";
import { InfoContainer, RowScroll } from "@/components/commons";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border h-[760px] w-full items-center overflow-hidden pb-[80px]">
      <div className="relative w-full pb-32 pt-48">
        <InfoContainer subtitle="Acerca de" title="Política de Gestión" description="" />
      </div>

      {/* Botón de scroll */}
      <RowScroll />
    </section>
  );
}
