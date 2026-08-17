import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CondicionesUso() {
  return (
    <Section aria-label="Condiciones de Uso">
      <Container>
        <header>
          <h1 className="text-jci-black max-w-3xl text-left text-2xl font-bold md:leading-[1.33] lg:text-5xl">
            Condiciones de Uso
          </h1>

          <time className="text-jci-teal mt-8 block text-xl font-bold italic" dateTime="2026-07">
            Julio, 2026
          </time>
        </header>

        <div className="mt-16">
          <section>
            <div className="text-jci-black max-w-2xl text-left text-lg leading-[1.78] font-normal">
              <div className="flex flex-col gap-5">
                <section>
                  <div className="flex flex-col gap-10">
                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">Alcance</h4>
                      <p>
                        Estas Condiciones de Uso regulan el acceso y uso del sitio web de JCI
                        Ambato, incluyendo sus contenidos, servicios y funcionalidades. Nos
                        reservamos el derecho de modificar estas condiciones en cualquier momento,
                        publicando los cambios en esta página con la fecha de actualización.
                      </p>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        1. Propiedad Intelectual
                      </h4>
                      <ul className="my-2 space-y-3">
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            <strong>Contenidos:</strong> Los textos, imágenes, logotipos, diseños y
                            demás contenidos del sitio web son propiedad de JCI Ambato o han sido
                            cedidos con autorización por JCI Ecuador y JCI Internacional, a través
                            de sus departamentos de comunicación. Estos contenidos están protegidos
                            por las leyes de propiedad intelectual de Ecuador y tratados
                            internacionales.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            <strong>Uso Permitido:</strong> Los contenidos solo podrán utilizarse
                            con fines informativos relacionados con las actividades de JCI Ambato.
                            Queda estrictamente prohibida su reproducción, distribución,
                            modificación o uso para fines comerciales o no autorizados sin el
                            consentimiento previo por escrito.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            <strong>Autorización:</strong> Para solicitar permiso de uso de
                            cualquier contenido, contáctenos en{" "}
                            <a
                              href="mailto:ambato@jciecuador.com"
                              className="text-jci-teal font-bold"
                            >
                              ambato@jciecuador.com
                            </a>
                          </span>
                        </li>
                      </ul>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        2. Uso Adecuado del Sitio
                      </h4>
                      <ul className="my-2 space-y-3">
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            <strong>Prohibiciones:</strong> Está expresamente prohibido utilizar el
                            sitio web para fines ilegales, contrarios a la moral, las buenas
                            costumbres o que puedan dañar la imagen, reputación o intereses de JCI
                            Ambato. Esto incluye, entre otros, la usurpación de identidad,
                            falsificación, competencia desleal o explotación no autorizada de
                            contenidos.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            <strong>Conducta del Usuario:</strong> Los usuarios se comprometen a
                            utilizar el sitio de manera responsable, respetando las leyes aplicables
                            y los derechos de terceros.
                          </span>
                        </li>
                      </ul>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        3. Consecuencias Legales
                      </h4>
                      <p>
                        JCI Ambato se reserva el derecho de iniciar acciones legales contra
                        cualquier persona o entidad que:
                      </p>
                      <ul className="my-2 space-y-3">
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            Realice copias no autorizadas, reproduzca o utilice indebidamente los
                            contenidos del sitio.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            Participe en actividades que constituyan usurpación, falsificación,
                            competencia desleal o cualquier otro acto punible bajo la legislación
                            ecuatoriana, incluyendo el Código Orgánico Integral Penal (COIP).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            Cause daño al sitio web, sus servicios o la imagen de JCI Ambato.
                          </span>
                        </li>
                      </ul>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        4. Enlaces a Terceros
                      </h4>
                      <p>
                        El sitio web puede contener enlaces a sitios de terceros (por ejemplo, JCI
                        Ecuador o JCI Internacional). JCI Ambato no se responsabiliza por el
                        contenido, políticas o prácticas de privacidad de estos sitios. Le
                        recomendamos revisar las condiciones de uso y políticas de privacidad de
                        dichos sitios antes de interactuar con ellos.
                      </p>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        5. Limitación de Responsabilidad
                      </h4>
                      <ul className="my-2 space-y-3">
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            JCI Ambato no garantiza la disponibilidad ininterrumpida del sitio web
                            ni la ausencia de errores técnicos.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jci-teal mr-3" aria-hidden="true">
                            •
                          </span>
                          <span>
                            No nos responsabilizamos por daños derivados del uso indebido del sitio
                            o de la información proporcionada, salvo que se demuestre dolo o
                            negligencia grave por parte de JCI Ambato.
                          </span>
                        </li>
                      </ul>
                    </article>

                    <article>
                      <h4 className="text-jci-black mb-4 text-2xl font-bold">
                        6. Modificaciones al Sitio
                      </h4>
                      <p>
                        Nos reservamos el derecho de modificar, suspender o discontinuar cualquier
                        aspecto del sitio web, incluyendo su contenido o funcionalidades, sin previo
                        aviso.
                      </p>
                    </article>
                  </div>
                </section>

                <address className="not-italic">
                  <p>
                    Cámara Junior Internacional del Ecuador, Capítulo Ambato. <br />
                    Zona Distrital de la provincia de Tungurahua, municipio de Ambato, Ecuador{" "}
                    <br />
                    Inscrita en el Registro con el número 000 000. <br />
                    <a href="mailto:ambato@jciecuador.com" className="text-jci-teal font-bold">
                      ambato@jciecuador.com
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}
