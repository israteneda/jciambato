#!/usr/bin/env node
/**
 * Revisión de datos personales y secretos (LOPDP Ecuador).
 *
 * Recorre los archivos versionados del repo y falla (exit 1) si encuentra algo
 * que no debe publicarse: cédulas/RUC ecuatorianos válidos, celulares, correos
 * personales, términos de categorías especiales de datos o claves/tokens.
 *
 * Uso:
 *   node scripts/check-datos-personales.mjs            # todo el repo
 *   node scripts/check-datos-personales.mjs a.ts b.md  # solo esos archivos
 *
 * Falsos positivos: agregar una línea en `.datos-permitidos` con
 *   ruta/al/archivo:texto-exacto-permitido   # motivo
 * o comentar en la misma línea del código: `datos-permitidos: <motivo>`.
 * Ver .claude/skills/proteccion-datos-lopdp/SKILL.md
 */
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync, statSync } from "node:fs";
import { extname } from "node:path";

const TEXT_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".mdx",
  ".mdoc",
  ".yml",
  ".yaml",
  ".txt",
  ".csv",
  ".html",
  ".css",
  ".svg",
  ".toml",
  ".env",
]);

/** Archivos/rutas que no se revisan (dependencias, lockfiles, este propio detector). */
const IGNORADOS = [
  /^node_modules\//,
  /^\.next\//,
  /^pnpm-lock\.yaml$/,
  /^package-lock\.json$/,
  /^scripts\/check-datos-personales\.mjs$/,
  /^scripts\/__tests__\//,
  /^\.claude\/skills\/proteccion-datos-lopdp\//,
  /^\.datos-permitidos$/,
];

/** Dominios de correo institucionales permitidos (cargos públicos de JCI). */
const DOMINIOS_INSTITUCIONALES = [
  "jciecuador.com",
  "jciambato.org",
  "jciambato.com",
  "tenpisoft.com",
  "jci.cc",
];
const DOMINIOS_PERSONALES = [
  "gmail.com",
  "hotmail.com",
  "hotmail.es",
  "outlook.com",
  "outlook.es",
  "live.com",
  "yahoo.com",
  "yahoo.es",
  "icloud.com",
  "protonmail.com",
  "proton.me",
];

// ---------- validadores ----------

/** Cédula ecuatoriana: provincia 01–24 o 30, tercer dígito < 6, módulo 10. */
function esCedula(n) {
  if (!/^\d{10}$/.test(n)) return false;
  const prov = Number(n.slice(0, 2));
  if (!((prov >= 1 && prov <= 24) || prov === 30)) return false;
  if (Number(n[2]) >= 6) return false;
  const coef = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let suma = 0;
  for (let i = 0; i < 9; i++) {
    let v = Number(n[i]) * coef[i];
    if (v >= 10) v -= 9;
    suma += v;
  }
  const verif = (10 - (suma % 10)) % 10;
  return verif === Number(n[9]);
}

/** RUC de persona natural: cédula válida + 001. */
const esRucNatural = (n) => /^\d{13}$/.test(n) && n.endsWith("001") && esCedula(n.slice(0, 10));

// ---------- reglas ----------

const REGLAS = [
  {
    id: "cedula",
    desc: "Cédula ecuatoriana válida",
    re: /(?<![\d.])\d{10}(?![\d.])/g,
    valida: esCedula,
  },
  {
    id: "ruc",
    desc: "RUC de persona natural (cédula + 001)",
    re: /(?<![\d.])\d{13}(?![\d.])/g,
    valida: esRucNatural,
  },
  {
    id: "celular",
    desc: "Número de celular ecuatoriano",
    re: /(?:\+?593[\s.-]?9|\b09)\d(?:[\s.-]?\d){7}\b/g,
  },
  {
    id: "correo-personal",
    desc: "Correo personal (Gmail, Hotmail, Outlook, Yahoo…)",
    re: /[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[A-Za-z]{2,})/g,
    valida: (_m, g) => DOMINIOS_PERSONALES.includes(g[1].toLowerCase()),
  },
  {
    id: "dato-sensible",
    desc: "Término de categoría especial de datos (salud, origen, creencias, judicial…)",
    re: /\b(n[uú]mero de c[eé]dula|c[eé]dula de identidad|fecha de nacimiento|tipo de sangre|grupo sangu[ií]neo|diagn[oó]stico|historia cl[ií]nica|discapacidad del|orientaci[oó]n sexual|antecedentes penales|pasado judicial|condici[oó]n migratoria|afiliaci[oó]n pol[ií]tica|direcci[oó]n domiciliaria|domicilio de)\b/gi,
    soloContenido: true,
  },
  {
    id: "secreto",
    desc: "Clave, token o credencial",
    re: /\b(sk-[A-Za-z0-9_-]{20,}|sk_live_[A-Za-z0-9]{16,}|AKIA[0-9A-Z]{16}|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|re_[A-Za-z0-9]{8}_[A-Za-z0-9]{16,}|xox[baprs]-[A-Za-z0-9-]{10,}|AIza[0-9A-Za-z_-]{35}|eyJhbGciOi[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,})/g,
  },
  {
    id: "llave-privada",
    desc: "Llave privada",
    re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g,
  },
];

/** Rutas donde vive contenido publicable (para reglas de solo contenido). */
const esContenido = (f) =>
  /^(src\/(features|content|app)|content|public)\//.test(f) && !/\/politica-privacidad\//.test(f);

// ---------- allowlist ----------

function cargarPermitidos() {
  if (!existsSync(".datos-permitidos")) return [];
  return readFileSync(".datos-permitidos", "utf8")
    .split("\n")
    .map((l) => l.replace(/\s+#.*$/, "").trim())
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf(":");
      return { archivo: l.slice(0, i), texto: l.slice(i + 1) };
    });
}

// ---------- main ----------

function archivosDelRepo() {
  const out = execFileSync(
    "git",
    ["ls-files", "-z", "--cached", "--others", "--exclude-standard"],
    {
      encoding: "utf8",
    }
  );
  return out.split("\0").filter(Boolean);
}

const args = process.argv.slice(2);
const archivos = (args.length ? args : archivosDelRepo()).filter(
  (f) =>
    existsSync(f) &&
    statSync(f).isFile() &&
    !IGNORADOS.some((re) => re.test(f)) &&
    (TEXT_EXT.has(extname(f).toLowerCase()) || /(^|\/)\.env/.test(f))
);

const permitidos = cargarPermitidos();
const hallazgos = [];

for (const f of archivos) {
  if (/(^|\/)\.env(?!\.example$)/.test(f)) {
    hallazgos.push({
      f,
      linea: 1,
      regla: "env",
      desc: "Archivo .env versionado: las claves van en Vercel",
      texto: f,
    });
    continue;
  }
  const lineas = readFileSync(f, "utf8").split("\n");
  lineas.forEach((linea, i) => {
    if (/datos-permitidos:/.test(linea)) return;
    for (const r of REGLAS) {
      if (r.soloContenido && !esContenido(f)) continue;
      for (const m of linea.matchAll(r.re)) {
        const texto = m[0];
        if (r.valida && !r.valida(texto, m)) continue;
        if (r.id === "correo-personal" && DOMINIOS_INSTITUCIONALES.includes(m[1].toLowerCase()))
          continue;
        if (permitidos.some((p) => p.archivo === f && linea.includes(p.texto))) continue;
        hallazgos.push({ f, linea: i + 1, regla: r.id, desc: r.desc, texto });
      }
    }
  });
}

if (hallazgos.length === 0) {
  console.log(`✓ Sin datos personales ni secretos (${archivos.length} archivos revisados).`);
  process.exit(0);
}

const enmascarar = (t) => (t.length <= 6 ? "***" : `${t.slice(0, 3)}…${t.slice(-2)}`);
console.error(`✗ Se encontraron ${hallazgos.length} posibles datos personales o secretos:\n`);
for (const h of hallazgos) {
  const muestra = h.regla === "dato-sensible" ? h.texto : enmascarar(h.texto);
  console.error(`  ${h.f}:${h.linea}  [${h.regla}] ${h.desc}: ${muestra}`);
  if (process.env.GITHUB_ACTIONS) {
    console.log(
      `::error file=${h.f},line=${h.linea},title=Protección de datos (${h.regla})::${h.desc}`
    );
  }
}
console.error(
  "\nQuita el dato o, si es público por decisión de su titular, regístralo en .datos-permitidos con el motivo." +
    "\nGuía: .claude/skills/proteccion-datos-lopdp/SKILL.md"
);
process.exit(1);
