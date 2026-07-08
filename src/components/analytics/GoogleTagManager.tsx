import Script from "next/script";

/**
 * Google Tag Manager (GTM)
 *
 * Permite rastrear:
 * - Visitantes y páginas vistas
 * - Eventos de usuario (clicks, formularios, etc.)
 * - Conversiones y objetivos
 * - Integración con Google Analytics, Facebook Pixel, etc.
 *
 * Si no necesitas analytics, puedes remover este componente
 */

const GTM_ID = "GTM-TK3VTGZ5";

export function GoogleTagManager() {
  return (
    <>
      {/* GTM Script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      {/* GTM NoScript - Fallback para navegadores sin JavaScript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
