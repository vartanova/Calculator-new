export type CalcResult =
  | { ok: true; value: number }
  | { ok: false; error: string };

export interface HistoryEntry {
  id: string;
  label: string;
  value: string;
  time: string;
}

export type BinaryOp =
  | '+'
  | '-'
  | '*'
  | '/'
  | 'pow'
  | 'max'
  | 'min'
  | 'hypot'
  | 'atan2'
  | 'log_base';

export type UnaryOp =
  | 'round'
  | 'trunc'
  | 'int_part'
  | 'frac'
  | 'abs'
  | 'sqr'
  | 'sqrt'
  | 'exp'
  | 'ln'
  | 'log10'
  | 'log2'
  | 'sin'
  | 'cos'
  | 'tan'
  | 'arctan'
  | 'arcsin'
  | 'arccos'
  | 'ceil'
  | 'floor'
  | 'sign'
  | 'pi';

export type SpecialFn = 'fx' | 'f2';
