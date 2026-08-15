import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function DeclaracionPrivacidad() {
  return (
    <Section aria-label="Declaración de Privacidad y Protección de Datos Personales">
      <Container>
        <header>
          <h1 className="text-jci-black max-w-3xl text-left text-2xl font-bold md:leading-[1.33] lg:text-5xl">
            Declaración de Privacidad y Protección de Datos Personales
          </h1>

          <time className="text-jci-teal mt-8 block text-xl font-bold italic" dateTime="2026-07">
            Julio, 2026
          </time>
        </header>

        <div className="mt-16">
          <section>
            <h2 className="text-jci-black mb-4 text-left text-3xl leading-tight font-bold">
              Declaración de Privacidad y Protección de Datos Personales
            </h2>
            <div>
              <div className="text-jci-black max-w-2xl text-left text-lg leading-[1.78] font-normal">
                <div className="flex flex-col gap-5">
                  <p>
                    La Cámara Junior Internacional (JCI) Ecuador, Capítulo Ambato, en cumplimiento
                    de la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador, se
                    compromete a proteger la privacidad de sus miembros, aliados, visitantes y
                    usuarios de nuestro sitio web. Esta Política de Privacidad describe cómo
                    recopilamos, tratamos y protegemos sus datos personales.
                  </p>
                  <p>
                    Al utilizar nuestro sitio web (www.jciambato.org) o interactuar con JCI Ambato,
                    usted acepta el tratamiento de sus datos personales conforme a los términos
                    establecidos en esta política. Si no está de acuerdo, le recomendamos abstenerse
                    de usar nuestros servicios.
                  </p>
                </div>

                {/* Principios Fundamentales */}
                <div className="my-8 rounded-lg bg-blue-50 p-6">
                  <h3 className="text-jci-black mb-4 text-xl font-bold">
                    Principios Fundamentales
                  </h3>
                  <p className="mb-4">
                    La protección de la privacidad y de los datos personales es un compromiso
                    fundamental de JCI Ambato, basado en los siguientes principios para su
                    tratamiento:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                        •
                      </span>
                      <span>
                        El tratamiento de los datos personales se realiza de manera lícita, leal y
                        transparente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                        •
                      </span>
                      <span>
                        La recopilación de datos se realiza solo para fines debidamente
                        especificados, explícitos y legítimos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                        •
                      </span>
                      <span>
                        Los datos recopilados se limitan a lo estrictamente necesario y durante el
                        tiempo necesario
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                        •
                      </span>
                      <span>
                        Solo los miembros autorizados cuyas funciones así lo requieran tienen acceso
                        a los datos personales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                        •
                      </span>
                      <span>Los datos personales se tratan de forma confidencial y segura</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 flex flex-col gap-10">
                  {/* A */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      A. Definición de Datos Personales
                    </h4>

                    <p>
                      {" "}
                      De acuerdo con la LOPDP ecuatoriana, los datos personales son cualquier
                      información de cualquier naturaleza y en cualquier soporte concerniente a una
                      persona natural identificada o identificable. Se considera identificable a una
                      persona natural si puede ser identificada, directa o indirectamente, en
                      particular por referencia a un identificador como nombre, número de
                      identificación, datos de localización, identificadores electrónicos o uno o
                      más elementos específicos de identidad física, fisiológica, genética, mental,
                      económica, cultural o social.
                    </p>
                  </article>

                  {/* B */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      B. Responsable del Tratamiento
                    </h4>
                    <p>
                      <strong>JCI Ambato</strong> es la entidad responsable del tratamiento de los
                      datos personales que recopilamos. Como organización sin fines de lucro
                      dedicada al desarrollo del liderazgo juvenil, nos comprometemos a proteger la
                      privacidad y los derechos de los titulares de datos personales.
                    </p>
                  </article>

                  {/* C */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      C. Datos Personales que Recopilamos
                    </h4>
                    <p>
                      De acuerdo con la LOPDP ecuatoriana, recopilamos los siguientes tipos de datos
                      personales:
                    </p>
                    <ul className="my-2 space-y-3">
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Datos de identificación:</strong> nombres, apellidos, número de
                          cédula de identidad, fecha de nacimiento
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Datos de contacto:</strong> dirección de correo electrónico,
                          números telefónicos, dirección física
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Datos académicos y profesionales:</strong> formación académica,
                          experiencia laboral, habilidades y competencias
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Datos de navegación:</strong> información técnica del dispositivo,
                          dirección IP, cookies (cuando aplique)
                        </span>
                      </li>
                    </ul>
                  </article>

                  {/* D */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      D. Finalidades del Tratamiento
                    </h4>
                    <p>Sus datos personales serán tratados para las siguientes finalidades:</p>
                    <ul className="m-2 space-y-3">
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          Gestionar su membresía en JCI Ambato y mantener la relación institucional
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          Organizar y coordinar eventos, capacitaciones y actividades de desarrollo
                          de liderazgo
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          Comunicar información relevante sobre nuestras actividades y proyectos
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>Cumplir con obligaciones legales y reglamentarias aplicables</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio
                          web
                        </span>
                      </li>
                    </ul>
                  </article>

                  {/* E */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      E. Base Legal del Tratamiento
                    </h4>
                    <p>
                      El tratamiento de sus datos personales se fundamenta en las siguientes bases
                      legales establecidas en la LOPDP:
                    </p>
                    <ul className="m-2 space-y-3">
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Consentimiento:</strong> Su autorización previa, libre, informada
                          e inequívoca
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Ejecución de contrato:</strong> Para cumplir con la relación de
                          membresía o participación en actividades
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Interés legítimo:</strong> Para el desarrollo de nuestras
                          actividades institucionales
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Cumplimiento legal:</strong> Para satisfacer obligaciones legales
                          y reglamentarias
                        </span>
                      </li>
                    </ul>
                  </article>

                  {/* F */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      F. Derechos del Titular de Datos
                    </h4>
                    <p>Conforme a la LOPDP ecuatoriana, usted tiene los siguientes derechos:</p>
                    <ul className="m-2 space-y-3">
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos
                          sobre usted y cómo los tratamos
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho de rectificación:</strong> Solicitar la corrección de
                          datos inexactos o incompletos
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho de supresión:</strong> Solicitar la eliminación de sus
                          datos personales cuando sea procedente
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus
                          datos en ciertas circunstancias
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho de portabilidad:</strong> Recibir sus datos en formato
                          estructurado y transferirlos a otro responsable
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho de limitación:</strong> Solicitar la restricción del
                          tratamiento de sus datos
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho de revocación:</strong> Retirar su consentimiento en
                          cualquier momento
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Derecho a no ser objeto de decisiones automatizadas:</strong>{" "}
                          Solicitar intervención humana cuando las decisiones se basen en
                          tratamiento exclusivamente automatizado
                        </span>
                      </li>
                    </ul>
                  </article>

                  {/* G */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      G. Conservación de Datos
                    </h4>
                    <p>
                      Sus datos personales se conservarán únicamente durante el tiempo necesario
                      para cumplir con las finalidades para las que fueron recopilados, respetando
                      los plazos legales aplicables y nuestras políticas de retención documental. La
                      determinación de estos términos se basa en criterios de retención de
                      información que se definen y adecuan a cada tratamiento.
                    </p>
                  </article>

                  {/* H */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      H. Medidas de Seguridad
                    </h4>
                    <p>
                      JCI Ambato implementa medidas técnicas y organizativas apropiadas para
                      proteger sus datos personales contra:
                    </p>
                    <ul className="m-2 space-y-3">
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>Acceso no autorizado o uso indebido</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>Pérdida, alteración o destrucción accidental</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>Divulgación no autorizada</span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      JCI Ambato realizará una evaluación de impacto siempre que el tratamiento de
                      datos sea susceptible de entrañar un alto riesgo para los derechos y
                      libertades fundamentales de las personas naturales.
                    </p>
                  </article>

                  {/* I */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      I. Compartición de Datos
                    </h4>
                    <p>Sus datos personales pueden ser compartidos únicamente con:</p>
                    <ul className="m-2 space-y-3">
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>JCI Ecuador y JCI Internacional:</strong> Para el cumplimiento de
                          nuestras obligaciones como organización miembro de la red global JCI
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Proveedores de servicios:</strong> Solo cuando sea necesario para
                          el funcionamiento de nuestras actividades (ej: servicios informáticos,
                          legales)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-jci-teal mt-1 mr-3" aria-hidden="true">
                          •
                        </span>
                        <span>
                          <strong>Autoridades competentes:</strong> Cuando sea requerido por ley o
                          para cumplir obligaciones legales
                        </span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      <strong>
                        No vendemos, alquilamos ni comercializamos sus datos personales con
                        terceros.
                      </strong>
                    </p>
                  </article>

                  {/* J */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      J. Transferencias Internacionales
                    </h4>
                    <p>
                      En caso de que sea necesario transferir sus datos personales fuera del
                      Ecuador, JCI Ambato garantizará que dichas transferencias cumplan con los
                      estándares de protección establecidos en la LOPDP y se realicen únicamente
                      cuando sea estrictamente necesario para el cumplimiento de nuestras
                      actividades institucionales.
                    </p>
                  </article>

                  {/* K */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      K. Autoridad de Control
                    </h4>
                    <p>
                      Si considera que el tratamiento de sus datos personales no cumple con la
                      normativa aplicable, puede presentar una reclamación ante la Autoridad
                      Nacional de Protección de Datos Personales del Ecuador.
                    </p>
                  </article>

                  {/* L */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      L. Modificaciones a esta Política
                    </h4>
                    <p>
                      JCI Ambato se reserva el derecho de modificar esta Política de Privacidad en
                      cualquier momento. Los cambios serán publicados en nuestro sitio web con la
                      fecha de la última actualización. Le recomendamos revisar periódicamente esta
                      política para mantenerse informado sobre cómo protegemos su información.
                    </p>
                  </article>

                  {/* M */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">
                      M. Información Adicional
                    </h4>
                    <p>
                      Usted podrá solicitar información o aclaraciones sobre el tratamiento que JCI
                      Ambato lleva a cabo con respecto a sus datos personales, enviando su consulta
                      a través de los canales de contacto establecidos en esta política.
                    </p>
                  </article>

                  {/* N */}
                  <article>
                    <h4 className="text-jci-black mb-4 text-2xl font-bold">N. Contacto</h4>
                    <p>
                      Para cualquier consulta relacionada con esta Política de Privacidad o el
                      tratamiento de sus datos personales, puede contactarnos a través de:
                    </p>
                    <address className="mt-4 rounded-lg bg-white p-6 not-italic">
                      <p>
                        <strong>JCI Ambato</strong>
                      </p>
                      <p>
                        <a
                          href="mailto:jciambato@jciecuador.com"
                          className="text-jci-teal font-bold underline"
                        >
                          jciambato@jciecuador.com
                        </a>
                      </p>
                      <p>Ambato, Ecuador</p>
                    </address>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}
