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
