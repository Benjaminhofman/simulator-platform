/*
  # Création de la table des simulateurs

  1. Structure
    - Table `simulators`
      - `id` (uuid, clé primaire)
      - `title` (text, titre du simulateur)
      - `description` (text, description du simulateur)
      - `url` (text, lien vers le simulateur)
      - `created_at` (timestamp avec fuseau horaire)

  2. Sécurité
    - Activation RLS
    - Politique de lecture publique
    - Politique d'écriture pour les utilisateurs authentifiés
*/

-- Création de la table
CREATE TABLE IF NOT EXISTS simulators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Activation de la sécurité niveau ligne
ALTER TABLE simulators ENABLE ROW LEVEL SECURITY;

-- Politique de lecture publique
CREATE POLICY "Tout le monde peut voir les simulateurs"
  ON simulators
  FOR SELECT
  TO public
  USING (true);

-- Politique d'écriture pour les utilisateurs authentifiés
CREATE POLICY "Les utilisateurs authentifiés peuvent gérer les simulateurs"
  ON simulators
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

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
),
(
  'Simulateur Mes Droits Sociaux',
  'Évaluez l''ensemble de vos droits sociaux en une seule simulation. Un outil complet pour comprendre vos prestations sociales.',
  'https://www.mesdroitssociaux.gouv.fr/votre-simulateur/accueil'
),
(
  'Simulateur 1 Jeune 1 Solution',
  'Découvrez les aides auxquelles vous avez droit en tant que jeune entrepreneur ou porteur de projet.',
  'https://mes-aides.1jeune1solution.beta.gouv.fr/'
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