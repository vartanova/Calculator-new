import { useCalculator } from "../hooks/useCalculator";
import { InputRow } from "./InputRow";
import { ResultDisplay } from "./ResultDisplay";
import { ButtonGrid } from "./ButtonGrid";
import { HistoryPanel } from "./HistoryPanel";
import { CalcButton } from "../shared/ui/CalcButton";

export const Calculator = () => {
  const {
    inputA,
    inputB,
    result,
    history,
    setInputA,
    setInputB,
    runBinary,
    runUnary,
    runSpecial,
    clearAll,
    clearHistory,
  } = useCalculator();

  return (
    <div className="flex flex-col gap-6">
      <div className="border border-gray-200 rounded p-4 flex flex-col gap-4">
        <InputRow
          inputA={inputA}
          inputB={inputB}
          onChangeA={setInputA}
          onChangeB={setInputB}
        />

        <ResultDisplay result={result} onClear={clearAll} />

        <CalcButton variant="danger" onClick={clearAll}>
          Очистить
        </CalcButton>

        <ButtonGrid
          onBinary={runBinary}
          onUnary={runUnary}
          onSpecial={runSpecial}
        />
      </div>

      <HistoryPanel entries={history} onClear={clearHistory} />
    </div>
  );
};
