import type { HistoryEntry } from "../types";

interface HistoryPanelProps {
  entries: HistoryEntry[];
  onClear: () => void;
}

export const HistoryPanel = ({ entries, onClear }: HistoryPanelProps) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-700">
          История вычислений
        </h2>
        <button
          onClick={onClear}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          Очистить
        </button>
      </div>

      {!entries.length ? (
        <p className="text-xs text-gray-400 italic">Пусто</p>
      ) : (
        <ul className="max-h-40 overflow-y-auto space-y-1">
          {entries.slice(0, 15).map((entry) => (
            <li
              key={entry.id}
              className="flex justify-between items-center text-xs text-gray-600 py-1 border-b border-gray-100 last:border-0"
            >
              <span className="text-gray-400 mr-2 shrink-0">{entry.time}</span>
              <span className="flex-1 truncate">{entry.label}</span>
              <span className="ml-2 font-mono text-gray-800 shrink-0">
                = {entry.value}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
