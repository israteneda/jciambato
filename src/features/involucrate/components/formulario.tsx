"use client";

import { useState } from "react";
import BackgroundText from "@/components/background-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel, FieldGroup, FieldError } from "@/components/ui/field";
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
    <section className="relative z-1 overflow-hidden" aria-labelledby="formulario-heading">
      <div className="mt-8 md:mt-16">
        <BackgroundText primary="Hablemos" />
      </div>

      <div className="mt-16 bg-[#e8e8e8] md:mt-60">
        <div className="">
          <div className="relative z-1 mx-auto max-w-6xl bg-transparent">
            <div className="flex flex-col lg:flex-row">
              <article className="mx-8 box-border min-w-[calc(50%-100px)] flex-1 md:mx-20 md:pr-0 lg:mx-auto">
                <div className="py-20 md:mb-24 md:py-24">
                  <header>
                    <div className="text-jci-gray text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
                      Estamos aquí para ayudarte
                    </div>

                    <div className="mt-6">
                      <h2
                        id="formulario-heading"
                        className="text-jci-black max-w-[370px] text-left text-4xl leading-[1.17] font-bold tracking-normal not-italic lg:text-5xl"
                      >
                        Te esperamos con los brazos abiertos
                      </h2>
                    </div>

                    <div className="mt-6">
                      <p className="text-jci-black max-w-[370px] text-left text-[18px] leading-[32px] font-normal tracking-normal not-italic">
                        Si deseas contactarnos, por favor completa el formulario o envíanos un
                        correo a{" "}
                        <a
                          href="mailto:jciambato@jciecuador.com"
                          className="text-jci-teal underline"
                          aria-label="Enviar correo electrónico a jciambato@jciecuador.com"
                        >
                          jciambato@jciecuador.com
                        </a>
                      </p>
                    </div>
                  </header>
                </div>
              </article>

              <div className="min-w-[calc(50%+100px)] flex-1 md:mx-20 lg:mx-auto">
                {/* Formulario */}
                <div className="box-border h-full w-full bg-white p-10 py-14 md:-translate-y-24 md:p-16 lg:p-20">
                  <div className="text-jci-teal mb-8 text-sm font-bold tracking-wider uppercase">
                    Envíanos un mensaje
                  </div>

                  {/* Mensajes de estado */}
                  {submissionStatus === "success" && (
                    <div className="mb-6 rounded-md border border-green-200 bg-green-50 p-4">
                      <div className="flex">
                        <div className="shrink-0">
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
                          <p className="mt-1 text-sm text-green-700">
                            Te hemos enviado un email de confirmación y nuestro equipo se pondrá en
                            contacto contigo pronto.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submissionStatus === "error" && (
                    <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4">
                      <div className="flex">
                        <div className="shrink-0">
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
                          <p className="mt-1 text-sm text-red-700">
                            Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente o
                            contactanos directamente.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form aria-label="Formulario de contacto" onSubmit={handleSubmit}>
                    <fieldset className="space-y-6" disabled={isSubmitting}>
                      <legend className="sr-only">Información personal</legend>

                      <FieldGroup>
                        <Field data-invalid={showError && !name ? true : undefined}>
                          <FieldLabel htmlFor="name">Tu Nombre</FieldLabel>
                          <Input
                            id="name"
                            placeholder="Escribe tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            aria-required="true"
                          />
                        </Field>

                        <Field data-invalid={showError && !isEmailValid ? true : undefined}>
                          <FieldLabel htmlFor="email">Tu Email</FieldLabel>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Escribe tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-invalid={showError && !isEmailValid ? true : undefined}
                            required
                            aria-required="true"
                          />
                          {showError && !isEmailValid && (
                            <FieldError>Por favor, introduce un email válido.</FieldError>
                          )}
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="phone">Teléfono</FieldLabel>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Escribe tu número de teléfono"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            aria-required="true"
                          />
                        </Field>

                        <Field data-invalid={showError && !message ? true : undefined}>
                          <FieldLabel htmlFor="message">Mensaje</FieldLabel>
                          <Textarea
                            id="message"
                            placeholder="¿Cómo podemos ayudarte?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="min-h-[120px]"
                            required
                            aria-required="true"
                          />
                        </Field>
                      </FieldGroup>
                    </fieldset>

                    <fieldset className="space-y-5 pt-6" disabled={isSubmitting}>
                      <legend className="sr-only">Términos y condiciones</legend>

                      <FieldGroup data-slot="checkbox-group">
                        <Field orientation="horizontal">
                          <Checkbox
                            id="terms"
                            aria-label="Aceptar términos y condiciones"
                            checked={termsAccepted}
                            onCheckedChange={setTermsAccepted}
                            className="data-checked:border-jci-teal data-checked:bg-jci-teal data-checked:text-white"
                          />
                          <FieldLabel htmlFor="terms" className="text-xs font-normal text-gray-600">
                            <p>
                              He leído y acepto los{" "}
                              <Link
                                href="/politica-privacidad"
                                className="font-semibold hover:underline"
                              >
                                términos y condiciones
                              </Link>{" "}
                              de la política de privacidad de JCI Ambato.
                            </p>
                          </FieldLabel>
                        </Field>

                        <Field orientation="horizontal">
                          <Checkbox
                            id="promo"
                            aria-label="Aceptar mensajes promocionales"
                            checked={promoAccepted}
                            onCheckedChange={setPromoAccepted}
                            className="data-checked:border-jci-teal data-checked:bg-jci-teal data-checked:text-white"
                          />
                          <FieldLabel htmlFor="promo" className="text-xs font-normal text-gray-600">
                            Acepto el procesamiento de mis datos para recibir mensajes promocionales
                            y propuestas comerciales de JCI Ambato.
                          </FieldLabel>
                        </Field>
                      </FieldGroup>
                    </fieldset>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isButtonDisabled || isSubmitting}
                        className="bg-jci-teal rounded-md font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
                        {...(isButtonDisabled && { "aria-describedby": "form-error" })}
                      >
                        {isSubmitting ? "Enviando..." : "Postula ahora"}
                      </Button>
                      {showError && isButtonDisabled && !isSubmitting && (
                        <p id="form-error" className="mt-2 text-sm text-red-600">
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
