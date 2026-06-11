import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface Props {
  simulatorId: string;
  onDelete: () => void;
}

export function DeleteSimulator({ simulatorId, onDelete }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== '0606') {
      setError('Mot de passe incorrect');
      return;
    }

    setLoading(true);

    try {
      // Récupérer les simulateurs actuels depuis localStorage
      const simulators = JSON.parse(localStorage.getItem('simulators') || '[]');
      
      // Filtrer pour supprimer le simulateur
      const updatedSimulators = simulators.filter((sim: any) => sim.id !== simulatorId);
      
      // Mettre à jour localStorage
      localStorage.setItem('simulators', JSON.stringify(updatedSimulators));
      
      setShowModal(false);
      onDelete(); // Callback pour rafraîchir la liste
    } catch (err) {
      console.error('Erreur lors de la suppression:', err);
      setError('Erreur lors de la suppression du simulateur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 px-3 py-1 text-red-600 hover:text-red-700 transition-colors"
        title="Supprimer le simulateur"
      >
        <Trash2 size={16} />
        Supprimer
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Supprimer le simulateur</h3>
            
            <p className="text-gray-600 mb-4">
              Êtes-vous sûr de vouloir supprimer ce simulateur ? Cette action est irréversible.
            </p>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleDelete}>
              <div className="mb-4">
                <label htmlFor="deletePassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe requis pour la suppression
                </label>
                <input
                  type="password"
                  id="deletePassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700 transition-colors"
                  disabled={loading}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Suppression...' : 'Confirmer la suppression'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}