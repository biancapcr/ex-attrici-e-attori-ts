// milestone 1: type alias per una persona generica
export type Person = {
  // id numerico, non modificabile
  readonly id: number;

  // nome completo, non modificabile
  readonly name: string;

  // anno di nascita
  birth_year: number;

  // anno di morte (opzionale)
  death_year?: number;

  // breve biografia
  biography: string;

  // url immagine
  image: string;
};

// milestone 2: insieme limitato di nazionalità accettate
export type Nationality =
  | "American"
  | "British"
  | "Australian"
  | "Israeli-American"
  | "South African"
  | "French"
  | "Indian"
  | "Israeli"
  | "Spanish"
  | "South Korean"
  | "Chinese";

// milestone 2: actress estende person aggiungendo campi specifici
export type Actress = Person & {
  // tuple di 3 film famosi (esattamente 3)
  most_famous_movies: [string, string, string];

  // premi ricevuti
  awards: string;

  // nazionalità vincolata ai valori ammessi
  nationality: Nationality;
};
