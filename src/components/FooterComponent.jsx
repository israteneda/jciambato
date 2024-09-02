import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

export function FooterComponent() {
  return (
    <footer className="flex w-full flex-col">
      {/* Parte superior del footer: Logo y descripción */}
      <div className="max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start">
              <Link href="/" title="JCI Ambato - Página Principal">
                <Image
                  src="/jci.png"
                  alt="JCI Ambato Logo"
                  width={50}
                  height={50}
                  priority="true" // Prioriza la carga de la imagen
                  className="hidden sm:block"
                />
              </Link>
              <span className="text-medium font-medium">
                Cámara Junior Internacional - Capítulo Ambato
              </span>
            </div>
            <p className="text-small text-default-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              repudiandae quasi vero.
            </p>
            <div className="flex space-x-6">LOGOS</div>
          </div>

          {/* Opciones */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <h3 className="text-small font-semibold text-gray-800">
                    JCI Ambato
                  </h3>
                  <ul className="mt-6 space-y-4 text-gray-500">
                    <li>
                      <Link href="#">Nosotros</Link>
                    </li>
                    <li>
                      <Link href="#">Equipo Local</Link>
                    </li>
                    <li>
                      <Link href="#">Política y Privacidad</Link>
                    </li>
                    <li>
                      <Link href="#">Contáctanos</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <div>
                  <h3 className="text-small font-semibold text-gray-800">
                    Áreas de Oportunidad
                  </h3>
                  <ul className="mt-6 space-y-4 text-gray-500">
                    <li>Negocios y Emprendimiento</li>
                    <li>Cooperación Internacional</li>
                    <li>Desarrollo Individual</li>
                    <li>Imácto en la Comunidad</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <h3 className="text-small font-semibold text-gray-800">
                    JCI Ambato
                  </h3>
                  <ul className="mt-6 space-y-4 text-gray-500">
                    <li>
                      <Link href="#">Nosotros</Link>
                    </li>
                    <li>
                      <Link href="#">Equipo Local</Link>
                    </li>
                    <li>
                      <Link href="#">Política y Privacidad</Link>
                    </li>
                    <li>
                      <Link href="#">Contáctanos</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <div>
                  <h3 className="text-small font-semibold text-gray-800">
                    Áreas de Oportunidad
                  </h3>
                  <ul className="mt-6 space-y-4 text-gray-500">
                    <li>Negocios y Emprendimiento</li>
                    <li>Cooperación Internacional</li>
                    <li>Desarrollo Individual</li>
                    <li>Imácto en la Comunidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <Divider className="shrink-0 bg-divider border-none w-full h-divider mt-16 sm:mt-20 lg:mt-24" />

        {/* Derechos de autor */}
        <div className="flex flex-wrap justify-between gap-2 pt-8">
          <p className="text-small text-default-400">
            © 2024 Levting | Cámara Junior Internacional - Capítulo Ambato.
            Todos los Derechos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
