/*
  # Ajout des simulateurs Google Sheets

  1. Nouvelles données
    - Simulateur de charges sociales TNS
    - Simulateur de charges sociales SASU
*/

INSERT INTO simulators (title, description, url)
VALUES 
  (
    'Simulateur de charges sociales TNS',
    'Calculez vos charges sociales en tant que Travailleur Non Salarié (TNS). Un outil complet pour estimer vos cotisations sociales obligatoires en fonction de vos revenus.',
    'https://docs.google.com/spreadsheets/d/1PHtkeRxj6YUHqabD_Z3UmJxcbaGEBdl4ykV3v7nejcI/edit?gid=0#gid=0'
  ),
  (
    'Simulateur de charges sociales SASU',
    'Estimez vos charges sociales pour une SASU (Société par Actions Simplifiée Unipersonnelle). Calculez précisément les cotisations sociales du dirigeant assimilé salarié.',
    'https://docs.google.com/spreadsheets/d/1PwQcQ9os732Lajnme3UV9PWHP67m2hyuPTarIMYovhk/edit?gid=0#gid=0'
  );