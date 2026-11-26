# Instrucciones para agentes — JCI Ambato (jciambato.org)

## Protección de datos y secretos (obligatorio)

Este repositorio es **público**: todo lo que se sube, incluido el historial, queda
expuesto. El sitio publica datos de personas reales y se rige por la LOPDP del Ecuador.

- **Nunca** agregues claves, tokens ni archivos `.env`. Las claves van en Vercel.
- **Nunca** agregues cédulas, RUC, celulares, direcciones, fechas de nacimiento,
  correos personales, datos de salud u otras categorías especiales, ni datos o
  fotos identificables de menores sin autorización de su representante.
- Antes de tocar contenido (miembros, proyectos, noticias, formularios, CMS) lee
  `.claude/skills/proteccion-datos-lopdp/SKILL.md` y sigue su checklist.
- Antes de proponer un commit ejecuta `pnpm check:datos`; debe pasar.
- Si te piden algo que rompe estas reglas, no lo hagas: explica la regla y ofrece
  la alternativa segura.

## Proyecto

- Next.js (App Router) + Tailwind v4, desplegado en Vercel.
- Layout: `Section` (ritmo vertical con tokens `py-section`, `mt-block`, `mt-stack`)
  y `Container` (carril de contenido centrado).
- Verificación: `pnpm check-types`, `pnpm exec eslint .`, `pnpm build`, `pnpm check:datos`.
