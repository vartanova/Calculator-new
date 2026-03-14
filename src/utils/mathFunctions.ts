import type { UnaryOp, CalcResult } from "../types/types";

export function applyUnaryOp(op: UnaryOp, a: number): CalcResult {
  let value: number;

  switch (op) {
    case "round":
      value = Math.round(a);
      break;

    case "trunc":
      value = Math.trunc(a);
      break;

    case "int_part":
      value = a >= 0 ? Math.floor(a) : Math.ceil(a);
      break;

    case "frac":
      value = a - Math.trunc(a);
      break;

    case "abs":
      value = Math.abs(a);
      break;

    case "sqr":
      value = a * a;
      break;

    case "sqrt":
      if (a < 0)
        return { ok: false, error: "√ от отрицательного числа не определён" };
      value = Math.sqrt(a);
      break;

    case "exp":
      value = Math.exp(a);
      break;

    case "ln":
      if (a <= 0) return { ok: false, error: "ln определён только для x > 0" };
      value = Math.log(a);
      break;

    case "sin":
      value = Math.sin(a);
      break;

    case "cos":
      value = Math.cos(a);
      break;

    case "tan":
      if (Math.abs(Math.cos(a)) < 1e-14)
        return { ok: false, error: "tg не определён при π/2 + πn" };
      value = Math.tan(a);
      break;

    case "arctan":
      value = Math.atan(a);
      break;

    case "arcsin":
      if (a < -1 || a > 1)
        return { ok: false, error: "arcsin определён только для x ∈ [−1, 1]" };
      value = Math.asin(a);
      break;

    case "arccos":
      if (a < -1 || a > 1)
        return { ok: false, error: "arccos определён только для x ∈ [−1, 1]" };
      value = Math.acos(a);
      break;

    case "log10":
      if (a <= 0)
        return { ok: false, error: "log₁₀ определён только для x > 0" };
      value = Math.log10(a);
      break;

    case "log2":
      if (a <= 0)
        return { ok: false, error: "log₂ определён только для x > 0" };
      value = Math.log2(a);
      break;

    case "ceil":
      value = Math.ceil(a);
      break;

    case "floor":
      value = Math.floor(a);
      break;

    case "sign":
      value = Math.sign(a);
      break;

    case "pi":
      value = Math.PI;
      break;

    default:
      return { ok: false, error: "Неизвестная функция" };
  }

  if (!isFinite(value)) {
    return { ok: false, error: "Результат не определён" };
  }

  return { ok: true, value };
}

export function unaryLabel(op: UnaryOp, a: number): string {
  const labels: Record<UnaryOp, string> = {
    round: `Round(${a})`,
    trunc: `Trunc(${a})`,
    int_part: `Int(${a})`,
    frac: `Frac(${a})`,
    abs: `|${a}|`,
    sqr: `${a}²`,
    sqrt: `√${a}`,
    exp: `e^${a}`,
    ln: `ln(${a})`,
    log10: `log₁₀(${a})`,
    log2: `log₂(${a})`,
    sin: `sin(${a})`,
    cos: `cos(${a})`,
    tan: `tg(${a})`,
    arctan: `arctg(${a})`,
    arcsin: `arcsin(${a})`,
    arccos: `arccos(${a})`,
    ceil: `ceil(${a})`,
    floor: `floor(${a})`,
    sign: `sign(${a})`,
    pi: `π`,
  };
  return labels[op] ?? op;
}
