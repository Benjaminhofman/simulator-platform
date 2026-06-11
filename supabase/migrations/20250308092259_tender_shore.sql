/*
  # Create chatbot responses table

  1. New Tables
    - `chatbot_responses`
      - `id` (uuid, primary key)
      - `keywords` (text[], indexed) - Mots-clés pour la recherche
      - `response` (text) - Réponse prédéfinie
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `chatbot_responses` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS chatbot_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  keywords text[] NOT NULL,
  response text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE chatbot_responses ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON chatbot_responses
  FOR SELECT
  TO public
  USING (true);

-- Insert some initial responses
INSERT INTO chatbot_responses (keywords, response) VALUES
  (
    ARRAY['impot', 'impots', 'revenu', 'declaration', 'fiscal'],
    'Pour simuler vos impôts, je vous recommande le simulateur officiel des impôts. Il vous permettra de calculer précisément votre imposition en fonction de votre situation.'
  ),
  (
    ARRAY['retraite', 'pension', 'vieillesse'],
    'Pour estimer votre future retraite, utilisez le simulateur M@rel. Il prend en compte votre carrière complète et vous donne une estimation précise de vos droits.'
  ),
  (
    ARRAY['entreprise', 'creation', 'auto', 'entrepreneur', 'independant'],
    'Si vous souhaitez créer votre entreprise, le simulateur de l''URSSAF vous aidera à estimer vos cotisations sociales et à choisir le statut le plus adapté.'
  ),
  (
    ARRAY['aide', 'social', 'caf', 'allocation'],
    'Pour connaître vos droits aux aides sociales, utilisez le simulateur de la CAF. Il vous indiquera toutes les aides auxquelles vous pouvez prétendre.'
  ),
  (
    ARRAY['pret', 'emprunt', 'credit', 'immobilier', 'banque'],
    'Pour simuler un prêt immobilier, je vous conseille d''utiliser notre simulateur de crédit. Il vous donnera une estimation précise de vos mensualités et du coût total du crédit.'
  );