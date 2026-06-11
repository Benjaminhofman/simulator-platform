/*
  # Add click count tracking to simulators

  1. Changes
    - Add `click_count` column to `simulators` table
      - Type: integer
      - Default: 0 (ensures existing records have a valid count)
      - Nullable: false (prevents null values)
    
  2. Notes
    - Uses safe column addition with IF NOT EXISTS check
    - Sets default value to prevent null counts
    - Maintains existing data integrity
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
    ADD COLUMN click_count integer NOT NULL DEFAULT 0;
  END IF;
END $$;