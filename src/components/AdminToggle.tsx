import React, { useState } from 'react';
import { Settings } from 'lucide-react';

export function AdminToggle() {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0606') {
      localStorage.setItem('isAdmin', 'true');
      setShowModal(false);
      window.location.reload();
    } else {
      setError('Code incorrect');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowModal(true)}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative group"
      >
        <Settings className="w-6 h-6" />
        {isAdmin && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" />
        )}
        <span className="sr-only">Paramètres</span>
        <span className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
          {isAdmin ? 'Mode admin activé' : 'Paramètres'}
        </span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">
              {isAdmin ? 'Mode administrateur' : 'Accès administrateur'}
            </h2>

            {isAdmin ? (
              <div>
                <p className="text-green-600 mb-4">Mode administrateur activé</p>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Désactiver le mode administrateur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div className="mb-4">
                  <label htmlFor="adminPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Code d'accès
                  </label>
                  <input
                    type="password"
                    id="adminPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Valider
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}