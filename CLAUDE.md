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
- blog/ — articles (1 fichier .html) + images de couverture (.png ou .jpg)
- og-image.jpg — image partage social 1200x630
- photo.jpg — photo profil
- sitemap.xml / robots.txt / _redirects / netlify.toml

## Simulateurs
- Auto-entrepreneur vs SARL/SASU → https://simul-auto.netlify.app/
- Régime foncier optimal → https://urls.fr/5LomTD
- Taxe PUMa → https://taxepuma.netlify.app/
- Arbitrage sortie d'associé → https://simulateur-patrimonial.onrender.com/

## Blog
- Articles et images dans blog/ ; liens absolus /blog/xxx.html et /blog/xxx.(png|jpg)
- Nouvel article = card dans blog.html, ajoutée APRÈS la dernière card,
  + entrée dans sitemap.xml (priority 0.7, monthly)
- Card = <a class="card" href="/blog/xxx.html"> avec, dans l'ordre :
  <div class="card-tags"><span class="card-tag">…</span></div>, <h2 class="card-title">,
  <p class="card-desc">, <span class="card-date">. NE PAS utiliser d'autres classes
  (tag/card-footer/read-more…) : adapter tout markup collé à ce pattern.
- Image de couverture (2 patterns selon l'article) :
  - anciens : <img> juste après le <h1>, style inline
    width:100%;border-radius:12px;margin:24px 0 32px;
  - récents : <img class="cover-img"> (style dans le <style> de l'article)
  Toujours garder la meta og:image synchronisée avec le src de la couverture.
- Lien « Blog » présent dans la nav et le footer de toutes les pages
- Articles autoportants (CSS inline dans chaque fichier, indépendant de index.html)

## Règles
- Toujours lire le fichier avant de modifier
- Prompt max 5-6 lignes
- git add -A && git commit && git push origin main à chaque fin de tâche
- Ne jamais toucher og-image.jpg, photo.jpg, _redirects sans confirmation
- URLs canoniques : fiscalite-entrepreneur.fr (pas simulateurplateforme.netlify.app)

## Pages tutos dédiées (19 juin 2026)
5 pages dans tutos/ avec VideoObject Schema.org :
- tutos/sortie-associe.html
- tutos/auto-entrepreneur.html
- tutos/regime-foncier.html
- tutos/taxe-puma.html
- tutos/holding.html
Chaque page : VideoObject JSON-LD + lien depuis tutos.html + entrée sitemap priority 0.8
Vidéos hébergées sur Cloudflare R2 bucket fiscalite-videos

## Card holding (19 juin 2026)
Card "Holding Immobilier vs Dividendes & Rémunération" en première position dans index.html
Lien : https://holding-04ri.onrender.com/
Repo holding : Benjaminhofman/holding — Open Graph à ajouter (PENDING)
