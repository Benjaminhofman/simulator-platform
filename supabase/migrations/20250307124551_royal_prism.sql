/*
  # Add delete policy for simulators table

  1. Security Changes
    - Add policy to allow deletion of simulators
    - Keep existing policies for insert and select
*/

CREATE POLICY "Enable delete for all users"
ON public.simulators
FOR DELETE
TO public
USING (true);