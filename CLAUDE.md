# fiscalite-entrepreneur.fr — CLAUDE.md

## Repo
GitHub : https://github.com/Benjaminhofman/simulator-platform
Netlify : simulateurplateforme.netlify.app → fiscalite-entrepreneur.fr

## Stack
HTML/JS statique — pas de framework, pas de build step
Netlify Forms pour le formulaire contact
Police : Plus Jakarta Sans (titres) + Inter (corps)

## Fichiers principaux
- index.html — page d'accueil, bibliothèque de simulateurs
- about.html — page à propos + formulaire contact
- og-image.jpg — image partage social 1200x630
- photo.jpg — photo profil
- sitemap.xml / robots.txt / _redirects / netlify.toml

## Simulateurs
- Auto-entrepreneur vs SARL/SASU → https://simul-auto.netlify.app/
- Régime foncier optimal → https://urls.fr/5LomTD
- Taxe PUMa → https://taxepuma.netlify.app/
- Arbitrage sortie d'associé → https://simulateur-patrimonial.onrender.com/

## Règles
- Toujours lire le fichier avant de modifier
- Prompt max 5-6 lignes
- git add -A && git commit && git push origin main à chaque fin de tâche
- Ne jamais toucher og-image.jpg, photo.jpg, _redirects sans confirmation
- URLs canoniques : fiscalite-entrepreneur.fr (pas simulateurplateforme.netlify.app)
