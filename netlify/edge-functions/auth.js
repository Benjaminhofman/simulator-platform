// Protection de tout le site par mot de passe (HTTP Basic) — Netlify Edge Function (Deno, sans dépendance).
//
// - Identifiants attendus : variable d'environnement BASIC_AUTH au format identifiant:motdepasse,
//   définie dans Netlify (Project configuration > Environment variables). Aucune valeur dans le dépôt.
// - Variable absente ou mal formée : 503, la requête n'est jamais transmise au site.
// - Identifiants corrects : la requête continue normalement (context.next()).
// - Sinon : 401 avec WWW-Authenticate.
// - Ne journalise jamais l'en-tête Authorization ni la variable.

const encoder = new TextEncoder();

const UNAVAILABLE_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-store",
};

const UNAUTHORIZED_HEADERS = {
  "WWW-Authenticate": 'Basic realm="Acces restreint", charset="UTF-8"',
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-store",
};

function unavailable() {
  return new Response("Service temporairement indisponible.", { status: 503, headers: UNAVAILABLE_HEADERS });
}

function unauthorized() {
  return new Response("Authentification requise", { status: 401, headers: UNAUTHORIZED_HEADERS });
}

// Valeur attendue valide : un identifiant non vide, un « : », un mot de passe non vide,
// sans caractère de contrôle (retour à la ligne, tabulation…).
function isWellFormed(value) {
  if (typeof value !== "string") return false;
  const sep = value.indexOf(":");
  if (sep <= 0 || sep === value.length - 1) return false;
  return !/[\u0000-\u001f\u007f]/.test(value);
}

// Décode « Basic <base64> » en octets (sans interprétation), ou null si l'en-tête est invalide.
function decodeBasic(header) {
  if (!header) return null;
  const match = /^\s*Basic\s+([A-Za-z0-9+/=_-]+)\s*$/i.exec(header);
  if (!match) return null;
  try {
    const binary = atob(match[1].replace(/-/g, "+").replace(/_/g, "/"));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  } catch {
    return null;
  }
}

// Comparaison en temps constant : on compare les empreintes SHA-256 (longueur fixe),
// octet par octet, sans sortie anticipée. La durée ne dépend ni du contenu ni de la longueur saisie.
async function constantTimeEqual(aBytes, bBytes) {
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", aBytes),
    crypto.subtle.digest("SHA-256", bBytes),
  ]);
  const x = new Uint8Array(a);
  const y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

export default async function auth(request, context) {
  let expected;
  try {
    expected = Netlify.env.get("BASIC_AUTH");
  } catch {
    return unavailable();
  }
  if (!isWellFormed(expected)) return unavailable();

  let ok = false;
  try {
    const provided = decodeBasic(request.headers.get("authorization"));
    // Les identifiants envoyés par le navigateur sont encodés en UTF-8 (charset="UTF-8"),
    // on les compare donc aux octets UTF-8 de la valeur attendue.
    const reference = encoder.encode(expected);
    ok = await constantTimeEqual(provided ?? new Uint8Array(0), reference) && provided !== null;
  } catch {
    ok = false;
  }

  return ok ? context.next() : unauthorized();
}
