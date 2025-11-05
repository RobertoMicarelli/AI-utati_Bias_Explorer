# 🚀 GUIDA RAPIDA - Cognitive Bias Explorer

## ⚡ Avvio Rapido (3 passi)

### 1️⃣ Installa le dipendenze
```bash
npm install
```

### 2️⃣ Avvia l'app in modalità sviluppo
```bash
npm run dev
```

### 3️⃣ Apri il browser
L'app si aprirà automaticamente su `http://localhost:3000`

---

## 🎯 Come Usare l'Applicazione

### 📍 Homepage
1. **Ricerca rapida**: Digita una parola chiave e premi "Ricerca Rapida"
2. **Ricerca avanzata**: Clicca su "Ricerca Avanzata" per tutti i filtri

### 🔍 Pagina Ricerca
1. **Dropdown**: Seleziona direttamente un bias dalla lista completa (231 bias)
2. **Ricerca nome**: Filtra i bias per nome (es: "conferma", "ancora")
3. **Ricerca descrizione**: Trova bias che contengono parole specifiche
4. **Tag**: Clicca sui tag colorati per filtrare per categoria
5. **Multi-filtro**: Combina più filtri insieme per risultati precisi
6. **Cancella filtri**: Pulsante rosso per reset completo

### 📄 Pagina Dettaglio
1. **Pagina 1/2**: Toggle tra le due viste con i bottoni in alto
2. **Navigazione**: Usa le frecce per passare al bias successivo/precedente
3. **Torna ai risultati**: Link in alto a sinistra

---

## 🏗️ Struttura File (Essenziale)

```
cognitive-bias-explorer/
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx          # 🏠 Homepage con hero section
│   │   ├── SearchPage.tsx        # 🔍 Ricerca e filtri
│   │   └── BiasDetailPage.tsx    # 📄 Dettaglio bias (2 pagine)
│   ├── data/
│   │   └── biases.json           # 💾 Dataset 231 bias
│   └── utils/
│       └── biasUtils.ts          # 🛠️ Funzioni di ricerca/filtro
├── package.json                   # 📦 Dipendenze
└── README.md                      # 📖 Documentazione completa
```

---

## 🎨 Personalizzazione

### Cambiare il Titolo
Modifica `src/pages/HomePage.tsx` linee 21-27:
```tsx
<h1>🧠 IL TUO TITOLO QUI 🧠</h1>
<p>Il tuo sottotitolo...</p>
```

### Cambiare i Colori
Modifica `tailwind.config.js` nella sezione `colors`:
```js
primary: { 500: '#TUO_COLORE' }
accent: { 500: '#TUO_COLORE' }
```

### Aggiungere/Modificare Bias
Modifica `src/data/biases.json` - è un array di oggetti JSON

---

## ⚠️ Risoluzione Problemi

### Errore: "Cannot find module"
```bash
npm install
```

### Porta 3000 già in uso
Modifica `vite.config.ts` cambiando `port: 3000` in un'altra porta

### Immagine non visualizzata
Verifica che il percorso in `HomePage.tsx` linea 48 punti correttamente all'immagine

---

## 📦 Build per Produzione

```bash
# Build dell'app
npm run build

# Test della build
npm run preview
```

La cartella `dist/` conterrà i file pronti per il deploy.

---

## 🌐 Deploy

L'app può essere deployata su:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop della cartella `dist/`
- **GitHub Pages**: Configurazione in `vite.config.ts`

---

## 💡 Tips & Tricks

1. **Performance**: I filtri usano `useMemo` per ottimizzazione
2. **Responsive**: L'app è completamente responsive mobile-first
3. **Accessibilità**: Usa Tab per navigazione keyboard
4. **Search UX**: I filtri si applicano in tempo reale (no submit button)

---

## 🆘 Supporto

Per problemi o domande:
1. Leggi il `README.md` completo
2. Controlla la console del browser per errori
3. Verifica che tutte le dipendenze siano installate

---

**Buon lavoro! 🚀**
