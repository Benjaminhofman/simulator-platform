/*
  # Correction des politiques de sécurité pour la table simulators

  1. Sécurité
    - Mise à jour des politiques RLS pour permettre aux utilisateurs authentifiés d'insérer des données
    - Ajout de politiques explicites pour chaque opération CRUD
*/

-- Supprime les anciennes politiques
DROP POLICY IF EXISTS "Insertion des simulateurs par les utilisateurs authentifiés" ON simulators;
DROP POLICY IF EXISTS "Lecture publique des simulateurs" ON simulators;
DROP POLICY IF EXISTS "Modification des simulateurs par les utilisateurs authentifiés" ON simulators;
DROP POLICY IF EXISTS "Suppression des simulateurs par les utilisateurs authentifiés" ON simulators;

-- Crée les nouvelles politiques
CREATE POLICY "Lecture publique des simulateurs"
ON simulators FOR SELECT
TO public
USING (true);

CREATE POLICY "Insertion des simulateurs par les utilisateurs authentifiés"
ON simulators FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Modification des simulateurs par les utilisateurs authentifiés"
ON simulators FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Suppression des simulateurs par les utilisateurs authentifiés"
ON simulators FOR DELETE
TO authenticated
USING (true);