/*
  # Create simulators table with all required columns

  1. New Tables
    - `simulators`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text, not null)
      - `url` (text, not null)
      - `created_at` (timestamp with time zone)
      - `click_count` (integer, not null, default 0)

  2. Security
    - Enable RLS
    - Add policies for public access and authenticated users
*/

CREATE TABLE IF NOT EXISTS simulators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  click_count integer NOT NULL DEFAULT 0
);

-- Enable RLS
ALTER TABLE simulators ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users"
ON simulators FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable insert for authenticated users"
ON simulators FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Enable update for all users"
ON simulators FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users"
ON simulators FOR DELETE
TO authenticated
USING (true);