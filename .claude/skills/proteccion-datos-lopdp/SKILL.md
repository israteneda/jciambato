---
name: proteccion-datos-lopdp
description: Reglas obligatorias de protección de datos personales (LOPDP Ecuador) y secretos para este repo público. Úsalo SIEMPRE antes de agregar o editar contenido (miembros, proyectos, noticias, formularios, imágenes), datos de personas, variables de entorno o integraciones con un CMS (Keystatic, Sanity).
---

# Protección de datos personales y secretos — JCI Ambato

Este repositorio es **público** y su historial también. Todo lo que se suba
queda expuesto para siempre, aunque después se borre. Además el contenido que
se publica en jciambato.org trata datos de personas reales, regulados por la
**Ley Orgánica de Protección de Datos Personales (LOPDP)** del Ecuador
(Registro Oficial, Quinto Suplemento 459, 26 de mayo de 2021).

Estas reglas no se negocian. Si alguien pide algo que las rompe, no lo hagas:
explica qué regla aplica y propone la alternativa segura.

## 1. Secretos: nunca en el repo

- Claves, tokens, contraseñas, IDs privados, webhooks secretos, llaves privadas:
  **solo** como variables de entorno en Vercel (Settings → Environment Variables).
- Nunca crees ni versiones `.env`, `.env.production`, etc. Solo `.env.example`
  con los **nombres** de las variables y valores vacíos.
- `NEXT_PUBLIC_*` se expone al navegador: jamás pongas un secreto ahí.
- Si un secreto llegó a un commit (aunque sea en una rama o PR): **rotarlo de
  inmediato** en el servicio que lo emitió. Reescribir el historial no basta en
  un repo público.

## 2. Qué es un dato personal (LOPDP)

Cualquier dato que identifica o hace identificable a una persona natural,
directa o indirectamente: nombre, cédula, foto, dirección, teléfono, correo,
etc. Publicarlos requiere una base legal; en este sitio, normalmente el
**consentimiento** del titular, que debe ser libre, específico, informado e
inequívoco.

## 3. Qué SÍ se puede publicar

Solo lo que el titular aceptó mostrar y que es necesario para el sitio:

| Dato                                                           | Condición                                       |
| -------------------------------------------------------------- | ----------------------------------------------- |
| Nombre y cargo en JCI                                          | Miembro activo o ex-miembro que aceptó aparecer |
| Foto de perfil / foto en eventos                               | Con autorización de la persona                  |
| Correo **institucional** (`@jciecuador.com`, `@jciambato.org`) | Ligado al cargo                                 |
| Redes sociales                                                 | Solo las que la persona entregó para el sitio   |
| Testimonios / citas                                            | Con autorización y textual                      |

## 4. Qué NUNCA se publica ni se guarda en el repo o en el CMS

- Cédula, RUC de persona natural, pasaporte, número de cuenta, tarjeta.
- Celular o teléfono personal, dirección domiciliaria, fecha de nacimiento,
  edad exacta, correo personal (Gmail, Hotmail, etc.) de miembros.
- **Categorías especiales de datos**: salud (diagnósticos, discapacidad, tipo
  de sangre), datos biométricos o genéticos, origen étnico, religión, ideología
  o afiliación política, orientación sexual o identidad de género, pasado
  judicial, condición migratoria, situación socioeconómica.
- **Niñas, niños y adolescentes**: no publicar fotos donde un menor sea
  identificable ni sus nombres sin autorización escrita de su representante
  legal. Ante la duda, no se publica o se difumina el rostro.
- Datos que llegan por el formulario de contacto: se procesan por correo
  (Resend) y **no** se guardan en el repo, en el CMS público ni en logs.

## 5. Contenido en el CMS (Keystatic o Sanity)

- Tanto el contenido de Keystatic (archivos en este repo) como un dataset de
  Sanity en plan gratis son **públicos**. Aplican las mismas reglas de arriba.
- Modela los esquemas para que **no existan** campos de datos prohibidos
  (no crear campos `cedula`, `telefono`, `fechaNacimiento`, `direccion`).
- Campos de miembro permitidos: `nombre`, `cargo`, `periodo`, `rol`,
  `foto`, `correoInstitucional`, `redes`, `autorizaPublicacion` (booleano
  obligatorio; si es `false`, no se muestra).
- Cuando un miembro pida dejar de aparecer: borrar su entrada y su foto. Avisar
  que en el historial de Git puede seguir existiendo y, si lo exige, evaluar
  limpieza del historial con el equipo.

## 6. Verificación automática

Antes de proponer un commit, ejecuta:

```bash
pnpm check:datos          # todo el repo
node scripts/check-datos-personales.mjs ruta/al/archivo
```

El mismo chequeo corre en GitHub Actions en cada PR y push a `main`, junto con
gitleaks para secretos. Si falla, **no** se fusiona.

Detecta: cédulas y RUC ecuatorianos válidos (módulo 10), celulares
ecuatorianos, correos personales, términos de categorías especiales en
contenido, tokens y llaves privadas, y archivos `.env` versionados.

### Falsos positivos

Solo si el dato es público por decisión de su titular (nunca cédulas, salud,
menores ni secretos):

- Registrar en `.datos-permitidos`: `ruta/archivo:texto-exacto   # motivo`, o
- Comentar en la misma línea: `// datos-permitidos: <motivo>`.

Toda excepción debe explicarse en el PR.

## 7. Checklist para cualquier cambio de contenido

- [ ] ¿Hay algún dato de una persona? ¿Aceptó publicarlo?
- [ ] ¿Algún dato de la sección 4? → quitarlo.
- [ ] ¿Aparecen menores identificables en fotos? → autorización o no se publica.
- [ ] ¿Se agregó una clave o variable? → a Vercel, y solo su nombre en `.env.example`.
- [ ] `pnpm check:datos` en verde.
