import type { BtnDef } from "../components/ButtonGrid";
import type { BinaryOp, UnaryOp } from "../types";

export const BASIC_OPERATIONS: BtnDef<BinaryOp>[] = [
  { label: "A + B", value: "+" },
  { label: "A − B", value: "-" },
  { label: "A × B", value: "*" },
  { label: "A ÷ B", value: "/" },
];

export const EXTRA_BINARY_OPERATIONS: BtnDef<BinaryOp>[] = [
  { label: "A ^ B", value: "pow" },
  { label: "max(A,B)", value: "max" },
  { label: "min(A,B)", value: "min" },
  { label: "hypot(A,B)", value: "hypot" },
  { label: "atan2(A,B)", value: "atan2" },
  { label: "log_A(B)", value: "log_base" },
];

export const STANDART_FUNCTIONS_A: BtnDef<UnaryOp>[] = [
  { label: "Round(A)", value: "round" },
  { label: "Trunc(A)", value: "trunc" },
  { label: "Int(A)", value: "int_part" },
  { label: "Frac(A)", value: "frac" },
  { label: "|A|", value: "abs" },
  { label: "A²", value: "sqr" },
  { label: "√A", value: "sqrt" },
  { label: "eᴬ", value: "exp" },
  { label: "ln(A)", value: "ln" },
  { label: "sin(A)", value: "sin" },
  { label: "cos(A)", value: "cos" },
  { label: "tg(A)", value: "tan" },
  { label: "arctg(A)", value: "arctan" },
  { label: "π", value: "pi" },
];

export const ADDITIONAL_FUNCTIONS_A: BtnDef<UnaryOp>[] = [
  { label: "log₁₀(A)", value: "log10" },
  { label: "log₂(A)", value: "log2" },
  { label: "arcsin(A)", value: "arcsin" },
  { label: "arccos(A)", value: "arccos" },
  { label: "ceil(A)", value: "ceil" },
  { label: "floor(A)", value: "floor" },
  { label: "sign(A)", value: "sign" },
];

export const STORAGE_KEY = 'calc_history';
export const MAX_ENTRIES = 50;