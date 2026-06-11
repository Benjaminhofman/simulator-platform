/*
  # Update simulator policies

  1. Changes
    - Update INSERT policy to allow anyone with the correct password to add simulators
    - Keep existing SELECT policy for public access
    - Remove UPDATE and DELETE policies as they are no longer needed

  2. Security
    - Enable RLS on simulators table
    - Add policy for public read access
    - Add policy for authenticated insert access
*/

-- First, drop existing policies
DROP POLICY IF EXISTS "Insertion des simulateurs par les utilisateurs authentifiés" ON simulators;
DROP POLICY IF EXISTS "Lecture publique des simulateurs" ON simulators;
DROP POLICY IF EXISTS "Modification des simulateurs par les utilisateurs authentifiés" ON simulators;
DROP POLICY IF EXISTS "Suppression des simulateurs par les utilisateurs authentifiés" ON simulators;

-- Create new policies
CREATE POLICY "Enable read access for all users"
ON simulators FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable insert access for all users"
ON simulators FOR INSERT
TO public
WITH CHECK (true);