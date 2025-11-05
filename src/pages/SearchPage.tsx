import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import biasesData from '../data/biases.json';
import { CognitiveBias } from '../types/bias';
import { extractUniqueTags, filterBiases, truncateText, formatTag } from '../utils/biasUtils';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const biases = biasesData as CognitiveBias[];
  const allTags = useMemo(() => extractUniqueTags(biases), []);
  
  const [nameQuery, setNameQuery] = useState(searchParams.get('q') || '');
  const [descriptionQuery, setDescriptionQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBiasFromDropdown, setSelectedBiasFromDropdown] = useState('');

  // Filtra i bias in base ai criteri
  const filteredBiases = useMemo(() => {
    return filterBiases(biases, { nameQuery, descriptionQuery, selectedTags });
  }, [nameQuery, descriptionQuery, selectedTags, biases]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setNameQuery('');
    setDescriptionQuery('');
    setSelectedTags([]);
    setSelectedBiasFromDropdown('');
  };

  // Navigate to bias detail
  const goToBiasDetail = (index: number) => {
    navigate(`/bias/${index}`);
  };

  // Handle dropdown selection
  const handleDropdownSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.value;
    if (index) {
      goToBiasDetail(parseInt(index));
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="text-primary-600 hover:text-primary-700 font-semibold mb-4 flex items-center gap-2 transition-colors"
          >
            ← Torna alla Home
          </button>
          <h1 className="text-4xl font-black text-gray-800 mb-2">
            🔍 Ricerca Avanzata
          </h1>
          <p className="text-gray-600">
            Esplora i {biases.length} bias cognitivi con filtri multipli
          </p>
        </div>

        {/* Search Controls */}
        <div className="card p-6 mb-8 space-y-6">
          {/* Dropdown - Selezione diretta */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📋 Seleziona un bias specifico
            </label>
            <select
              value={selectedBiasFromDropdown}
              onChange={handleDropdownSelect}
              className="input-field"
            >
              <option value="">-- Scegli dalla lista completa --</option>
              {biases.map((bias, index) => (
                <option key={index} value={index}>
                  {bias.Bias}
                </option>
              ))}
            </select>
          </div>

          {/* Nome - Ricerca libera */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              🔤 Ricerca per nome (parola chiave)
            </label>
            <input
              type="text"
              value={nameQuery}
              onChange={(e) => setNameQuery(e.target.value)}
              placeholder="Es: conferma, ancora, disponibilità..."
              className="input-field"
            />
          </div>

          {/* Descrizione - Ricerca libera */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📝 Ricerca nella descrizione
            </label>
            <input
              type="text"
              value={descriptionQuery}
              onChange={(e) => setDescriptionQuery(e.target.value)}
              placeholder="Cerca una parola nella descrizione del bias..."
              className="input-field"
            />
          </div>

          {/* Clear filters button */}
          {(nameQuery || descriptionQuery || selectedTags.length > 0) && (
            <div className="flex justify-end">
              <button
                onClick={clearFilters}
                className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2"
              >
                ✕ Cancella tutti i filtri
              </button>
            </div>
          )}
        </div>

        {/* Tags Filter */}
        <div className="card p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            🏷️ Filtra per Tag ({selectedTags.length} selezionati)
          </h3>
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`tag ${selectedTags.includes(tag) ? 'tag-active' : ''}`}
              >
                {formatTag(tag)}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              📊 Risultati ({filteredBiases.length})
            </h2>
          </div>

          {filteredBiases.length === 0 ? (
            <div className="card p-12 text-center">
              <div className="text-6xl mb-4">🤔</div>
              <p className="text-xl text-gray-600">
                Nessun bias trovato con i criteri selezionati
              </p>
              <button
                onClick={clearFilters}
                className="btn-primary mt-6"
              >
                Cancella filtri
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBiases.map((bias, index) => {
                // Trova l'indice originale nel dataset completo
                const originalIndex = biases.findIndex(b => b.Bias === bias.Bias);
                
                return (
                  <div
                    key={originalIndex}
                    onClick={() => goToBiasDetail(originalIndex)}
                    className="card p-6 cursor-pointer hover:scale-[1.02] transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {bias.Bias}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {truncateText(bias.Descrizione, 200)}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {bias["TAG 1"] && (
                            <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {formatTag(bias["TAG 1"])}
                            </span>
                          )}
                          {bias.TAG2 && (
                            <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {formatTag(bias.TAG2)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-primary-600 text-2xl">→</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
