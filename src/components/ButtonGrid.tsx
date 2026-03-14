import type { BinaryOp, UnaryOp, SpecialFn } from "../types";
import {
  ADDITIONAL_FUNCTIONS_A,
  BASIC_OPERATIONS,
  EXTRA_BINARY_OPERATIONS,
  STANDART_FUNCTIONS_A,
} from "../lib/const";
import { CalcButton } from "../shared";

interface ButtonGridProps {
  onBinary: (op: BinaryOp) => void;
  onUnary: (op: UnaryOp) => void;
  onSpecial: (fn: SpecialFn) => void;
}

export interface BtnDef<T extends string> {
  label: string;
  value: T;
}

export const ButtonGrid: React.FC<ButtonGridProps> = ({
  onBinary,
  onUnary,
  onSpecial,
}) => {
  return (
    <>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mt-5 mb-2">
        Основные операции
      </h3>
      <div className="flex flex-wrap gap-2">
        {BASIC_OPERATIONS.map((arg) => (
          <CalcButton key={arg.value} onClick={() => onBinary(arg.value)}>
            {arg.label}
          </CalcButton>
        ))}
      </div>

      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mt-5 mb-2">
        Расширенные операции
      </h3>
      <div className="flex flex-wrap gap-2">
        {EXTRA_BINARY_OPERATIONS.map((arg) => (
          <CalcButton key={arg.value} onClick={() => onBinary(arg.value)}>
            {arg.label}
          </CalcButton>
        ))}
      </div>

      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mt-5 mb-2">
        Стандартные функции от A
      </h3>
      <div className="flex flex-wrap gap-2">
        {STANDART_FUNCTIONS_A.map((arg) => (
          <CalcButton key={arg.value} onClick={() => onUnary(arg.value)}>
            {arg.label}
          </CalcButton>
        ))}
      </div>

      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mt-5 mb-2">
        Доп. функции модуля Math
      </h3>
      <div className="flex flex-wrap gap-2">
        {ADDITIONAL_FUNCTIONS_A.map((arg) => (
          <CalcButton key={arg.value} onClick={() => onUnary(arg.value)}>
            {arg.label}
          </CalcButton>
        ))}
      </div>

      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mt-5 mb-2">
        Специальные функции
      </h3>
      <div className="flex flex-wrap gap-2">
        <CalcButton variant="special" onClick={() => onSpecial("fx")}>
          F(x) — Задание 9
        </CalcButton>
        <CalcButton variant="special" onClick={() => onSpecial("f2")}>
          F₂(x) — Задание 10
        </CalcButton>
        <p className="mt-3 text-xs text-gray-400 leading-relaxed">
          <strong>F(x)</strong> = (A² + 1) / (A − 1) &nbsp;·&nbsp; A ≠ 1
          &emsp;|&emsp;
          <strong>F₂(x)</strong>: A=0→1 &nbsp; A=1→10 &nbsp; A=2→50 &nbsp;
        </p>
      </div>
    </>
  );
};
