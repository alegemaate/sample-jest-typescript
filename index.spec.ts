import { add, subtract } from ".";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("adds two negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe("subtract", () => {
  it("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("subtracts two negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });
});
