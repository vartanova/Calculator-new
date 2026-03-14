import { useState, useCallback } from 'react';
import type { BinaryOp, UnaryOp, SpecialFn } from '../types/types';
import { parseVal, formatResult } from '../utils/parser';
import { applyBinaryOp, binaryLabel } from '../utils/operations';
import { calcFx, fxLabel, calcF2, f2Label } from '../utils/specialFunctions';
import { useHistory } from './useHistory';
import { applyUnaryOp, unaryLabel } from '../utils/MathFunctions';

export type ResultState =
  | { status: 'idle' }
  | { status: 'ok'; display: string }
  | { status: 'error'; message: string };

export function useCalculator() {
  const [inputA, setInputA] = useState('0');
  const [inputB, setInputB] = useState('0');
  const [result, setResult] = useState<ResultState>({ status: 'idle' });

  const { entries, addEntry, clearEntries } = useHistory();

  const runBinary = useCallback(
    (op: BinaryOp) => {
      try {
        const a = parseVal(inputA);
        const b = parseVal(inputB);
        const calcResult = applyBinaryOp(op, a, b);

        if (!calcResult.ok) {
          setResult({ status: 'error', message: calcResult.error });
          return;
        }

        const display = formatResult(calcResult.value);
        const label = binaryLabel(op, a, b);
        setResult({ status: 'ok', display });
        addEntry(label, display);
      } catch (e) {
        setResult({ status: 'error', message: (e as Error).message });
      }
    },
    [inputA, inputB, addEntry]
  );

  const runUnary = useCallback(
    (op: UnaryOp) => {
      try {
        const a = parseVal(inputA);
        const calcResult = applyUnaryOp(op, a);

        if (!calcResult.ok) {
          setResult({ status: 'error', message: calcResult.error });
          return;
        }

        const display = formatResult(calcResult.value);
        const label = unaryLabel(op, a);
        setResult({ status: 'ok', display });
        addEntry(label, display);
      } catch (e) {
        setResult({ status: 'error', message: (e as Error).message });
      }
    },
    [inputA, addEntry]
  );

  const runSpecial = useCallback(
    (fn: SpecialFn) => {
      try {
        const x = parseVal(inputA);

        const calcResult = fn === 'fx' ? calcFx(x) : calcF2(x);

        if (!calcResult.ok) {
          setResult({ status: 'error', message: calcResult.error });
          return;
        }

        const display = formatResult(calcResult.value);
        const label = fn === 'fx' ? fxLabel(x) : f2Label(x);
        setResult({ status: 'ok', display });
        addEntry(label, display);
      } catch (e) {
        setResult({ status: 'error', message: (e as Error).message });
      }
    },
    [inputA, addEntry]
  );

  const clearAll = useCallback(() => {
    setInputA('0');
    setInputB('0');
    setResult({ status: 'idle' });
  }, []);

  return {
    inputA,
    inputB,
    result,
    history: entries,
    setInputA,
    setInputB,
    runBinary,
    runUnary,
    runSpecial,
    clearAll,
    clearHistory: clearEntries,
  };
}
