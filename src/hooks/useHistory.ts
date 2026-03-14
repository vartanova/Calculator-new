import { useState, useCallback } from 'react';
import type { HistoryEntry } from '../types/types';
import { MAX_ENTRIES, STORAGE_KEY } from '../lib/const';

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
  } catch {
    return [];
  }
}

function saveHistory(entries: HistoryEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
  }
}

export function useHistory() {
  const [entries, setEntries] = useState<HistoryEntry[]>(loadHistory);

  const addEntry = useCallback((label: string, value: string) => {
    const entry: HistoryEntry = {
      id: `${Date.now()}-${Math.random()}`,
      label,
      value,
      time: new Date().toLocaleTimeString(),
    };

    setEntries((prev) => {
      const next = [entry, ...prev].slice(0, MAX_ENTRIES);
      saveHistory(next);
      return next;
    });
  }, []);

  const clearEntries = useCallback(() => {
    setEntries([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { entries, addEntry, clearEntries };
}
