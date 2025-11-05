# 🧠 Cognitive Bias Explorer

Applicazione web moderna per esplorare e comprendere 231 bias cognitivi.

**Software Realizzato dal Dr Roberto Micarelli ([AI-utati](https://github.com/RobertoMicarelli))**

I contenuti sui Bias cognitivi sono tratti dal libro: **["Gli errori della mente"](https://amzn.to/3JnVYkW)** di Mondino L., Brambilla L.

## 🎯 Caratteristiche

- **Homepage accattivante**: Presentazione con immagine del Cognitive Bias Codex
- **Ricerca multipla**:
  - Dropdown con tutti i 231 bias
  - Ricerca libera per nome
  - Ricerca libera nella descrizione
  - Filtri per tag (107 tag unici)
- **Risultati**: Lista tabellare con nome e descrizione abbreviata (200 caratteri)
- **Scheda dettaglio**: 2 pagine di visualizzazione complete
  - **Pagina 1**: Bias, Descrizione, Contestualizzazione, Vantaggi, Svantaggi
  - **Pagina 2**: Tecniche per gestirlo, Attività Esperienziale, Fonti, Tag Cluster
- **Navigazione intuitiva**: Frecce avanti/indietro tra bias, paginazione 1-2

## 🛠️ Stack Tecnologico

- **React 18** + TypeScript
- **Tailwind CSS** per lo styling
- **React Router v6** per la navigazione
- **Vite** come build tool

## 📦 Installazione

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Setup

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview della build
npm run preview
```

## 📁 Struttura del Progetto

```
cognitive-bias-explorer/
├── src/
│   ├── components/          # Componenti riutilizzabili (future espansioni)
│   ├── pages/
│   │   ├── HomePage.tsx     # Schermata principale con presentazione
│   │   ├── SearchPage.tsx   # Ricerca avanzata e filtri
│   │   └── BiasDetailPage.tsx # Dettaglio bias (2 pagine)
│   ├── types/
│   │   └── bias.ts          # Type definitions
│   ├── utils/
│   │   └── biasUtils.ts     # Utility functions (filtri, ricerca)
│   ├── data/
│   │   └── biases.json      # Dataset completo (231 bias)
│   ├── App.tsx              # Componente principale con routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Stili globali + Tailwind
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Design System

### Colori Principali
- **Primary**: Blu (#0ea5e9) - Navigazione e CTA principali
- **Accent**: Magenta (#d946ef) - Tag e highlights
- **Gradients**: Utilizzati per creare depth e modernità

### Componenti UI
- **Card**: Container con shadow e hover effects
- **Tag**: Chip colorati con hover interactions
- **Buttons**: Primary (gradient) e Secondary (outline)
- **Input fields**: Focus states con ring colorati

### Animazioni
- **fadeIn**: Entrata graduale degli elementi
- **slideInRight**: Transizioni laterali
- **hover effects**: Scale e shadow su interazioni

## 🚀 Funzionalità Principali

### 1. Homepage (/)
- Hero section con titolo e sottotitoli personalizzabili
- Immagine del Cognitive Bias Codex
- Statistiche: 231 bias, 107 tag, 11 categorie
- Ricerca rapida con redirect a SearchPage

### 2. Search Page (/search)
- **Dropdown**: Selezione diretta da lista completa
- **Ricerca nome**: Filtro in tempo reale per nome bias
- **Ricerca descrizione**: Filtro nel testo della descrizione
- **Tag cliccabili**: Multi-selezione con visual feedback
- **Risultati dinamici**: Counter aggiornato in tempo reale
- **Clear filters**: Reset rapido di tutti i filtri

### 3. Detail Page (/bias/:id)
- **Navigazione bias**: Frecce prev/next per esplorare
- **2 pagine**: Toggle tra info principali e approfondimenti
- **Formattazione ricca**: Box colorati per vantaggi/svantaggi
- **Tag visualizzati**: Con cluster se disponibile
- **Scroll to top**: Automatico al cambio pagina

## 💡 Miglioramenti Futuri

- [ ] Export PDF della scheda bias
- [ ] Comparazione side-by-side di 2 bias
- [ ] Sistema di preferiti/bookmark
- [ ] Quiz interattivo per testare la conoscenza
- [ ] Dark mode
- [ ] PWA support per uso offline
- [ ] Sistema di annotazioni personali
- [ ] Ricerca semantica con AI

## 📊 Dati

Il dataset contiene **231 bias cognitivi** con i seguenti campi:
- Bias (nome)
- Descrizione
- Tecniche per gestirlo
- Contestualizzazione nel Reale
- Vantaggi
- Svantaggi
- Attività Esperienziale di Aula
- Fonti
- TAG 1
- TAG 2
- TAG CLUSTER

**Tag totali unici**: 107 (da #Apprendimento a #Vendita)

## 🎓 Uso Didattico

Questa applicazione è ideale per:
- **Formazione aziendale**: Workshop su decision-making
- **Coaching**: Consapevolezza delle distorsioni cognitive
- **Università**: Corsi di psicologia, economia comportamentale
- **Self-learning**: Miglioramento personale e pensiero critico

## 📝 Note Tecniche

### Performance
- Lazy loading delle immagini
- Memoizzazione dei filtri (useMemo)
- Virtual scrolling potenziale per lista lunga

### Accessibilità
- Semantic HTML
- Keyboard navigation
- ARIA labels (da implementare completamente)
- Contrasti colore WCAG AA

### SEO
- Meta tags configurabili
- URLs semantici (/bias/nome-bias potenziale)
- OpenGraph tags (da implementare)

## 🐛 Troubleshooting

**Problema**: Immagine non visualizzata  
**Soluzione**: Verifica che il path dell'immagine sia corretto in HomePage.tsx

**Problema**: Dati non caricati  
**Soluzione**: Controlla che biases.json sia in src/data/

**Problema**: Errori TypeScript  
**Soluzione**: `npm install` per assicurarsi che tutte le dipendenze siano installate

## 🚀 Deploy

### GitHub
Repository: [https://github.com/RobertoMicarelli/AI-utati_Bias_Explorer](https://github.com/RobertoMicarelli/AI-utati_Bias_Explorer)

### Vercel
L'applicazione può essere deployata su Vercel con pochi click:

1. Connetti il repository GitHub a Vercel
2. Vercel rileverà automaticamente che è un progetto Vite
3. Le impostazioni di build sono già configurate:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 📚 Riferimenti

I contenuti sui bias cognitivi presenti in questa applicazione sono tratti dal libro:

**["Gli errori della mente"](https://amzn.to/3JnVYkW)**  
*Autori: Mondino L., Brambilla L.*  
*Editore: ACS (Milano), 2022*

Il volume rappresenta la prima enciclopedia italiana contenente tutti i bias riconosciuti in letteratura: 234 errori cognitivi, ciascuno corredato da approfondimenti specifici.

## 📄 Licenza

Progetto per uso interno/didattico. I dati sui bias cognitivi sono tratti dal libro "Gli errori della mente" di Mondino L., Brambilla L.

---

**Sviluppato con ❤️ dal Dr Roberto Micarelli (AI-utati) utilizzando React, TypeScript e Tailwind CSS**
