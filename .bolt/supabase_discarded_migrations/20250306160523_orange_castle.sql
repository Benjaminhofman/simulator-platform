/*
  # Création de la table des simulateurs

  1. Structure
    - Table `simulators` avec :
      - `id` : Identifiant unique (UUID)
      - `title` : Titre du simulateur
      - `description` : Description détaillée
      - `url` : Lien vers le simulateur
      - `created_at` : Date de création

  2. Sécurité
    - Activation RLS
    - Politique de lecture publique
    - Politique d'écriture pour utilisateurs authentifiés

  3. Données
    - Insertion des simulateurs initiaux avec leurs liens
*/

-- Suppression de la table si elle existe
DROP TABLE IF EXISTS simulators;

-- Création de la table
CREATE TABLE simulators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Activation de la sécurité niveau ligne
ALTER TABLE simulators ENABLE ROW LEVEL SECURITY;

-- Politique de lecture publique
CREATE POLICY "Lecture publique des simulateurs"
  ON simulators
  FOR SELECT
  TO public
  USING (true);

-- Politique d'écriture pour les utilisateurs authentifiés
CREATE POLICY "Modification des simulateurs par les utilisateurs authentifiés"
  ON simulators
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insertion des données initiales
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
  'https://www.shine.fr/simulateur-charges-freelance/'
),
(
  'Simulateur Cotisations Sociales',
  'Estimation précise de vos cotisations sociales en fonction de vos revenus professionnels.',
  'https://www.secu-independants.fr/simulateur-cotisations-sociales'
),
(
  'Simulateurs France Travail',
  'Ensemble d''outils pour simuler vos droits et aides liés à l''emploi et à la création d''entreprise.',
  'https://candidat.francetravail.fr/mes-services/simulation'
),
(
  'Simulateur CAF',
  'Calculez vos droits aux prestations sociales et familiales pour optimiser votre protection sociale.',
  'https://wwwd.caf.fr/wps/portal/caffr/simulateurpa/'
),
(
  'Simulateur TVA',
  'Calculez facilement votre TVA et anticipez vos déclarations fiscales.',
  'https://www.service-public.fr/professionnels-entreprises/vosdroits/R14633'
),
(
  'Simulateur Salaire Net/Brut',
  'Convertissez rapidement les salaires bruts en nets et vice-versa pour mieux gérer votre rémunération.',
  'https://www.salaire-brut-en-net.fr/'
),
(
  'Simulateur Charges Patronales',
  'Estimez le coût total d''un salarié pour votre entreprise, incluant toutes les charges patronales.',
  'https://entreprendre.service-public.fr/vosdroits/R58675'
),
(
  'Simulateur Alternance',
  'Calculez les rémunérations et aides disponibles dans le cadre d''un contrat d''alternance.',
  'https://www.alternance.emploi.gouv.fr/simulateur-alternant/etape-1'
);