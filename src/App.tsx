import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AddSimulator } from './pages/AddSimulator';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { LegalNotice } from './pages/LegalNotice';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Calculator, Sparkles, Briefcase } from 'lucide-react';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center gap-8">
                <a
                  href="/"
                  className="group flex items-center gap-2 px-3 py-2 rounded-xl text-gray-900 font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span className="relative">
                    Simulateurs
                    <Sparkles className="absolute -top-3 -right-4 w-4 h-4 text-yellow-300 animate-pulse" />
                  </span>
                </a>
                <a
                  href="/about"
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  À propos
                </a>
                <a
                  href="https://www.linkedin.com/in/benjamin-hofman-22b1b5296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      <Briefcase className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">Benjamin Hofman</span>
                      <span className="text-xs text-gray-600">Expert comptable diplômé</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ajouter" element={<AddSimulator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/confidentialite" element={<PrivacyPolicy />} />
        </Routes>

        <footer className="bg-white border-t mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-4">
                <a href="/" className="text-sm text-gray-600 hover:text-gray-900">Accueil</a>
                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="/mentions-legales" className="text-sm text-gray-600 hover:text-gray-900">Mentions légales</a>
                <a href="/confidentialite" className="text-sm text-gray-600 hover:text-gray-900">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </footer>

        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;