/*
  # Create simulators table

  1. New Tables
    - `simulators`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text, not null)
      - `url` (text, not null)
      - `created_at` (timestamp with time zone, default: now())

  2. Security
    - Enable RLS on `simulators` table
    - Add policies for:
      - Public read access
      - Authenticated users can manage simulators
*/

CREATE TABLE IF NOT EXISTS simulators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE simulators ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can view simulators"
  ON simulators
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage simulators
CREATE POLICY "Authenticated users can insert simulators"
  ON simulators
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update simulators"
  ON simulators
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete simulators"
  ON simulators
  FOR DELETE
  TO authenticated
  USING (true);