import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Percorsi assoluti dei file originali (i file sono stati copiati in public/ per essere serviti)
// Originale: /Users/robertomicarelli/Desktop/CURSOR.AI/Bias Explorer/Logo_Aiutati_Tondo.png
// Originale: /Users/robertomicarelli/Desktop/CURSOR.AI/Bias Explorer/Cognitive_Bias_Codex.jpg
const logoImage = '/Logo_Aiutati_Tondo.png';
const codexImage = '/Cognitive_Bias_Codex.jpg';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [quickSearch, setQuickSearch] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(quickSearch)}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fadeIn">
          <img 
            src={logoImage}
            alt="AI-utati Logo"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Header con animazione */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            🧠 COGNITIVE BIAS EXPLORER 🧠
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            Scopri le scorciatoie della mente umana
          </p>
          <p className="text-xl text-accent-600 font-medium">
            😉 Conoscerle ti rende più consapevole 😉
          </p>
        </div>

        {/* Immagine principale */}
        <div className="card p-8 mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img 
                src={codexImage}
                alt="Cognitive Bias Codex"
                className="rounded-xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  231 Bias Cognitivi
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il nostro cervello usa <span className="font-semibold text-primary-600">scorciatoie mentali</span> per 
                  prendere decisioni rapide. Queste euristiche sono utili, ma possono portare a 
                  <span className="font-semibold text-accent-600"> errori sistematici</span> nel giudizio.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border-2 border-primary-200">
                  <div className="text-3xl font-black text-primary-600">107</div>
                  <div className="text-sm text-gray-600 font-medium">Tag Unici</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border-2 border-accent-200">
                  <div className="text-3xl font-black text-accent-600">11</div>
                  <div className="text-sm text-gray-600 font-medium">Categorie</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ricerca rapida */}
        <div className="card p-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            🔍 Inizia la tua esplorazione
          </h2>
          
          <form onSubmit={handleQuickSearch} className="space-y-6">
            <div>
              <input
                type="text"
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                placeholder="Cerca un bias per nome o parola chiave..."
                className="input-field text-lg"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="btn-primary text-lg px-8 py-4"
              >
                🔎 Ricerca Rapida
              </button>
              <button
                type="button"
                onClick={() => navigate('/search')}
                className="btn-secondary text-lg px-8 py-4"
              >
                🎯 Ricerca Avanzata
              </button>
            </div>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center text-gray-600 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm mb-2">
            Database completo di bias cognitivi per la formazione e la consapevolezza decisionale
          </p>
          <div className="border-t border-gray-300 pt-4 mt-4 space-y-2">
            <p className="text-xs text-gray-500">
              Contenuti sui Bias tratti dal Libro:{' '}
              <a 
                href="https://amzn.to/3JnVYkW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline font-medium"
              >
                "Gli errori della mente"
              </a>
              {' '}Mondino L., Brambilla L.
            </p>
            <p className="text-xs text-gray-500">
              APP Realizzata dal Dr Roberto Micarelli (AI-utati){' '}
              <a 
                href="https://www.ai.utati.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline font-medium"
              >
                www.ai.utati.it
              </a>
              {' '}•{' '}
              <a 
                href="mailto:roberto@ai-utati.it" 
                className="text-primary-600 hover:text-primary-700 underline font-medium"
              >
                roberto@ai-utati.it
              </a>
              {' '}• Tel:{' '}
              <a 
                href="tel:+39335450705" 
                className="text-primary-600 hover:text-primary-700 underline font-medium"
              >
                335 450 705
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
