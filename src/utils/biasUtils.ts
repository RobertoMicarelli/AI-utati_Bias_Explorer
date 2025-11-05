import { CognitiveBias, SearchFilters } from '../types/bias';

/**
 * Estrae tutti i tag unici dai bias
 */
export const extractUniqueTags = (biases: CognitiveBias[]): string[] => {
  const tagsSet = new Set<string>();
  
  biases.forEach(bias => {
    if (bias["TAG 1"]) tagsSet.add(bias["TAG 1"].trim());
    if (bias.TAG2) tagsSet.add(bias.TAG2.trim());
  });
  
  return Array.from(tagsSet).sort();
};

/**
 * Filtra i bias in base ai criteri di ricerca
 */
export const filterBiases = (
  biases: CognitiveBias[],
  filters: SearchFilters
): CognitiveBias[] => {
  return biases.filter(bias => {
    // Filtro per nome
    if (filters.nameQuery) {
      const nameMatch = bias.Bias.toLowerCase().includes(filters.nameQuery.toLowerCase());
      if (!nameMatch) return false;
    }
    
    // Filtro per descrizione
    if (filters.descriptionQuery) {
      const descMatch = bias.Descrizione.toLowerCase().includes(filters.descriptionQuery.toLowerCase());
      if (!descMatch) return false;
    }
    
    // Filtro per tag
    if (filters.selectedTags.length > 0) {
      const biasTags = [bias["TAG 1"], bias.TAG2].filter(Boolean);
      const hasMatchingTag = filters.selectedTags.some(selectedTag =>
        biasTags.includes(selectedTag)
      );
      if (!hasMatchingTag) return false;
    }
    
    return true;
  });
};

/**
 * Abbrevia una stringa a un numero massimo di caratteri
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Formatta i tag per la visualizzazione (rimuove #)
 */
export const formatTag = (tag: string): string => {
  return tag.replace('#', '');
};

/**
 * Normalizza il testo per la ricerca (lowercase, trim, rimuove accenti)
 */
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};
