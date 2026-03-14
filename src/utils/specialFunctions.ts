import type { CalcResult } from "../types/types";
export function calcFx(x: number): CalcResult {
  if (Math.abs(x - 1) < 1e-14) {
    return { ok: false, error: "F(x): x ≠ 1 (деление на ноль)" };
  }

  const value = (x * x + 1) / (x - 1);

  if (!isFinite(value)) {
    return { ok: false, error: "F(x): результат не определён" };
  }

  return { ok: true, value };
}

export function fxLabel(x: number): string {
  return `F(${x}) = (x²+1)/(x−1)`;
}

export function calcF2(x: number): CalcResult {
  if (!Number.isInteger(x)) {
    return {
      ok: false,
      error: "F₂(x): x должно быть целым числом (0, 1 или 2)",
    };
  }

  const map: Record<number, number> = { 0: 1, 1: 10, 2: 50 };

  if (!(x in map)) {
    return {
      ok: false,
      error: `F₂(x): x = ${x} — недопустимое значение. Допустимо: 0, 1, 2`,
    };
  }

  return { ok: true, value: map[x] };
}

export function f2Label(x: number): string {
  return `F₂(${x})`;
}
