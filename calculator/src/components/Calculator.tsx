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
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [results, setResults] = useState<{ add: number; subtract: number; multiply: number; divide: string | number } | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setNum: React.Dispatch<React.SetStateAction<number | "">>) => {
    setNum(e.target.value === "" ? "" : parseFloat(e.target.value));
  };

  const handleCalculate = () => {
    if (num1 !== "" && num2 !== "") {
      setResults({
        add: add(num1, num2),
        subtract: subtract(num1, num2),
        multiply: multiply(num1, num2),
        divide: num2 === 0 ? "Erro (divisão por zero)" : divide(num1, num2),
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