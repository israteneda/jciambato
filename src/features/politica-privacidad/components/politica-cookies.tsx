import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function PoliticaCookies() {
  return (
    <Section aria-label="Política de Cookies">
      <Container>
        <header>
          <h1 className="text-jci-black max-w-3xl text-left text-2xl font-bold md:leading-[1.33] lg:text-5xl">
            Política de Cookies
          </h1>

          <time className="text-jci-teal mt-8 block text-xl font-bold italic" dateTime="2026-07">
            Julio, 2026
          </time>
          <p className="text-jci-black mt-2 text-lg">
            Al utilizar este sitio web, usted acepta el uso de cookies conforme a esta Política de
            Cookies. Si no está de acuerdo con el uso de cookies, le recomendamos ajustar la
            configuración de su navegador o abstenerse de usar nuestro sitio web.
          </p>
        </header>

        <div className="mt-16">
          <section>
            <div className="mt-8">
              <div className="text-jci-black max-w-2xl text-left text-lg leading-[1.78] font-normal">
                <section>
                  <div className="flex flex-col gap-10">
                    <article>
                      <h4 className="text-jci-black mb-4 text-3xl font-bold">Alcance</h4>
                      Esta Política de Cookies explica qué son las cookies, cómo las utilizamos, los
                      tipos de cookies que empleamos, los fines para los que las usamos y cómo puede
                      gestionarlas.
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        1. ¿Qué son las Cookies?
                      </h4>
                      <p>
                        Las cookies son pequeños archivos de texto que un sitio web almacena en su
                        navegador o dispositivo cuando lo visita. Estos archivos permiten recordar
                        información sobre sus preferencias, hábitos de navegación o dispositivo,
                        mejorando la funcionalidad y personalización del sitio web.
                      </p>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        2. ¿Para qué Utilizamos las Cookies?
                      </h4>
                      <p>
                        Las cookies están diseñadas para recopilar información a través del
                        navegador, reteniendo información relacionada con las preferencias del
                        visitante.
                      </p>
                      <ul className="my-2 space-y-3">
                        <li className="flex items-start">
                          <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            Mejorar la experiencia de navegación, haciéndola más rápida y eficiente.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            Recordar sus preferencias para evitar que tenga que configurarlas
                            repetidamente.
                          </span>
                        </li>
                      </ul>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        3. Tipos de Cookies que Utilizamos
                      </h4>
                      <p>
                        Existen diferentes tipos de cookies, cada una con un propósito específico:
                      </p>

                      <div className="mt-5 flex flex-col gap-5">
                        <article>
                          <h4 className="text-jci-navy font-bold">
                            1. Cookies Esenciales (Permanentes)
                          </h4>
                          <p>
                            Estas cookies son necesarias para el funcionamiento del sitio web.
                            Permiten la navegación y el acceso a áreas seguras. Sin estas cookies,
                            algunos servicios no estarían disponibles.
                          </p>
                        </article>

                        <article>
                          <h4 className="text-jci-navy font-bold">2. Cookies de Sesión</h4>
                          <p>
                            Cookies temporales que se eliminan al cerrar el navegador. Se utilizan
                            para analizar patrones de tráfico y mejorar la experiencia de navegación
                            en tiempo real.
                          </p>
                        </article>

                        <article>
                          <h4 className="text-jci-navy font-bold">3. Cookies Estadísticas</h4>
                          <p>
                            Recopilan datos anónimos sobre cómo los usuarios interactúan con el
                            sitio web, ayudándonos a mejorar su funcionalidad.
                          </p>
                        </article>

                        <article>
                          <h4 className="text-jci-navy font-bold">4. Cookies Funcionales</h4>
                          <p>
                            Guardan sus preferencias (como idioma o región) para ofrecer una
                            experiencia personalizada sin necesidad de reconfigurar en cada visita.
                          </p>
                        </article>

                        <article>
                          <h4 className="text-jci-navy font-bold">5. Cookies de Terceros</h4>
                          <p>
                            Gestionadas por terceros para medir el éxito de aplicaciones o la
                            eficacia de publicidad externa. Estas cookies están sujetas a las
                            políticas de privacidad de los terceros.
                          </p>
                        </article>
                      </div>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        4. ¿Cómo Gestionar las Cookies?
                      </h4>
                      <p>
                        Usted tiene control total sobre las cookies. Puede aceptarlas, rechazarlas o
                        eliminarlas a través de la configuración de su navegador. La mayoría de los
                        navegadores permiten:
                      </p>
                      <ul className="my-2 space-y-3">
                        <li className="flex items-start">
                          <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>Ver las cookies almacenadas y eliminarlas individualmente.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>Bloquear cookies de terceros o de todos los sitios.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>Configurar notificaciones cuando se recibe una cookie.</span>
                        </li>
                      </ul>
                      <p>
                        Para gestionar las cookies, consulte las opciones de configuración en el
                        menú "Privacidad" o "Preferencias" de su navegador. Tenga en cuenta que
                        deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web,
                        limitando el acceso a algunas características o servicios.
                      </p>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        5. ¿Cómo Protegemos su Privacidad?
                      </h4>
                      <p>
                        Nos comprometemos a proteger su privacidad. Las cookies que recopilan datos
                        personales se gestionan conforme a nuestra Política de Privacidad,
                        cumpliendo con las normativas aplicables, como el Reglamento General de
                        Protección de Datos (RGPD).
                      </p>
                      <p className="mt-5">
                        Si tiene preguntas sobre esta Política de Cookies, contáctenos a través de{" "}
                        <a href="mailto:ambato@jciecuador.com" className="text-jci-teal font-bold">
                          ambato@jciecuador.com
                        </a>
                      </p>
                    </article>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}
