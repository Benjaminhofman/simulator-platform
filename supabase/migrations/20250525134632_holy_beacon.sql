/*
  # Add click_count column to simulators table

  1. Changes
    - Add `click_count` column to `simulators` table with default value of 0
    - This column will track how many times each simulator has been clicked/viewed

  2. Notes
    - Using integer type for the counter
    - Default value of 0 ensures existing rows have a valid count
*/

DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'simulators' 
    AND column_name = 'click_count'
  ) THEN 
    ALTER TABLE simulators 
    ADD COLUMN click_count integer DEFAULT 0 NOT NULL;
  END IF;
END $$;