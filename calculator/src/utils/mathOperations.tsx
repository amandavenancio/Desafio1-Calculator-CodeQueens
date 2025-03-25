export const add = (a: number, b: number) => formatNumber(a + b);
export const subtract = (a: number, b: number) => formatNumber(a - b);
export const multiply = (a: number, b: number) => formatNumber(a * b);
export const divide = (a: number, b: number) => (b !== 0 ? formatNumber(a / b) : "Erro (divisão por zero)");

const formatNumber = (num: number): number => {
  const formatted = num.toFixed(2); // Arredonda para 2 casas decimais
  return parseFloat(formatted); // Retorna como número
};