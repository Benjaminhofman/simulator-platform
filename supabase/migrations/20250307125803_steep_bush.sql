/*
  # Ajout du système de catégories

  1. Nouvelles Tables
    - `categories`
      - `id` (uuid, clé primaire)
      - `name` (text, nom de la catégorie)
      - `color` (text, couleur de la catégorie)
      - `created_at` (timestamp)

  2. Modifications
    - Ajout de la colonne `category_id` à la table `simulators`
    - Création des catégories par défaut
    
  3. Sécurité
    - Activation RLS sur la table `categories`
    - Politiques de lecture pour tous
    - Politiques d'écriture pour les utilisateurs authentifiés
*/

-- Création de la table des catégories
CREATE TABLE IF NOT EXISTS categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    color text NOT NULL,
    created_at timestamptz DEFAULT now()
);

-- Ajout de la colonne category_id à la table simulators
ALTER TABLE simulators
ADD COLUMN IF NOT EXISTS category_id uuid REFERENCES categories(id);

-- Activation RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Politiques RLS
CREATE POLICY "Tout le monde peut lire les catégories"
    ON categories FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Les utilisateurs authentifiés peuvent modifier les catégories"
    ON categories FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Insertion des catégories par défaut
INSERT INTO categories (name, color) VALUES
    ('Fiscal', '#34D399'),      -- Vert émeraude
    ('Social', '#60A5FA'),      -- Bleu
    ('Aides', '#F472B6'),       -- Rose
    ('Création d''entreprise', '#A78BFA'),  -- Violet
    ('Comptabilité', '#FBBF24'), -- Jaune
    ('Juridique', '#F87171')    -- Rouge
ON CONFLICT DO NOTHING;