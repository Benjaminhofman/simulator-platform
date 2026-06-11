/*
  # Création de la table simulators et ajout des données initiales

  1. Nouvelle Table
    - `simulators`
      - `id` (uuid, clé primaire)
      - `title` (text, non null)
      - `description` (text, non null)
      - `url` (text, non null)
      - `created_at` (timestamp avec fuseau horaire, par défaut now())

  2. Sécurité
    - Activation RLS sur la table `simulators`
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