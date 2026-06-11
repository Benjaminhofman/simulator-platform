import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              Politique de Confidentialité
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600">
                Cette politique de confidentialité décrit comment Benjamin Hofman collecte, utilise et protège vos informations lorsque vous utilisez notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collecte des données</h2>
              <p className="text-gray-600 mb-4">Nous collectons les informations suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Données de navigation (via les cookies techniques)</li>
                <li>Données que vous nous fournissez volontairement via les formulaires de contact</li>
                <li>Adresse IP et données de connexion pour des raisons de sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Utilisation des données</h2>
              <p className="text-gray-600 mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Assurer le bon fonctionnement technique du site</li>
                <li>Répondre à vos demandes de contact</li>
                <li>Améliorer l'expérience utilisateur</li>
                <li>Assurer la sécurité du site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection des données</h2>
              <p className="text-gray-600">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Durée de conservation</h2>
              <p className="text-gray-600 mb-4">Les données sont conservées pour une durée limitée :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Données de navigation : 13 mois maximum</li>
                <li>Données de contact : 3 ans après le dernier contact</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits</h2>
              <p className="text-gray-600 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Pour exercer ces droits, contactez-nous à : benjamin.hofman@hotmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-600">
                Notre site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Ces cookies ne collectent pas de données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partage des données</h2>
              <p className="text-gray-600">
                Nous ne vendons ni ne partageons vos données personnelles avec des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modification de la politique</h2>
              <p className="text-gray-600">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-2 text-gray-600">
                <p>Pour toute question concernant cette politique de confidentialité, contactez :</p>
                <p>Benjamin Hofman</p>
                <p>7 rue Charlemagne</p>
                <p>30600 Vestric et Candiac</p>
                <p>Email : benjamin.hofman@hotmail.com</p>
                <p>Téléphone : 06 34 43 08 26</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}