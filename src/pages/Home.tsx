import React, { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SimulatorCard } from '../components/SimulatorCard';
import { AdminToggle } from '../components/AdminToggle';
import { simulators as initialSimulators } from '../data/simulators';
import { Simulator } from '../types';

export function Home() {
  const [simulators, setSimulators] = useState<Simulator[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    loadSimulators();
  }, []);

  const loadSimulators = () => {
    try {
      // Toujours utiliser les simulateurs du code source en premier
      let allSimulators = [...initialSimulators];
      
      // Ajouter les simulateurs du localStorage s'ils existent
      const storedSimulators = localStorage.getItem('simulators');
      if (storedSimulators) {
        const parsedSimulators = JSON.parse(storedSimulators);
        // Filtrer pour éviter les doublons basés sur l'URL
        const additionalSimulators = parsedSimulators.filter((stored: Simulator) => 
          !allSimulators.some(initial => initial.url === stored.url)
        );
        allSimulators = [...allSimulators, ...additionalSimulators];
      }
      
      // Trier par nombre de clics décroissant
      const sortedSimulators = allSimulators.sort((a: Simulator, b: Simulator) => 
        (b.click_count || 0) - (a.click_count || 0)
      );
      
      setSimulators(sortedSimulators);
      
      // Sauvegarder la liste complète dans localStorage
      localStorage.setItem('simulators', JSON.stringify(sortedSimulators));
    } catch (error) {
      console.error('Erreur lors du chargement des simulateurs:', error);
      // En cas d'erreur, utiliser uniquement les simulateurs par défaut
      setSimulators(initialSimulators);
    } finally {
      setLoading(false);
    }
  };

  const handleSimulatorClick = (id: string) => {
    const updatedSimulators = simulators.map(sim =>
      sim.id === id ? { ...sim, click_count: (sim.click_count || 0) + 1 } : sim
    );
    
    // Trier par nombre de clics décroissant
    const sortedSimulators = updatedSimulators.sort((a, b) => 
      (b.click_count || 0) - (a.click_count || 0)
    );
    
    setSimulators(sortedSimulators);
    localStorage.setItem('simulators', JSON.stringify(sortedSimulators));
  };

  const handleSimulatorDeleted = () => {
    // Recharger les simulateurs après suppression
    loadSimulators();
  };

  const filteredSimulators = simulators.filter(simulator =>
    simulator.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    simulator.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des simulateurs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
              Bibliothèque de simulateurs
            </h1>
            <div className="flex items-center gap-4">
              <AdminToggle />
              {isAdmin && (
                <Link
                  to="/ajouter"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  <span className="hidden sm:inline">Ajouter un simulateur</span>
                  <span className="sm:hidden">Ajouter</span>
                </Link>
              )}
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl">
            Découvrez mes simulateurs et outils personnels créés grâce à l'IA et à mes compétences professionnelles
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
            <input
              type="text"
              placeholder="Rechercher un simulateur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredSimulators.map((simulator) => (
            <SimulatorCard
              key={simulator.id}
              simulator={simulator}
              onDelete={handleSimulatorDeleted}
              onSimulatorClick={() => handleSimulatorClick(simulator.id)}
            />
          ))}
        </div>
        
        {filteredSimulators.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun simulateur trouvé pour "{searchTerm}"
            </p>
          </div>
        )}

        {filteredSimulators.length === 0 && !searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun simulateur disponible
            </p>
          </div>
        )}
      </main>
    </div>
  );
}