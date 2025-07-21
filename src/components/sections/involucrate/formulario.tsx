"use client";

import { useState } from "react";
import BackgroundText from "@/components/commons/background-text";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import Link from "next/link";

export default function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [promoAccepted, setPromoAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  // Validación simple de email
  const isEmailValid = email.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isButtonDisabled =
    !name || !email || !isEmailValid || !phone || !message || !termsAccepted || !promoAccepted;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(true);

    if (!isButtonDisabled) {
      setIsSubmitting(true);
      setSubmissionStatus("idle");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            termsAccepted,
            promoAccepted,
          }),
        });

        if (response.ok) {
          setSubmissionStatus("success");
          // Limpiar el formulario
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setTermsAccepted(false);
          setPromoAccepted(false);
          setShowError(false);
        } else {
          const errorData = await response.json();
          console.error("Error al enviar el formulario:", errorData);
          setSubmissionStatus("error");
        }
      } catch (error) {
        console.error("Error de red:", error);
        setSubmissionStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="relative z-[1] overflow-hidden" aria-labelledby="formulario-heading">
      <div className="mt-8 md:mt-16">
        <BackgroundText
          textoPrimario="Hablemos"
          textoSecundario=""
          numberLeft={0.15}
          numberRight={0.1}
          numberLeftMobile={0.05}
          numberRightMobile={0.03}
        />
      </div>

      <div className="mt-16 md:mt-60">
        <div className="bg-gray-200">
          <div className="relative z-[1] bg-transparent max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <article className="flex-1 md:pr-16 box-border mx-8 min-w-[calc(50%-100px)]">
                <div className="py-20 md:py-32">
                  <header>
                    <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-bold tracking-normal">
                      Estamos aquí para ayudarte
                    </div>

                    <div className="mt-6">
                      <h2
                        id="formulario-heading"
                        className="text-4xl lg:text-5xl font-bold not-italic text-left leading-[1.17] tracking-normal text-black max-w-[370px]"
                      >
                        Te esperamos con los brazos abiertos
                      </h2>
                    </div>

                    <div className="mt-6">
                      <p className="text-[18px] font-normal not-italic leading-[32px] tracking-normal text-[#323232] text-left max-w-[370px]">
                        Si deseas contactarnos, por favor completa el formulario o envíanos un
                        correo a{" "}
                        <a
                          href="mailto:jciambato@jciecuador.com"
                          className="text-jci-aqua underline"
                          aria-label="Enviar correo electrónico a jciambato@jciecuador.com"
                        >
                          jciambato@jciecuador.com
                        </a>
                      </p>
                    </div>
                  </header>
                </div>
              </article>

              <div className="flex-1 min-w-[calc(50%+100px)]">
                {/* Formulario */}
                <div className="w-full h-full box-border px-8 md:px-24 py-16 bg-white md:-translate-y-24">
                  <div className="text-sm font-bold text-jci-aqua uppercase tracking-wider mb-8">
                    Envíanos un mensaje
                  </div>

                  {/* Mensajes de estado */}
                  {submissionStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            ¡Mensaje enviado exitosamente!
                          </p>
                          <p className="text-sm text-green-700 mt-1">
                            Te hemos enviado un email de confirmación y nuestro equipo se pondrá en
                            contacto contigo pronto.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submissionStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-red-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-red-800">
                            Error al enviar el mensaje
                          </p>
                          <p className="text-sm text-red-700 mt-1">
                            Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente o
                            contactanos directamente.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form
                    className="space-y-6"
                    aria-label="Formulario de contacto"
                    onSubmit={handleSubmit}
                  >
                    <fieldset className="space-y-6" disabled={isSubmitting}>
                      <legend className="sr-only">Información personal</legend>

                      <Input
                        label="Tu Nombre"
                        variant="underlined"
                        placeholder="Escribe tu nombre"
                        value={name}
                        onValueChange={setName}
                        classNames={{ label: "text-sm font-semibold text-gray-500" }}
                        isRequired
                        aria-required="true"
                      />
                      <Input
                        label="Tu Email"
                        variant="underlined"
                        type="email"
                        placeholder="Escribe tu email"
                        value={email}
                        onValueChange={setEmail}
                        isInvalid={showError && !isEmailValid}
                        errorMessage="Por favor, introduce un email válido."
                        classNames={{ label: "text-sm font-semibold text-gray-500" }}
                        isRequired
                        aria-required="true"
                      />
                      <Input
                        label="Teléfono"
                        variant="underlined"
                        type="tel"
                        placeholder="Escribe tu número de teléfono"
                        value={phone}
                        onValueChange={setPhone}
                        classNames={{ label: "text-sm font-semibold text-gray-500" }}
                        isRequired
                        aria-required="true"
                      />
                      <Input
                        label="Mensaje"
                        variant="underlined"
                        placeholder="¿Cómo podemos ayudarte?"
                        value={message}
                        onValueChange={setMessage}
                        classNames={{ label: "text-sm font-semibold text-gray-500" }}
                        isRequired
                        aria-required="true"
                      />
                    </fieldset>

                    <fieldset className="pt-6 space-y-5" disabled={isSubmitting}>
                      <legend className="sr-only">Términos y condiciones</legend>

                      <div className="flex items-start">
                        <Switch
                          id="terms"
                          aria-label="Aceptar términos y condiciones"
                          isSelected={termsAccepted}
                          onValueChange={setTermsAccepted}
                        />
                        <label htmlFor="terms" className="ml-3 text-xs text-gray-600">
                          He leído y acepto los{" "}
                          <Link href="/politica-privacidad" className="underline font-semibold">
                            términos y condiciones
                          </Link>{" "}
                          de la política de privacidad de JCI Ambato.
                        </label>
                      </div>
                      <div className="flex items-start">
                        <Switch
                          id="promo"
                          aria-label="Aceptar mensajes promocionales"
                          isSelected={promoAccepted}
                          onValueChange={setPromoAccepted}
                        />
                        <label htmlFor="promo" className="ml-3 text-xs text-gray-600">
                          Acepto el procesamiento de mis datos para recibir mensajes promocionales y
                          propuestas comerciales de JCI Ambato.
                        </label>
                      </div>
                    </fieldset>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isButtonDisabled || isSubmitting}
                        className="bg-jci-aqua text-white font-semibold rounded-md transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        {...(isButtonDisabled && { "aria-describedby": "form-error" })}
                      >
                        {isSubmitting ? "Enviando..." : "Postula ahora"}
                      </Button>
                      {showError && isButtonDisabled && !isSubmitting && (
                        <p id="form-error" className="text-sm text-red-600 mt-2">
                          Por favor, completa todos los campos requeridos y acepta los términos.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
