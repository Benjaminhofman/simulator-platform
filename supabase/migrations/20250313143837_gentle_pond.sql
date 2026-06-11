/*
  # Mise à jour des simulateurs immobiliers

  1. Changements
    - Suppression des anciens simulateurs Excel
    - Ajout d'un nouveau simulateur d'investissement immobilier avec deux liens de téléchargement
*/

-- Suppression des anciens simulateurs
DELETE FROM simulators 
WHERE url LIKE '%1drv.ms%';

-- Ajout du nouveau simulateur
INSERT INTO simulators (title, description, url)
VALUES (
  'Simulateur Investissement Immobilier',
  'Simulez et comparez vos investissements immobiliers en LMNP, SCI et micro-foncier. Deux outils Excel complets pour analyser la rentabilité et la fiscalité de vos projets immobiliers : 
  
  1. Simulateur LMNP/Micro-BIC : Analysez la rentabilité en location meublée
  2. Simulateur SCI/Micro-Foncier : Comparez les différents régimes fiscaux
  
  Téléchargez les deux versions pour une analyse complète de votre stratégie d''investissement.',
  'https://1drv.ms/x/c/6955eaedc0d4bdda/EQVCu4Rn4OZLrBv7JV7Btj8BH16-Ge4hDIOoIBUCaNC02g?e=xHfyjZ'
);