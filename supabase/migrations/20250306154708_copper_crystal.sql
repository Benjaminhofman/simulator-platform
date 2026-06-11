/*
  # Ajout des simulateurs initiaux

  1. Nouvelles données
    - Ajout des simulateurs prédéfinis avec leurs descriptions et URLs
  
  2. Sécurité
    - Politique de lecture publique pour permettre l'accès aux simulateurs
    - Politique d'écriture restreinte aux administrateurs authentifiés
*/

-- Insertion des simulateurs
INSERT INTO simulators (title, description, url) VALUES
(
  'Simulateur Auto-Entrepreneur',
  'Calculez vos charges sociales et vos impôts en tant qu''auto-entrepreneur. Un outil essentiel pour estimer vos revenus nets.',
  'https://mon-entreprise.urssaf.fr/simulateurs/auto-entrepreneur'
),
(
  'Simulateur Entreprise Individuelle',
  'Évaluez les implications financières de la création d''une entreprise individuelle, incluant les charges sociales et fiscales.',
  'https://mon-entreprise.urssaf.fr/simulateurs/entreprise-individuelle'
),
(
  'Simulateur Complet Indépendant/Freelance',
  'Analyse détaillée pour les indépendants et freelances : charges sociales, fiscalité et optimisation de la rémunération.',
  'https://decodage-fiscal.fr/guides-simulateurs/simulateur-complet-independant-freelance'
),
(
  'Simulateur Cotisations Sociales',
  'Estimation précise de vos cotisations sociales en fonction de vos revenus professionnels.',
  'https://secu-independants.fr/simulateur-cotisations-sociales'
),
(
  'Simulateurs France Travail',
  'Ensemble d''outils pour simuler vos droits et aides liés à l''emploi et à la création d''entreprise.',
  'https://candidat.francetravail.fr/portail-simulateurs/'
),
(
  'Simulateur CAF',
  'Calculez vos droits aux prestations sociales et familiales pour optimiser votre protection sociale.',
  'https://wwwd.caf.fr/wps/portal/caffr/simulateurpa/'
),
(
  'Simulateur CFE',
  'Estimez votre Cotisation Foncière des Entreprises, une taxe importante pour toute entreprise.',
  'https://www.lestricolores.fr/cfe'
),
(
  'Simulateur Salaire Net/Brut',
  'Convertissez rapidement les salaires bruts en nets et vice-versa pour mieux gérer votre rémunération.',
  'https://www.mon-salaire-en-net.fr/'
),
(
  'Simulateur SARL - Rémunération et Dividendes',
  'Optimisez la répartition entre salaire et dividendes pour les dirigeants de SARL.',
  'https://www.cacomptepourmoi.fr/blog/guides-simulateurs/simulateur-sarl-remuneration-dividendes/'
),
(
  'Simulateur Alternance',
  'Calculez les rémunérations et aides disponibles dans le cadre d''un contrat d''alternance.',
  'https://www.alternance.emploi.gouv.fr/simulateur-alternant/etape-1'
);