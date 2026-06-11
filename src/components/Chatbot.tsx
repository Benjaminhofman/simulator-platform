import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  error?: boolean;
}

// Fonction de recherche locale simple
function findBestResponse(userInput: string): string {
  const normalizedInput = userInput.toLowerCase().trim();
  
  // Récupérer les simulateurs depuis localStorage
  const simulators = JSON.parse(localStorage.getItem('simulators') || '[]');
  
  // Rechercher dans les titres et descriptions
  const matchingSimulators = simulators.filter((sim: any) =>
    sim.title.toLowerCase().includes(normalizedInput) ||
    sim.description.toLowerCase().includes(normalizedInput)
  );

  if (matchingSimulators.length === 0) {
    return "Je n'ai pas trouvé de simulateur correspondant à votre recherche. Essayez d'utiliser d'autres mots-clés dans la barre de recherche en haut de la page.";
  }

  const topResults = matchingSimulators.slice(0, 3);
  
  let response = "Voici les simulateurs qui pourraient vous intéresser :\n\n";
  
  topResults.forEach((sim: any, index: number) => {
    response += `${index + 1}. ${sim.title}\n${sim.description}\n\n`;
  });

  return response;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (mounted.current) {
      scrollToBottom();
    }
  }, [messages]);

  // Raccourci clavier pour fermer le chatbot
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = findBestResponse(userMessage);
      if (mounted.current) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: response,
          error: response.includes("n'ai pas trouvé")
        }]);
      }
    } catch (error) {
      console.error('Erreur du chatbot:', error);
      if (mounted.current) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Je suis désolé, une erreur est survenue. Veuillez utiliser la barre de recherche en haut de la page.",
          error: true
        }]);
      }
    } finally {
      if (mounted.current) {
        setIsLoading(false);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors group"
        >
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl w-96 max-w-[calc(100vw-2rem)] flex flex-col">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Assistant Simulateurs
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="group p-2 hover:bg-white/20 rounded-lg transition-all duration-200 relative"
              title="Fermer (Echap)"
            >
              <X className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
              <span className="absolute -top-8 right-0 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Fermer (Echap)
              </span>
            </button>
          </div>

          <div className="flex-1 p-4 space-y-4 h-96 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <p className="text-sm">
                  👋 Bonjour ! Je suis là pour vous aider à trouver le simulateur le plus adapté à vos besoins. Décrivez simplement ce que vous recherchez.
                </p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : message.error
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-gray-100 text-gray-900'
                  } whitespace-pre-wrap`}
                >
                  {message.error && (
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-red-600">Aucun résultat</span>
                    </div>
                  )}
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-xl p-3">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t">
            <form onSubmit={handleSubmit} className="p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Décrivez ce que vous recherchez..."
                  className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="px-4 pb-4">
              <button
                onClick={handleClose}
                className="w-full py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Fermer la conversation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}