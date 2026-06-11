import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { SimulatorCard } from '../components/SimulatorCard';
import { SimulatorForm } from '../components/SimulatorForm';
import { supabase } from '../lib/supabase';
import { Simulator } from '../types';

export function Admin() {
  const [simulators, setSimulators] = useState<Simulator[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingSimulator, setEditingSimulator] = useState<Simulator | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSimulators();
    addSuccessionSimulator();
  }, []);

  async function addSuccessionSimulator() {
    try {
      // Vérifier si le simulateur existe déjà
      const { data: existingSimulators, error: fetchError } = await supabase
        .from('simulators')
        .select('*')
        .eq('url', 'https://www.service-public.fr/simulateur/calcul/droits-succession')
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Erreur lors de la vérification du simulateur:', fetchError);
        return;
      }

      // Si le simulateur n'existe pas, l'ajouter
      if (!existingSimulators) {
        const { error: insertError } = await supabase
          .from('simulators')
          .insert([{
            title: 'Simulateur de droits de succession',
            description: 'Calculez facilement vos droits de succession avec ce simulateur officiel du service-public.fr. Estimez le montant des droits à payer lors d\'une transmission de patrimoine par héritage et comprenez les aspects fiscaux de votre succession.',
            url: 'https://www.service-public.fr/simulateur/calcul/droits-succession'
          }]);

        if (insertError) {
          setError('Erreur lors de l\'ajout du simulateur. Assurez-vous d\'être connecté en tant qu\'administrateur.');
          console.error('Erreur lors de l\'ajout du simulateur:', insertError);
          return;
        }

        await loadSimulators();
      }
    } catch (err) {
      console.error('Erreur inattendue:', err);
      setError('Une erreur inattendue est survenue.');
    }
  }

  async function loadSimulators() {
    const { data, error } = await supabase
      .from('simulators')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur lors du chargement des simulateurs:', error);
      setError('Erreur lors du chargement des simulateurs.');
      return;
    }

    setSimulators(data || []);
  }

  async function handleSubmit(data: Partial<Simulator>) {
    if (editingSimulator) {
      const { error } = await supabase
        .from('simulators')
        .update(data)
        .eq('id', editingSimulator.id);

      if (error) {
        console.error('Erreur lors de la mise à jour du simulateur:', error);
        setError('Erreur lors de la mise à jour du simulateur.');
        return;
      }
    } else {
      const { error } = await supabase
        .from('simulators')
        .insert([data]);

      if (error) {
        console.error('Erreur lors de la création du simulateur:', error);
        setError('Erreur lors de la création du simulateur.');
        return;
      }
    }

    setShowForm(false);
    setEditingSimulator(null);
    loadSimulators();
  }

  async function handleDelete(id: string) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce simulateur ?')) {
      return;
    }

    const { error } = await supabase
      .from('simulators')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erreur lors de la suppression du simulateur:', error);
      setError('Erreur lors de la suppression du simulateur.');
      return;
    }

    loadSimulators();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Gestion des Simulateurs
            </h1>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} /> Ajouter un simulateur
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
            {error}
          </div>
        )}
        {showForm && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              {editingSimulator ? 'Modifier le simulateur' : 'Ajouter un nouveau simulateur'}
            </h2>
            <SimulatorForm
              onSubmit={handleSubmit}
              initialData={editingSimulator || undefined}
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simulators.map((simulator) => (
            <SimulatorCard
              key={simulator.id}
              simulator={simulator}
              isAdmin
              onEdit={(sim) => {
                setEditingSimulator(sim);
                setShowForm(true);
              }}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>
    </div>
  );
}