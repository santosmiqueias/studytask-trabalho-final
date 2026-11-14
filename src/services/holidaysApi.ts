import type { Holiday } from "../types";

const BASE_URL = "https://brasilapi.com.br/api/feriados/v1";

/**
 * Busca os feriados nacionais de um ano na BrasilAPI (API REST pública e gratuita).
 * Documentação: https://brasilapi.com.br/docs#tag/Feriados-Nacionais
 */
export async function fetchHolidays(year: number, signal?: AbortSignal): Promise<Holiday[]> {
  const response = await fetch(`${BASE_URL}/${year}`, { signal });
  if (!response.ok) throw new Error(`A BrasilAPI respondeu com o status ${response.status}.`);
  return (await response.json()) as Holiday[];
}
