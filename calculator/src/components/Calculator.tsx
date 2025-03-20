import { useState } from "react";
import { add, subtract, multiply, divide } from "../utils/mathOperations";
import styled from "styled-components";

// 🔹 Estilos
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
`;

const Button = styled.button`
  width: 48%;
  padding: 10px;
  margin-top: 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
`;

const CalculateButton = styled(Button)`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const ClearButton = styled(Button)`
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #a71d2a;
  }
`;

const Results = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 5px;
`;

const ResultText = styled.p`
  font-size: 18px;
  color: #333;
`;

// 🔹 Componente principal
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
      <Input type="number" value={num1} onChange={(e) => handleInput(e, setNum1)} placeholder="Digite o primeiro número" />
      <Input type="number" value={num2} onChange={(e) => handleInput(e, setNum2)} placeholder="Digite o segundo número" />
      
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CalculateButton onClick={handleCalculate} disabled={num1 === "" || num2 === ""}>
          Calcular
        </CalculateButton>
        <ClearButton onClick={handleClear}>Limpar</ClearButton>
      </div>

      {results && (
        <Results>
          <ResultText>Adição: {results.add}</ResultText>
          <ResultText>Subtração: {results.subtract}</ResultText>
          <ResultText>Multiplicação: {results.multiply}</ResultText>
          <ResultText>Divisão: {results.divide}</ResultText>
        </Results>
      )}
    </Container>
  );
};

export default Calculator;
