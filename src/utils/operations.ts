import type { BinaryOp, CalcResult } from "../types";

export function applyBinaryOp(op: BinaryOp, a: number, b: number): CalcResult {
  let value: number;

  switch (op) {
    case "+":
      value = a + b;
      break;

    case "-":
      value = a - b;
      break;

    case "*":
      value = a * b;
      break;

    case "/":
      if (b === 0) return { ok: false, error: "Деление на ноль" };
      value = a / b;
      break;

    case "pow":
      value = Math.pow(a, b);
      break;

    case "max":
      value = Math.max(a, b);
      break;

    case "min":
      value = Math.min(a, b);
      break;

    case "hypot":
      value = Math.hypot(a, b);
      break;

    case "atan2":
      value = Math.atan2(a, b);
      break;

    case "log_base":
      if (a <= 0 || a === 1)
        return {
          ok: false,
          error: "Основание логарифма должно быть > 0 и ≠ 1",
        };
      if (b <= 0)
        return { ok: false, error: "Аргумент логарифма должен быть > 0" };
      value = Math.log(b) / Math.log(a);
      break;

    default:
      return { ok: false, error: "Неизвестная операция" };
  }

  if (!isFinite(value)) {
    return { ok: false, error: "Результат не определён (±Infinity / NaN)" };
  }

  return { ok: true, value };
}

export function binaryLabel(op: BinaryOp, a: number, b: number): string {
  const labels: Record<BinaryOp, string> = {
    "+": `${a} + ${b}`,
    "-": `${a} − ${b}`,
    "*": `${a} × ${b}`,
    "/": `${a} ÷ ${b}`,
    pow: `${a} ^ ${b}`,
    max: `max(${a}, ${b})`,
    min: `min(${a}, ${b})`,
    hypot: `hypot(${a}, ${b})`,
    atan2: `atan2(${a}, ${b})`,
    log_base: `log_${a}(${b})`,
  };
  return labels[op] ?? op;
}
