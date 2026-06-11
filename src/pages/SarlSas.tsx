import React from 'react';
import { ArrowLeft, Building, Users, Coins, Scale, Shield, AlertTriangle, CheckCircle, Briefcase, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SarlSas() {
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
              SARL et SAS : Comprendre les Différences
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-8">
          {/* Section SARL */}
          <section className="bg-white rounded-xl shadow-md p-4 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">La SARL (Société à Responsabilité Limitée)</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Caractéristiques principales</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-blue-800">
                    <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>De 1 à 100 associés (EURL si associé unique)</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-800">
                    <Coins className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Capital social minimum libre (1€ minimum recommandé)</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-800">
                    <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Dirigeant : Gérant (statut social TNS si gérant majoritaire)</span>
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Avantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-green-800">• Responsabilité limitée aux apports</li>
                    <li className="text-green-800">• Crédibilité auprès des partenaires</li>
                    <li className="text-green-800">• Régime fiscal flexible (IR ou IS)</li>
                    <li className="text-green-800">• Structure adaptée aux PME familiales</li>
                    <li className="text-green-800">• Coûts de constitution modérés</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Limites
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-red-800">• Formalisme juridique important</li>
                    <li className="text-red-800">• Distribution de dividendes soumis à charges sociales (si &gt; 10% du capital)</li>
                    <li className="text-red-800">• Cession de parts encadrée</li>
                    <li className="text-red-800">• Image parfois moins "moderne" que la SAS</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section SAS */}
          <section className="bg-white rounded-xl shadow-md p-4 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">La SAS (Société par Actions Simplifiée)</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Caractéristiques principales</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-purple-800">
                    <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>1 ou plusieurs associés (SASU si associé unique)</span>
                  </li>
                  <li className="flex items-start gap-2 text-purple-800">
                    <Coins className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Capital social minimum libre (1€ minimum recommandé)</span>
                  </li>
                  <li className="flex items-start gap-2 text-purple-800">
                    <Briefcase className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Dirigeant : Président (statut assimilé salarié)</span>
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Avantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-green-800">• Grande liberté statutaire</li>
                    <li className="text-green-800">• Protection sociale du régime général</li>
                    <li className="text-green-800">• Facilité de levée de fonds</li>
                    <li className="text-green-800">• Image moderne et dynamique</li>
                    <li className="text-green-800">• Cession d'actions simplifiée</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Limites
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-red-800">• Coût de constitution plus élevé</li>
                    <li className="text-red-800">• Charges sociales importantes (régime général)</li>
                    <li className="text-red-800">• Formalisme juridique important</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section Comparaison */}
          <section className="bg-white rounded-xl shadow-md p-4 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Tableau comparatif</h2>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Critère</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">SARL</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">SAS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Capital minimum</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1€ (libre)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1€ (libre)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Direction</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Gérant</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Président</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Régime social dirigeant</td>
                    <td className="px-4 py-3 text-sm text-gray-600">TNS si gérant majoritaire</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Assimilé salarié</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Régime fiscal</td>
                    <td className="px-4 py-3 text-sm text-gray-600">IS ou IR (option)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">IS ou IR (option)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Nombre d'associés</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1 à 100</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1 ou plus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}