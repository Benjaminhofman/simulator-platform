import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Contact() {
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
              Contact
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-white">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <a 
                  href="mailto:benjamin.hofman@hotmail.com" 
                  className="text-xl hover:text-blue-100 transition-colors"
                >
                  benjamin.hofman@hotmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <a 
                  href="tel:0634430826" 
                  className="text-xl hover:text-blue-100 transition-colors"
                >
                  06 34 43 08 26
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <span className="text-xl">Vestric et Candiac, France</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}