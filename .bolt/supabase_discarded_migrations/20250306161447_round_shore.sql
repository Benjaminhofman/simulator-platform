/*
  # Configuration initiale des simulateurs

  1. Tables
    - `simulators`
      - `id` (uuid, clé primaire)
      - `title` (text, non null)
      - `description` (text, non null)
      - `url` (text, non null)
      - `created_at` (timestamptz)

  2. Sécurité
    - Activation de RLS sur la table `simulators`
    - Politiques d'accès :
      - Lecture publique pour tous
      - Insertion, mise à jour et suppression pour les utilisateurs authentifiés
*/

-- Création de la table simulators si elle n'existe pas
CREATE TABLE IF NOT EXISTS simulators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Activation de RLS
ALTER TABLE simulators ENABLE ROW LEVEL SECURITY;

-- Suppression des politiques existantes si elles existent
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Lecture publique des simulateurs" ON simulators;
    DROP POLICY IF EXISTS "Insertion de simulateurs par les administrateurs" ON simulators;
    DROP POLICY IF EXISTS "Mise à jour de simulateurs par les administrateurs" ON simulators;
    DROP POLICY IF EXISTS "Suppression de simulateurs par les administrateurs" ON simulators;
END $$;

-- Création des nouvelles politiques
CREATE POLICY "Lecture publique des simulateurs"
  ON simulators
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Insertion de simulateurs par les administrateurs"
  ON simulators
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Mise à jour de simulateurs par les administrateurs"
  ON simulators
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Suppression de simulateurs par les administrateurs"
  ON simulators
  FOR DELETE
  TO authenticated
  USING (true);