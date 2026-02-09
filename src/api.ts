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
