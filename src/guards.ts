import type { Actress, Nationality } from "./types";

// controllo che il valore sia un oggetto
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

// controllo che la nazionalità sia una di quelle ammesse
function isNationality(value: unknown): value is Nationality {
  const allowed: Nationality[] = [
    "American",
    "British",
    "Australian",
    "Israeli-American",
    "South African",
    "French",
    "Indian",
    "Israeli",
    "Spanish",
    "South Korean",
    "Chinese",
  ];

  return typeof value === "string" && allowed.includes(value as Nationality);
}

// milestone 3: type guard principale
export function isActress(value: unknown): value is Actress {
  // deve essere un oggetto
  if (!isRecord(value)) return false;

  // ===== campi di Person =====
  if (typeof value.id !== "number") return false;
  if (typeof value.name !== "string") return false;
  if (typeof value.birth_year !== "number") return false;

  // death_year è opzionale
  if (value.death_year !== undefined && typeof value.death_year !== "number") {
    return false;
  }

  if (typeof value.biography !== "string") return false;
  if (typeof value.image !== "string") return false;

  // ===== campi di Actress =====
  if (typeof value.awards !== "string") return false;
  if (!isNationality(value.nationality)) return false;

  // most_famous_movies: tuple di 3 stringhe
  if (!Array.isArray(value.most_famous_movies)) return false;
  if (value.most_famous_movies.length !== 3) return false;
  if (!value.most_famous_movies.every((m) => typeof m === "string")) {
    return false;
  }

  // se passa tutti i controlli è una valida
  return true;
}
