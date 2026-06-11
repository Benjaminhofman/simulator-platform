/*
  # Ajout de nouveaux simulateurs et contrainte unique

  1. Modifications
    - Ajout d'une contrainte unique sur l'URL
    - Ajout de 6 nouveaux simulateurs
    
  2. Données
    - Ajout de simulateurs gouvernementaux et fiscaux
    - Préservation des simulateurs existants
*/

-- Ajout d'une contrainte unique sur l'URL
ALTER TABLE simulators ADD CONSTRAINT simulators_url_key UNIQUE (url);

-- Insertion des nouveaux simulateurs
INSERT INTO simulators (title, description, url) VALUES
(
  'Simulateur Mes Droits Sociaux',
  'Évaluez l''ensemble de vos droits sociaux en une seule simulation. Un outil complet pour comprendre vos prestations sociales.',
  'https://www.mesdroitssociaux.gouv.fr/votre-simulateur/accueil'
),
(
  'Simulateur 1 Jeune 1 Solution',
  'Découvrez les aides auxquelles vous avez droit en tant que jeune entrepreneur ou porteur de projet.',
  'https://mes-aides.1jeune1solution.beta.gouv.fr/?utm_source=mes-aides-accueil&utm_medium=alternative'
),
(
  'Test Entrepreneur CCI',
  'Évaluez vos aptitudes entrepreneuriales et votre préparation à la création d''entreprise avec l''outil de la CCI.',
  'https://www.cci.fr/ressources/creation-dentreprise/testez-vous-avant-dentreprendre'
),
(
  'Simulateur Direct Impôts',
  'Calculez rapidement et précisément vos impôts avec cet outil complet de simulation fiscale.',
  'https://directimpots.fr/simulateur/'
),
(
  'Simulateur Défiscalisation',
  'Optimisez votre stratégie fiscale et découvrez les opportunités de défiscalisation pour votre entreprise.',
  'https://www.inter-invest.fr/simulation-impot-defiscalisation'
),
(
  'Calculateur Impôt Sociétés TPE',
  'Estimez l''impôt sur les sociétés pour votre TPE avec cet outil spécialisé pour les petites entreprises.',
  'https://www.sinao.fr/logiciel/calculateur-impot-sur-les-societes-tpe'
);