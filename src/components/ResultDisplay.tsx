import type { ResultState } from "../hooks/useCalculator";

interface ResultDisplayProps {
  result: ResultState;
  onClear: () => void;
}

export const ResultDisplay = ({ result }: ResultDisplayProps) => {
  if (result.status === "idle") {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Результат
        </span>
        <div className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm text-gray-400 bg-gray-50 min-h-[38px]">
          —
        </div>
      </div>
    );
  }

  if (result.status === "error") {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Результат
        </span>
        <div className="flex-1 border border-red-300 rounded px-3 py-2 text-sm text-red-600 bg-red-50 min-h-[38px]">
          ⚠ {result.message}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Результат
        </span>
        <div className="flex-1 border border-green-300 rounded px-3 py-2 text-sm font-mono text-green-700 bg-green-50 min-h-[38px] break-all">
          {result.display}
        </div>
      </div>
    </>
  );
};
