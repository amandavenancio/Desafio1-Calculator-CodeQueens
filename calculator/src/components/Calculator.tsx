import { useState } from "react";
import { add, subtract, multiply, divide } from "../utils/mathOperations";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [showResults, setShowResults] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setNum: React.Dispatch<React.SetStateAction<number | "">>) => {
    setNum(e.target.value === "" ? "" : parseFloat(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2>Calculadora Básica</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => handleInput(e, setNum1)}
        placeholder="Digite o primeiro número"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => handleInput(e, setNum2)}
        placeholder="Digite o segundo número"
      />
      <button onClick={handleCalculate} disabled={num1 === "" || num2 === ""}>
        Calcular
      </button>

      {showResults && num1 !== "" && num2 !== "" && (
        <div className={styles.results}>
          <p>Adição: {add(num1, num2)}</p>
          <p>Subtração: {subtract(num1, num2)}</p>
          <p>Multiplicação: {multiply(num1, num2)}</p>
          <p>Divisão: {isNaN(divide(num1, num2)) ? "Erro (divisão por zero)" : divide(num1, num2)}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
