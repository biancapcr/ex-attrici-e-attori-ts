import type { Actress } from "./types";
import { isActress } from "./guards";

// url base del server locale
const BASE_URL = "http://localhost:3333";

// milestone 3:
// dato un id, restituisce una Actress oppure null
export async function getActress(id: number): Promise<Actress | null> {
  try {
    // chiamata GET /actresses/:id
    const res = await fetch(`${BASE_URL}/actresses/${id}`);

    // se non trovata (404) ritorna null
    if (res.status === 404) {
      return null;
    }

    // altri errori http
    if (!res.ok) {
      throw new Error(`Errore HTTP: ${res.status}`);
    }

    // parsing json come unknown
    const data: unknown = await res.json();

    // validazione con type guard
    if (isActress(data)) {
      return data;
    }

    // struttura non valida
    return null;
  } catch (error) {
    // errore di rete o server
    console.error("getActress error:", error);
    return null;
  }
}
// milestone 4:
// restituisce un array di Actress (anche vuoto)
export async function getAllActresses(): Promise<Actress[]> {
  try {
    // chiamata GET /actresses
    const res = await fetch(`${BASE_URL}/actresses`);

    // gestione errori http
    if (!res.ok) {
      throw new Error(`Errore HTTP: ${res.status}`);
    }

    // parsing json come unknown
    const data: unknown = await res.json();

    // se il server non restituisce un array, ritorno array vuoto
    if (!Array.isArray(data)) {
      return [];
    }

    // filtro: tengo solo gli elementi che passano il type guard
    // ciò che ritorno è Actress[]
    return data.filter(isActress);
  } catch (error) {
    // errore di rete o server
    console.error("getAllActresses error:", error);
    return [];
  }
}
// milestone 5:
// riceve un array di id e recupera tutte le attrici in parallelo
// ritorna un array con Actress oppure null (se non trovata)
export async function getActresses(ids: number[]): Promise<(Actress | null)[]> {
  // creo un array di promise, una per ogni id
  const promises: Promise<Actress | null>[] = ids.map((id) => {
    // per ogni id uso la funzione già fatta in milestone 3
    return getActress(id);
  });

  // eseguo tutte le chiamate in parallelo e aspetto i risultati
  const results = await Promise.all(promises);

  // results è un array con Actress | null, nello stesso ordine degli ids
  return results;
}
