# Skill : Ajouter une vidéo tuto sur fiscalite-entrepreneur.fr

## Informations fixes
- Bucket R2 : fiscalite-videos
- URL base R2 : https://pub-14910f5b50c64720b262e2fa6bc465e1.r2.dev/
- Repo : Benjaminhofman/simulator-platform
- Site : https://fiscalite-entrepreneur.fr

## Variables à récupérer avant de commencer
- NOM_VIDEO : nom du fichier mp4 (ex: holding.mp4)
- NOM_MINIATURE : nom du fichier png (ex: holding.png)
- TITRE : titre de la vidéo (ex: Simulateur Holding Immobilier)
- DESCRIPTION : description courte
- SLUG : identifiant URL (ex: holding)
- LIEN_SIMULATEUR : URL du simulateur correspondant
- DATE : date du jour au format YYYY-MM-DD

## Étape 1 — Créer tutos/{SLUG}.html
Structure identique aux pages existantes (ex: tutos/holding.html) :
- Balises meta + og:image avec NOM_MINIATURE
- VideoObject JSON-LD avec name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl
- Header nav : Simulateurs / Tutos / Blog
- Breadcrumb : Accueil › Tutoriels › {TITRE}
- Balise <video> avec controls, poster={NOM_MINIATURE}, source={NOM_VIDEO}
- Section "Ce que vous apprendrez" avec 3-4 points
- Section "À qui s'adresse ce simulateur"
- CTA box bleue avec lien vers {LIEN_SIMULATEUR}
- Footer standard

## Étape 2 — Ajouter card dans tutos.html
Insérer en PREMIÈRE position dans la grille, AVANT la première card existante :
- Titre H2 cliquable → /tutos/{SLUG}.html
- Description courte
- Balise <video> avec poster et source
- Lien "Voir le tuto complet →" vers /tutos/{SLUG}.html

## Étape 3 — Ajouter dans sitemap.xml
Avant la balise </urlset> :
```xml
<url>
  <loc>https://fiscalite-entrepreneur.fr/tutos/{SLUG}.html</loc>
  <lastmod>{DATE}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Étape 4 — Commit et indexation
- Commit : feat: ajout tuto vidéo {TITRE}
- Aller dans Google Search Console → Inspection de l'URL
- Coller : https://fiscalite-entrepreneur.fr/tutos/{SLUG}.html
- Cliquer Demander l'indexation
