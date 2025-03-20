import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator";
import { describe, it, expect, beforeEach } from "vitest";

describe("Calculator", () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it("should render inputs and buttons", () => {
    expect(screen.getByPlaceholderText("Digite o primeiro número")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite o segundo número")).toBeInTheDocument();
    expect(screen.getByText("Calcular")).toBeInTheDocument();
    expect(screen.getByText("Limpar")).toBeInTheDocument();
  });

  it("should disable calculate button if inputs are empty", () => {
    const calculateButton = screen.getByText("Calcular") as HTMLButtonElement;
    expect(calculateButton).toBeDisabled();
  });

  it("should perform calculations correctly", () => {
    const input1 = screen.getByPlaceholderText("Digite o primeiro número") as HTMLInputElement;
    const input2 = screen.getByPlaceholderText("Digite o segundo número") as HTMLInputElement;
    const calculateButton = screen.getByText("Calcular");

    fireEvent.change(input1, { target: { value: "10" } });
    fireEvent.change(input2, { target: { value: "2" } });
    fireEvent.click(calculateButton);

    expect(screen.getByText("Adição: 12")).toBeInTheDocument();
    expect(screen.getByText("Subtração: 8")).toBeInTheDocument();
    expect(screen.getByText("Multiplicação: 20")).toBeInTheDocument();
    expect(screen.getByText("Divisão: 5")).toBeInTheDocument();
  });

  it("should clear inputs and results when clicking 'Limpar'", () => {
    const input1 = screen.getByPlaceholderText("Digite o primeiro número") as HTMLInputElement;
    const input2 = screen.getByPlaceholderText("Digite o segundo número") as HTMLInputElement;
    const calculateButton = screen.getByText("Calcular");
    const clearButton = screen.getByText("Limpar");

    // Preencher os inputs e calcular
    fireEvent.change(input1, { target: { value: "5" } });
    fireEvent.change(input2, { target: { value: "3" } });
    fireEvent.click(calculateButton);

    expect(screen.getByText("Adição: 8")).toBeInTheDocument();

    // Clicar em "Limpar"
    fireEvent.click(clearButton);

    expect(input1.value).toBe("");
    expect(input2.value).toBe("");
    expect(screen.queryByText("Adição: 8")).not.toBeInTheDocument();
  });
});
