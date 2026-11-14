import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchHolidays } from "../services/holidaysApi";
import type { Holiday } from "../types";
import { todayISO } from "../utils/date";

type Status = "loading" | "success" | "error";

/** Hook personalizado: carrega os feriados do ano atual e do próximo pela BrasilAPI. */
export function useHolidays() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const year = new Date().getFullYear();
    setStatus("loading");

    Promise.all([fetchHolidays(year, controller.signal), fetchHolidays(year + 1, controller.signal)])
      .then(([current, next]) => {
        setHolidays([...current, ...next]);
        setStatus("success");
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Erro desconhecido.");
        setStatus("error");
      });

    return () => controller.abort();
  }, [attempt]);

  const upcoming = useMemo(() => {
    const today = todayISO();
    return holidays.filter((holiday) => holiday.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  }, [holidays]);

  const holidayByDate = useMemo(() => new Map(holidays.map((holiday) => [holiday.date, holiday])), [holidays]);

  const retry = useCallback(() => setAttempt((value) => value + 1), []);

  return { upcoming, holidayByDate, status, error, retry };
}
