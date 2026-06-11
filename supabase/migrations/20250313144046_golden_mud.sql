/*
  # Mise à jour du simulateur immobilier

  1. Changements
    - Suppression de l'ancien simulateur
    - Ajout du simulateur avec deux liens de téléchargement
*/

-- Suppression des anciens simulateurs
DELETE FROM simulators 
WHERE url LIKE '%1drv.ms%';

-- Ajout du nouveau simulateur
INSERT INTO simulators (title, description, url)
VALUES (
  'Simulateur Investissement Immobilier',
  'Comparez la rentabilité de vos investissements immobiliers en LMNP, SCI et micro-foncier. Disponible en version Excel pour les calculs détaillés et en version logicielle pour une utilisation simplifiée.

Version Excel : https://1drv.ms/x/c/6955eaedc0d4bdda/EQVCu4Rn4OZLrBv7JV7Btj8BH16-Ge4hDIOoIBUCaNC02g?e=8sWjCr
Version Windows : https://1drv.ms/u/c/6955eaedc0d4bdda/EVeLIgHGCFRJqZmJwOk_BEcBfQiG4fvhIO-iETTSYAK2ag?e=lgYmKU',
  'https://1drv.ms/x/c/6955eaedc0d4bdda/EQVCu4Rn4OZLrBv7JV7Btj8BH16-Ge4hDIOoIBUCaNC02g?e=8sWjCr'
);