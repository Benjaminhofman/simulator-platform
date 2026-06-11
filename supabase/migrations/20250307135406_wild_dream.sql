/*
  # Ajout du compteur de clics pour les simulateurs

  1. Modifications
    - Ajout de la colonne `click_count` à la table `simulators`
      - Type: integer
      - Valeur par défaut: 0
      - Non null
    
  2. Sécurité
    - Mise à jour des politiques existantes pour permettre la mise à jour du compteur
*/

ALTER TABLE simulators ADD COLUMN IF NOT EXISTS click_count integer NOT NULL DEFAULT 0;

-- Mise à jour de la politique pour permettre la mise à jour du compteur
CREATE POLICY "Tout le monde peut mettre à jour le compteur de clics"
ON simulators
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);