/*
  # Update simulator OneDrive link

  1. Changes
    - Update the OneDrive link for the real estate investment simulator
*/

-- Delete previous version
DELETE FROM simulators 
WHERE title = 'Simulateur Investissement Immobilier';

-- Add updated version
INSERT INTO simulators (title, description, url)
VALUES (
  'Simulateur Investissement Immobilier',
  'Comparez la rentabilité de vos investissements immobiliers en LMNP, SCI et micro-foncier. Un outil complet pour analyser la rentabilité et la fiscalité de vos projets immobiliers.',
  'https://1drv.ms/f/c/6955eaedc0d4bdda/Es4Ez-ULzbVDo9rZ8LwLFTEB41G7w1Aigbv9jelRA-qS9g?e=8atvRB'
);