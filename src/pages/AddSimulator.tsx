import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SimulatorForm } from '../components/SimulatorForm';
import { Simulator } from '../types';

const SIMULATOR_PASSWORD = '0606';

export function AddSimulator() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === SIMULATOR_PASSWORD) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError('Mot de passe incorrect');
    }
  }

  async function handleSubmit(data: Partial<Simulator>) {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Générer un nouvel ID unique
      const newSimulator: Simulator = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        title: data.title!,
        description: data.description!,
        url: data.url!,
        click_count: 0
      };

      // Récupérer les simulateurs existants
      const currentSimulators = JSON.parse(localStorage.getItem('simulators') || '[]');
      
      // Ajouter le nouveau simulateur
      const updatedSimulators = [...currentSimulators, newSimulator];
      
      // Sauvegarder dans localStorage
      localStorage.setItem('simulators', JSON.stringify(updatedSimulators));

      setSuccess('Simulateur ajouté avec succès !');
      
      // Rediriger vers la page d'accueil après 2 secondes
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      console.error('Erreur lors de l\'ajout du simulateur:', err);
      setError('Une erreur est survenue lors de l\'ajout du simulateur.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              Ajouter un simulateur
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
              {success}
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-6">
            {!isAuthenticated ? (
              <form onSubmit={handlePasswordSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe requis pour ajouter un simulateur
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Vérification...' : 'Valider'}
                </button>
              </form>
            ) : (
              <SimulatorForm onSubmit={handleSubmit} isSubmitting={loading} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}