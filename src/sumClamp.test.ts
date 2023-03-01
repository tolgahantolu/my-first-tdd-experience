import { sumClamp } from "./sumClamp";

describe("sumClamp", () => {
  it("should sum up to zero", () => {
    expect(sumClamp([], 10)).toBe(0);
  });

  it("should sum up to zero from some numbers", () => {
    expect(sumClamp([-1, 1], 10)).toBe(0);
  });

  it("should sum some numbers", () => {
    expect(sumClamp([1, 2, 3, 4], 20)).toBe(10);
  });

  it("should sum some numbers then sumClamp", () => {
    expect(sumClamp([1, 2, 3, 4], 5)).toBe(5);
  });
});
