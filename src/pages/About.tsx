import React from 'react';
import { ArrowLeft, Shield, Timer, Star, Code, Share, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              À propos
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Parcours Professionnel</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Après une reconversion professionnelle il y a 14 ans, j'ai choisi le milieu de l'expertise comptable comme voie d'épanouissement professionnel. Ce parcours a été marqué par un défi unique : réussir le Diplôme d'Expertise Comptable (DEC) seul, en autodidacte, par correspondance, du DCG au DEC. Cette expérience a forgé ma rigueur, ma persévérance et ma capacité à m'adapter rapidement aux nouveaux savoirs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Expertise Technologique</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Depuis huit ans, je cultive une passion pour la gestion de la donnée et le développement de logiciels, une expertise que j'applique au quotidien pour transformer notre métier. Cette démarche proactive m'a conduit à concevoir des outils personnalisés pour optimiser les processus comptables et faciliter les missions de conseil. Mon mémoire d'expertise comptable est d'ailleurs consacré au développement d'un logiciel CRM sur mesure pour les cabinets d'expertise comptable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Je suis également un fervent utilisateur des technologies d'intelligence artificielle (IA), que j'emploie quotidiennement pour automatiser, analyser et innover.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-blue-100" />
              <h2 className="text-2xl font-bold">Localisation</h2>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              Basé à Vestric-et-Candiac dans le Gard, je suis toujours prêt à collaborer avec ceux qui partagent cette vision et cette passion pour la transformation positive de l'expertise comptable.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}