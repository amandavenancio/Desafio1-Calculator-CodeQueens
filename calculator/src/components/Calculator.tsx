import { useState } from "react";
import { add, subtract, multiply, divide } from "../utils/mathOperations";
import InputField from "./InputField";
import Results from "./Results";
import { CalcButton, ResetButton } from "./Button";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  width: 90%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
`;

const Calculator = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [results, setResults] = useState<{ add: number; subtract: number; multiply: number; divide: string | number } | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setNum: React.Dispatch<React.SetStateAction<string>>) => {
    const value = e.target.value;
  
    // Permite apenas números e um único ponto decimal, bloqueando "e" e outros caracteres inválidos
    if (/^\d*\.?\d*$/.test(value)) {
      setNum(value);
    }
  };

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setResults({
        add: add(n1, n2),
        subtract: subtract(n1, n2),
        multiply: multiply(n1, n2),
        divide: n2 === 0 ? "Erro (divisão por zero)" : divide(n1, n2),
      });
    }
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResults(null);
  };

  return (
    <Container>
      <Title>Calculadora</Title>
      <InputField value={num1} onChange={(e) => handleInput(e, setNum1)} placeholder="Digite o primeiro número" />
      <InputField value={num2} onChange={(e) => handleInput(e, setNum2)} placeholder="Digite o segundo número" />
      
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CalcButton onClick={handleCalculate} disabled={num1 === "" || num2 === ""}>Calcular</CalcButton>
        <ResetButton onClick={handleClear}>Limpar</ResetButton>
      </div>

      {results && <Results results={results} />}
    </Container>
  );
};

export default Calculator;
