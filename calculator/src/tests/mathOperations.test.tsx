import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../utils/mathOperations";

describe("mathOperations", () => {
  it("should correctly add two numbers", () => {
    expect(add(3, 5)).toBe(8);
  });

  it("should correctly subtract two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it("should correctly multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should correctly divide two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("should return NaN when dividing by zero", () => {
    expect(divide(5, 0)).toBeNaN();
  });
});
