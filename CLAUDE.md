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
- blog.html — page blog, liste des articles (cards)
- blog/ — articles (1 fichier .html) + images de couverture (.png)
- og-image.jpg — image partage social 1200x630
- photo.jpg — photo profil
- sitemap.xml / robots.txt / _redirects / netlify.toml

## Simulateurs
- Auto-entrepreneur vs SARL/SASU → https://simul-auto.netlify.app/
- Régime foncier optimal → https://urls.fr/5LomTD
- Taxe PUMa → https://taxepuma.netlify.app/
- Arbitrage sortie d'associé → https://simulateur-patrimonial.onrender.com/

## Blog
- Articles et images dans blog/ ; liens absolus /blog/xxx.html et /blog/xxx.png
- Nouvel article = card dans blog.html (tags + titre + description + date + lien)
  ajoutée APRÈS la dernière card, + entrée dans sitemap.xml (priority 0.7, monthly)
- Image de couverture : <img> juste après le <h1> de l'article
  style="width:100%;border-radius:12px;margin:24px 0 32px;"
- Lien « Blog » présent dans la nav et le footer de toutes les pages

## Règles
- Toujours lire le fichier avant de modifier
- Prompt max 5-6 lignes
- git add -A && git commit && git push origin main à chaque fin de tâche
- Ne jamais toucher og-image.jpg, photo.jpg, _redirects sans confirmation
- URLs canoniques : fiscalite-entrepreneur.fr (pas simulateurplateforme.netlify.app)
