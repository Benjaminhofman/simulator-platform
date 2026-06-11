import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function LegalNotice() {
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
              Mentions Légales
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
              <div className="space-y-2 text-gray-600">
                <p>Benjamin Hofman</p>
                <p>7 rue Charlemagne</p>
                <p>30600 Vestric et Candiac</p>
                <p>Téléphone : 06 34 43 08 26</p>
                <p>Email : benjamin.hofman@hotmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergeur du site</h2>
              <div className="space-y-2 text-gray-600">
                <p>Netlify, Inc.</p>
                <p>2325 3rd Street, Suite 296</p>
                <p>San Francisco, California 94107</p>
                <p>United States</p>
                <p>Site web : www.netlify.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-600">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse de Benjamin Hofman.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection des données personnelles</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Ces droits peuvent être exercés en contactant :
                </p>
                <div className="pl-4">
                  <p>Benjamin Hofman</p>
                  <p>Email : benjamin.hofman@hotmail.com</p>
                </div>
                <p>
                  Les informations collectées sur ce site sont uniquement destinées à un usage interne et ne seront en aucun cas cédées ou vendues à des tiers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-600">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. En naviguant sur ce site, vous acceptez leur utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loi applicable</h2>
              <p className="text-gray-600">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}