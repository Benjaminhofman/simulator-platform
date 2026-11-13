#!/usr/bin/env node
// Génère le fichier _headers au moment du build Netlify pour protéger tout le site
// par mot de passe (Basic-Auth), sans que le mot de passe soit stocké dans le dépôt.
//
// - Lit la variable d'environnement BASIC_AUTH au format identifiant:motdepasse
//   (à définir dans Netlify > Project configuration > Environment variables).
// - Si elle est absente ou invalide : échec du build (exit 1), pour ne jamais publier
//   un site non protégé.
// - Si un _headers existe déjà, ses autres règles sont conservées.
//
// Les journaux de déploiement étant publics, ce script n'affiche JAMAIS la valeur
// de BASIC_AUTH, ni un extrait, ni le contenu de _headers.
'use strict';

const fs = require('fs');
const path = require('path');

const PUBLISH_DIR = __dirname; // dossier publié = racine du projet (publish = ".")
const HEADERS_FILE = path.join(PUBLISH_DIR, '_headers');
const BEGIN = '# >>> generate-headers.js : protection par mot de passe (ne pas modifier) >>>';
const END = '# <<< generate-headers.js <<<';

function fail(message) {
  console.error(`[generate-headers] ERREUR : ${message}`);
  process.exit(1);
}

const value = process.env.BASIC_AUTH;

if (value === undefined || value.trim() === '') {
  fail('la variable d\'environnement BASIC_AUTH est absente ou vide. ' +
       'Définissez-la dans Netlify (Project configuration > Environment variables) ' +
       'au format identifiant:motdepasse. Déploiement interrompu pour ne pas publier un site non protégé.');
}

const sep = value.indexOf(':');
const user = sep > 0 ? value.slice(0, sep) : '';
const pass = sep > 0 ? value.slice(sep + 1) : '';

if (!user || !pass) {
  fail('BASIC_AUTH doit être au format identifiant:motdepasse (identifiant et mot de passe non vides).');
}
if (/\s/.test(value)) {
  fail('BASIC_AUTH ne doit contenir ni espace ni retour à la ligne.');
}

// Règles existantes, sans un éventuel bloc généré lors d'un build précédent.
let existing = '';
if (fs.existsSync(HEADERS_FILE)) {
  existing = fs.readFileSync(HEADERS_FILE, 'utf8').replace(/\r\n/g, '\n');
  const b = existing.indexOf(BEGIN);
  const e = existing.indexOf(END);
  if (b !== -1 && e !== -1 && e > b) {
    existing = existing.slice(0, b) + existing.slice(e + END.length);
  }
  existing = existing.replace(/^\s*\n/, '').replace(/\n{3,}/g, '\n\n').trimEnd();
}

// Règle Basic-Auth sur toutes les URL, placée en tête du fichier.
const block = [BEGIN, '/*', `  Basic-Auth: ${value}`, END].join('\n');
const output = existing ? `${block}\n\n${existing}\n` : `${block}\n`;

try {
  const tmp = `${HEADERS_FILE}.tmp`;
  fs.writeFileSync(tmp, output, { encoding: 'utf8', mode: 0o600 });
  fs.renameSync(tmp, HEADERS_FILE);
} catch (err) {
  fail(`impossible d'écrire le fichier _headers (${err.code || 'erreur inconnue'}).`);
}

console.log('[generate-headers] OK : fichier _headers généré, protection par mot de passe activée sur /*.');
