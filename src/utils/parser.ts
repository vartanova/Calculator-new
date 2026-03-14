export function parseVal(raw: string): number {
  const normalized = raw.trim().replace(",", ".");
  const value = parseFloat(normalized);

  if (isNaN(value)) {
    throw new Error(`Введите числа правильно (получено: "${raw}")`);
  }

  return value;
}
export function formatResult(value: number): string {
  if (Number.isInteger(value)) return String(value);
  return parseFloat(value.toPrecision(12)).toString();
}
