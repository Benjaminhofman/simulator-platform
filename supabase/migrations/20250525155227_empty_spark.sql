/*
  # Add simulator insert policy

  1. Changes
    - Add policy to allow inserts into simulators table
    - Keep existing policies intact
    
  2. Security
    - Allow inserts for all users (since we handle authentication via password in the frontend)
    - Maintain existing RLS policies for other operations
*/

-- Add policy to allow inserts into simulators table
CREATE POLICY "Allow inserts into simulators" 
ON simulators 
FOR INSERT 
TO public
WITH CHECK (true);