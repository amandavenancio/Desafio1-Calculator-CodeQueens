interface ResultProps {
  sum: number;
  diff: number;
  product: number;
  quotient: number;
}

const Result = ({ sum, diff, product, quotient }: ResultProps) => {
  return (
    <div>
      <h3>Resultados:</h3>
      <p>Adição: {sum}</p>
      <p>Subtração: {diff}</p>
      <p>Multiplicação: {product}</p>
      <p>Divisão: {isNaN(quotient) ? "Erro (divisão por zero)" : quotient}</p>
    </div>
  );
};

export default Result;
