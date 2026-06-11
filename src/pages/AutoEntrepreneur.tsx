import React from 'react';
import { ArrowLeft, Calculator, Shield, AlertTriangle, CheckCircle, XCircle, TrendingUp, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function AutoEntrepreneur() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900 transition-colors p-1 sm:p-0"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Le Statut Auto-Entrepreneur
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-8">
          <section className="bg-white rounded-xl shadow-md p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
              Qu'est-ce que le statut auto-entrepreneur ?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Le statut auto-entrepreneur, créé en 2009, est une forme simplifiée d'entreprise individuelle. Il permet de démarrer une activité indépendante avec des formalités administratives allégées et un régime fiscal et social simplifié.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-3 sm:mb-4">Pour qui ?</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-2 text-sm sm:text-base text-blue-800">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <span>Créateurs d'entreprise débutants</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-blue-800">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <span>Salariés en complément d'activité</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-blue-800">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <span>Retraités actifs</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-blue-800">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <span>Étudiants entrepreneurs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-orange-900 mb-3 sm:mb-4">Plafonds de CA 2025</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-2 text-sm sm:text-base text-orange-800">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                    <span>Vente : 188 700 € HT</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-orange-800">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                    <span>Services : 77 700 € HT</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-orange-800">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                    <span>Professions libérales : 77 700 € HT</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
              Avantages du statut
            </h2>
            <div className="grid gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">Création simplifiée</h3>
                <p className="text-green-800 text-sm">Formalités administratives réduites, inscription rapide en ligne, pas de capital social requis.</p>
              </div>
              <div className="p-3 sm:p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">Comptabilité allégée</h3>
                <p className="text-green-800 text-sm">Livre des recettes uniquement, pas de bilan ni de compte de résultat à établir.</p>
              </div>
              <div className="p-3 sm:p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">Charges proportionnelles</h3>
                <p className="text-green-800 text-sm">Cotisations sociales et impôts calculés uniquement sur le chiffre d'affaires réalisé.</p>
              </div>
              <div className="p-3 sm:p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">Cumul possible</h3>
                <p className="text-green-800 text-sm">Compatible avec un emploi salarié, une retraite ou le statut d'étudiant.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
              Limites et points de vigilance
            </h2>
            <div className="grid gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">Plafonds de chiffre d'affaires</h3>
                <p className="text-red-800 text-sm">Dépassement des seuils entraîne la perte du régime et le passage au régime réel.</p>
              </div>
              <div className="p-3 sm:p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">Protection sociale limitée</h3>
                <p className="text-red-800 text-sm">Couverture sociale minimale, retraite calculée sur des revenus forfaitaires plus faibles.</p>
              </div>
              <div className="p-3 sm:p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">Pas de déduction des charges</h3>
                <p className="text-red-800 text-sm">Impossibilité de déduire les frais et investissements, abattement forfaitaire uniquement.</p>
              </div>
              <div className="p-3 sm:p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-1 sm:mb-2 text-sm sm:text-base">Responsabilité illimitée</h3>
                <p className="text-red-800 text-sm">Patrimoine personnel engagé en cas de dettes, pas de séparation avec le patrimoine professionnel.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
              Charges et cotisations 2025
            </h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Type d'activité</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Charges sociales</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Impôt sur le revenu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">Vente de marchandises</td>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-600">12,3% du CA</td>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-600">Abattement 71%</td>
                    </tr>
                    <tr>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">Prestations de services</td>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-600">21,2% du CA</td>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-600">Abattement 50%</td>
                    </tr>
                    <tr>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">Professions libérales</td>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-600">21,2% du CA</td>
                      <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-600">Abattement 34%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}