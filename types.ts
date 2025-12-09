export interface DesignConcept {
  title: string;
  tagline: string;
  narrative: string;
  visualElements: string[];
  colorPalette: string[];
}

export interface MuseState {
  isLoading: boolean;
  concept: DesignConcept | null;
  error: string | null;
}
