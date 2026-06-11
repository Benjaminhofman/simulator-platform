/*
  # Ajout des simulateurs fiscaux

  1. Nouvelles données
    - Simulateur d'impôt sur le revenu 2025
    - Simulateur IFI 2024
    - Simulateur barème kilométrique
*/

INSERT INTO simulators (title, description, url)
VALUES 
  (
    'Simulateur d''impôt sur le revenu 2025',
    'Calculez votre impôt sur le revenu pour l''année 2025. Un outil officiel de la Direction Générale des Finances Publiques pour estimer votre imposition.',
    'https://simulateur-ir-ifi.impots.gouv.fr/calcul_impot/2025/'
  ),
  (
    'Simulateur IFI 2024',
    'Estimez votre Impôt sur la Fortune Immobilière pour l''année 2024. Calculateur officiel pour évaluer votre IFI en fonction de votre patrimoine immobilier.',
    'https://simulateur-ir-ifi.impots.gouv.fr/ifi/2024/calcul_ifi/index.htm'
  ),
  (
    'Simulateur barème kilométrique',
    'Calculez vos frais kilométriques selon le barème officiel de l''administration fiscale. Idéal pour les professionnels et particuliers qui utilisent leur véhicule.',
    'https://www.impots.gouv.fr/simulateur-bareme-kilometrique'
  );