import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Percorsi assoluti dei file originali (i file sono stati copiati in public/ per essere serviti)
// Originale: /Users/robertomicarelli/Desktop/CURSOR.AI/Bias Explorer/Icona-Biasino.png
// Originale: /Users/robertomicarelli/Desktop/CURSOR.AI/Bias Explorer/Cognitive_Bias_Codex.jpg
const logoImage = '/Icona-Biasino.png';
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
        {/* Logo e Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <img 
              src={logoImage}
              alt="Biasino Logo"
              style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '0.5rem' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <h1 style={{ fontFamily: '"Syne", sans-serif', fontSize: '3rem', fontWeight: 700, color: '#0094B5', margin: 0 }}>
                Cognitive Bias Explorer
              </h1>
            </div>
          </div>
          <p style={{ fontSize: '1.125rem', color: '#F3832C', maxWidth: '600px', margin: '0 auto' }}>
            Scopri le scorciatoie della mente umana - Conoscerle ti rende più consapevole
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
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#0094B5', marginBottom: '1rem' }}>
                  231 Bias Cognitivi
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#F3832C', lineHeight: '1.75' }}>
                  Il nostro cervello usa <span style={{ fontWeight: 600, color: '#0094B5' }}>scorciatoie mentali</span> per 
                  prendere decisioni rapide. Queste euristiche sono utili, ma possono portare a 
                  <span style={{ fontWeight: 600, color: '#0094B5' }}> errori sistematici</span> nel giudizio.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '12px', border: '2px solid rgba(0, 148, 181, 0.3)' }}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0094B5' }}>107</div>
                  <div style={{ fontSize: '0.875rem', color: '#F3832C', fontWeight: 500 }}>Tag Unici</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '12px', border: '2px solid rgba(243, 131, 44, 0.3)' }}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 900, color: '#F3832C' }}>11</div>
                  <div style={{ fontSize: '0.875rem', color: '#F3832C', fontWeight: 500 }}>Categorie</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ricerca rapida */}
        <div className="card p-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#0094B5', marginBottom: '1.5rem', textAlign: 'center' }}>
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
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', color: '#F3832C', fontSize: '0.875rem' }} className="animate-fadeIn">
          <p style={{ marginBottom: '0.5rem', color: '#F3832C', fontSize: '0.875rem' }}>
            Database completo di bias cognitivi per la formazione e la consapevolezza decisionale
          </p>
          <div style={{ paddingTop: '1rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.75rem', color: '#F3832C' }}>
              Contenuti sui Bias tratti dal Libro:{' '}
              <a 
                href="https://amzn.to/3JnVYkW" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#F3832C', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0094B5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F3832C'}
              >
                "Gli errori della mente"
              </a>
              {' '}Mondino L., Brambilla L.
            </p>
            <p style={{ marginBottom: '0.5rem', color: '#0094B5', fontSize: '0.875rem' }}>
              APP realizzata da <strong style={{ color: '#0094B5' }}>Roberto Micarelli</strong>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.75rem' }}>
              <a 
                href="https://www.ai-utati.it/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#F3832C', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0094B5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F3832C'}
              >
                https://www.ai-utati.it
              </a>
              <span style={{ color: '#666' }}>•</span>
              <a 
                href="mailto:roberto@ai-utati.it" 
                style={{ color: '#F3832C', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0094B5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F3832C'}
              >
                roberto@ai-utati.it
              </a>
              <span style={{ color: '#666' }}>•</span>
              <a 
                href="tel:+39335450705" 
                style={{ color: '#F3832C', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0094B5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F3832C'}
              >
                335 450 705
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
