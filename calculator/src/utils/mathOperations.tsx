export const add = (a: number, b: number) => formatNumber(a + b);
export const subtract = (a: number, b: number) => formatNumber(a - b);
export const multiply = (a: number, b: number) => formatNumber(a * b);
export const divide = (a: number, b: number) => (b !== 0 ? formatNumber(a / b) : "Erro (divisão por zero)");

const formatNumber = (num: number): number => {
  return Number.isInteger(num) ? num : parseFloat(num.toFixed(2));
};