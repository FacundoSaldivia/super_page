import { powerstats } from './stats';

export interface Super {
  id: string;
  name: string;
  powerstats: powerstats;
  image: { url: string };
  appearance: appearance;
  biography: biography;
  work: {
    base: string;
    occupation: string;
  };
}

interface appearance {
  gender: string;
  race: string;
  'eye-color': string;
  'hair-color': string;
  height: [string, string];
  weight: [string, string];
}
interface biography {
  'full-name': string;
  'place-of-birth': string;
  alignment: string;
}

// ● Peso.
// ● Altura.
// ● Nombre.
// ● Alias.
// ● Color de ojos.
// ● Color de cabello.
// ● Lugar de trabajo.
