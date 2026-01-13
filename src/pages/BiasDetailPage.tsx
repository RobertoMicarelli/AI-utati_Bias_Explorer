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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', fontFamily: '"Syne", sans-serif' }}>
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
            style={{ color: '#F3832C', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease', background: 'none', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0094B5'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#F3832C'}
          >
            ← Torna ai risultati
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={goToPreviousBias}
              disabled={biasIndex === 0}
              style={{ color: biasIndex === 0 ? 'rgba(243, 131, 44, 0.5)' : '#F3832C', fontWeight: 600, transition: 'color 0.3s ease', background: 'none', border: 'none', cursor: biasIndex === 0 ? 'not-allowed' : 'pointer' }}
              onMouseEnter={(e) => { if (biasIndex !== 0) e.currentTarget.style.color = '#0094B5' }}
              onMouseLeave={(e) => { if (biasIndex !== 0) e.currentTarget.style.color = '#F3832C' }}
            >
              ← Bias precedente
            </button>
            <span style={{ fontSize: '0.875rem', color: '#F3832C' }}>
              {biasIndex + 1} / {biases.length}
            </span>
            <button
              onClick={goToNextBias}
              disabled={biasIndex === biases.length - 1}
              style={{ color: biasIndex === biases.length - 1 ? 'rgba(243, 131, 44, 0.5)' : '#F3832C', fontWeight: 600, transition: 'color 0.3s ease', background: 'none', border: 'none', cursor: biasIndex === biases.length - 1 ? 'not-allowed' : 'pointer' }}
              onMouseEnter={(e) => { if (biasIndex !== biases.length - 1) e.currentTarget.style.color = '#0094B5' }}
              onMouseLeave={(e) => { if (biasIndex !== biases.length - 1) e.currentTarget.style.color = '#F3832C' }}
            >
              Bias successivo →
            </button>
          </div>
        </div>

        {/* Page indicator */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setCurrentPage(1)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              ...(currentPage === 1
                ? { background: '#0094B5', color: 'white', boxShadow: '0 4px 12px rgba(0, 148, 181, 0.3)' }
                : { background: 'rgba(255, 255, 255, 0.1)', color: '#F3832C', border: '1px solid rgba(255, 255, 255, 0.2)' })
            }}
            onMouseEnter={(e) => { if (currentPage !== 1) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)' }}
            onMouseLeave={(e) => { if (currentPage !== 1) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)' }}
          >
            Pagina 1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              ...(currentPage === 2
                ? { background: '#0094B5', color: 'white', boxShadow: '0 4px 12px rgba(0, 148, 181, 0.3)' }
                : { background: 'rgba(255, 255, 255, 0.1)', color: '#F3832C', border: '1px solid rgba(255, 255, 255, 0.2)' })
            }}
            onMouseEnter={(e) => { if (currentPage !== 2) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)' }}
            onMouseLeave={(e) => { if (currentPage !== 2) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)' }}
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
              <div style={{ borderBottom: '4px solid #0094B5', paddingBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0094B5', marginBottom: '1rem', fontFamily: '"Syne", sans-serif' }}>
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
              <div style={{ background: 'rgba(0, 148, 181, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0, 148, 181, 0.3)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                  📖 Descrizione
                </h2>
                <p style={{ color: '#F3832C', lineHeight: '1.75', fontSize: '1.125rem' }}>
                  {bias.Descrizione}
                </p>
              </div>

              {/* Contestualizzazione nel Reale */}
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                  🌍 Contestualizzazione nel Reale
                </h2>
                <p style={{ color: '#F3832C', lineHeight: '1.75' }}>
                  {bias["Contestualizzazione nel Reale"]}
                </p>
              </div>

              {/* Vantaggi e Svantaggi */}
              <div className="grid md:grid-cols-2 gap-6">
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid rgba(16, 185, 129, 0.3)' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                    ✅ Vantaggi
                  </h2>
                  <p style={{ color: '#F3832C', lineHeight: '1.75' }}>
                    {bias.Vantaggi}
                  </p>
                </div>

                <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid rgba(239, 68, 68, 0.3)' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                    ⚠️ Svantaggi
                  </h2>
                  <p style={{ color: '#F3832C', lineHeight: '1.75' }}>
                    {bias.Svantaggi}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // PAGE 2: Tecniche per Gestirlo, Attività Esperienziale, Fonti, Tag Cluster
            <div className="space-y-8">
              {/* Title */}
              <div style={{ borderBottom: '4px solid #F3832C', paddingBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0094B5', fontFamily: '"Syne", sans-serif' }}>
                  {bias.Bias}
                </h1>
                <p style={{ color: '#F3832C', marginTop: '0.5rem' }}>Pagina 2: Gestione e Approfondimenti</p>
              </div>

              {/* Tecniche per gestirlo */}
              <div style={{ background: 'rgba(243, 131, 44, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(243, 131, 44, 0.3)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                  🛠️ Tecniche per Gestirlo
                </h2>
                <div style={{ color: '#F3832C', lineHeight: '1.75', whiteSpace: 'pre-wrap' }}>
                  {bias["Tecniche per gestirlo"]}
                </div>
              </div>

              {/* Attività Esperienziale */}
              <div style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '2px solid rgba(234, 179, 8, 0.3)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                  🎯 Attività Esperienziale di Aula
                </h2>
                <div style={{ color: '#F3832C', lineHeight: '1.75', whiteSpace: 'pre-wrap' }}>
                  {bias["Attività Esperienziale di Aula"]}
                </div>
              </div>

              {/* Fonti */}
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                  📚 Fonti
                </h2>
                <p style={{ color: '#F3832C', lineHeight: '1.75', fontStyle: 'italic' }}>
                  {bias.Fonti}
                </p>
              </div>

              {/* Tag Cluster */}
              {bias["TAG LUSTER"] && (
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Syne", sans-serif' }}>
                    🏷️ Tag Cluster
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #0094B5 0%, #F3832C 100%)', color: 'white', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, boxShadow: '0 4px 12px rgba(0, 148, 181, 0.3)' }}>
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
