/*
  # Ajout des simulateurs financiers

  1. Nouvelles données
    - Convertisseur de devises XE
    - Simulateur de crédit immobilier Empruntis
    - Diagnostic financier Artisanat
*/

INSERT INTO simulators (title, description, url)
VALUES 
  (
    'Convertisseur de devises XE',
    'Convertissez instantanément toutes les devises mondiales avec des taux de change en temps réel. Un outil essentiel pour les transactions internationales et la gestion de devises.',
    'https://www.xe.com/'
  ),
  (
    'Simulateur de crédit immobilier Empruntis',
    'Calculez votre capacité d''emprunt, estimez vos mensualités et trouvez le meilleur taux pour votre crédit immobilier. Un outil complet pour préparer votre projet immobilier.',
    'https://www.empruntis.com/financement/credit-immobilier-simulation.php'
  ),
  (
    'Diagnostic financier Artisanat',
    'Réalisez un diagnostic financier complet de votre entreprise artisanale. Analysez votre situation financière et identifiez les points d''amélioration pour optimiser votre gestion.',
    'https://diagfinancier.artisanat.fr/'
  );