import { comma } from "../src/filter";

describe("comma", () => {
  it("should be 123", () => {
    expect(comma(123)).toBe("123");
  });

  it("should be 1,234", () => {
    expect(comma(1234)).toBe("1,234");
  });

  it("should be 1,234,567", () => {
    expect(comma(1234567)).toBe("1,234,567");
  });
});
