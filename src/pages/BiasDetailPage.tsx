import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import biasesData from '../data/biases.json';
import { CognitiveBias } from '../types/bias';
import { formatTag } from '../utils/biasUtils';

const BiasDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  
  const biases = biasesData as CognitiveBias[];
  const biasIndex = parseInt(id || '0');
  const bias = biases[biasIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (!bias) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card p-12 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bias non trovato
          </h2>
          <button
            onClick={() => navigate('/search')}
            className="btn-primary"
          >
            Torna alla ricerca
          </button>
        </div>
      </div>
    );
  }

  const goToPreviousBias = () => {
    if (biasIndex > 0) {
      setCurrentPage(1);
      navigate(`/bias/${biasIndex - 1}`);
    }
  };

  const goToNextBias = () => {
    if (biasIndex < biases.length - 1) {
      setCurrentPage(1);
      navigate(`/bias/${biasIndex + 1}`);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/search')}
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2 transition-colors"
          >
            ← Torna ai risultati
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={goToPreviousBias}
              disabled={biasIndex === 0}
              className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              ← Bias precedente
            </button>
            <span className="text-sm text-gray-500">
              {biasIndex + 1} / {biases.length}
            </span>
            <button
              onClick={goToNextBias}
              disabled={biasIndex === biases.length - 1}
              className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              Bias successivo →
            </button>
          </div>
        </div>

        {/* Page indicator */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentPage === 1
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            Pagina 1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentPage === 2
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            Pagina 2
          </button>
        </div>

        {/* Main Card */}
        <div className="card p-8 animate-fadeIn">
          {currentPage === 1 ? (
            // PAGE 1: Bias, Descrizione, Contestualizzazione, Vantaggi, Svantaggi
            <div className="space-y-8">
              {/* Title */}
              <div className="border-b-4 border-primary-500 pb-6">
                <h1 className="text-4xl font-black text-gray-800 mb-4">
                  {bias.Bias}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {bias["TAG 1"] && (
                    <span className="tag tag-active text-sm">
                      {formatTag(bias["TAG 1"])}
                    </span>
                  )}
                  {bias.TAG2 && (
                    <span className="tag tag-active text-sm">
                      {formatTag(bias.TAG2)}
                    </span>
                  )}
                  {bias["TAG LUSTER"] && (
                    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                      🏷️ {formatTag(bias["TAG LUSTER"])}
                    </span>
                  )}
                </div>
              </div>

              {/* Descrizione */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  📖 Descrizione
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {bias.Descrizione}
                </p>
              </div>

              {/* Contestualizzazione nel Reale */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🌍 Contestualizzazione nel Reale
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {bias["Contestualizzazione nel Reale"]}
                </p>
              </div>

              {/* Vantaggi e Svantaggi */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    ✅ Vantaggi
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {bias.Vantaggi}
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                  <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    ⚠️ Svantaggi
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {bias.Svantaggi}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // PAGE 2: Tecniche per Gestirlo, Attività Esperienziale, Fonti, Tag Cluster
            <div className="space-y-8">
              {/* Title */}
              <div className="border-b-4 border-accent-500 pb-6">
                <h1 className="text-4xl font-black text-gray-800">
                  {bias.Bias}
                </h1>
                <p className="text-gray-600 mt-2">Pagina 2: Gestione e Approfondimenti</p>
              </div>

              {/* Tecniche per gestirlo */}
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🛠️ Tecniche per Gestirlo
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {bias["Tecniche per gestirlo"]}
                </div>
              </div>

              {/* Attività Esperienziale */}
              <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🎯 Attività Esperienziale di Aula
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {bias["Attività Esperienziale di Aula"]}
                </div>
              </div>

              {/* Fonti */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  📚 Fonti
                </h2>
                <p className="text-gray-700 leading-relaxed italic">
                  {bias.Fonti}
                </p>
              </div>

              {/* Tag Cluster */}
              {bias["TAG LUSTER"] && (
                <div className="bg-gray-100 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    🏷️ Tag Cluster
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                      {formatTag(bias["TAG LUSTER"])}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="mt-8 flex justify-center gap-4">
          {currentPage === 1 ? (
            <button
              onClick={() => setCurrentPage(2)}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
            >
              Vai a Pagina 2 →
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage(1)}
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
            >
              ← Torna a Pagina 1
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiasDetailPage;
