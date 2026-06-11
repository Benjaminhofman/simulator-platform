/*
  # Add new business simulators

  1. Changes
    - Add new business-related simulators to the simulators table
    - Each simulator has a descriptive title and explanation of its purpose
*/

INSERT INTO simulators (title, description, url) VALUES
(
  'Simulateur de Revenu Dirigeant',
  'Calculez votre salaire net en tant que dirigeant d''entreprise. Cet outil vous permet d''estimer précisément votre rémunération nette après charges et impôts.',
  'https://www.mon-salaire-en-net.fr/simulateur-calcul-revenu-dirigeant/'
),
(
  'Comparaison des Régimes Sociaux',
  'Comparez les différents régimes sociaux pour votre entreprise. Cet outil de l''URSSAF vous aide à choisir le statut le plus adapté à votre situation.',
  'https://mon-entreprise.urssaf.fr/simulateurs/comparaison-r%C3%A9gimes-sociaux'
),
(
  'Simulateur Retraite',
  'Estimez votre future retraite et accédez à vos droits. Un outil essentiel pour planifier votre avenir et comprendre vos cotisations retraite.',
  'https://www.info-retraite.fr/portail-services/login'
),
(
  'Mes Aides Entreprises',
  'Découvrez toutes les aides disponibles pour votre entreprise. Un guichet unique pour identifier les dispositifs de soutien adaptés à votre situation.',
  'https://mes-aides-entreprises.fr/'
),
(
  'Aides Publiques Infogreffe',
  'Accédez aux aides publiques référencées par Infogreffe. Un outil complet pour trouver les subventions et financements publics disponibles.',
  'https://mesaidespubliques.infogreffe.fr/d68f47ee-a29b-4387-8186-cfce703eb767/aides'
),
(
  'Simulateur ARCE Pôle Emploi',
  'Calculez votre Aide à la Reprise ou à la Création d''Entreprise. Estimez le montant de l''aide que vous pouvez recevoir de Pôle Emploi pour votre projet.',
  'https://chomage-independant.francetravail.fr/simulateurARCE'
),
(
  'Simulateur d''Allocations',
  'Simulez l''ensemble des aides et allocations auxquelles vous avez droit. Un outil complet pour optimiser vos droits sociaux.',
  'https://www.mes-allocs.fr/simulation-aides?utm_source=sticky_seo&origin=aide-entreprise'
);