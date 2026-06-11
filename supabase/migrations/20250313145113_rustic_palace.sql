/*
  # Update simulator download link

  1. Changes
    - Update the simulator with a single download link
    - Update description to reflect single download option
*/

-- Delete previous version
DELETE FROM simulators 
WHERE title = 'Simulateur Investissement Immobilier';

-- Add updated version
INSERT INTO simulators (title, description, url)
VALUES (
  'Simulateur Investissement Immobilier',
  'Comparez la rentabilité de vos investissements immobiliers en LMNP, SCI et micro-foncier. Un outil complet pour analyser la rentabilité et la fiscalité de vos projets immobiliers.',
  'https://1drv.ms/f/c/6955eaedc0d4bdda/EtC_XEsxXU1Nro0mj_pz41EBJqLFZczYeyvmRhvYV3Lavg?e=ewXB9D'
);