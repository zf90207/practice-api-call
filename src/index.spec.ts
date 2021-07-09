import { addition } from "./index";

describe("Testing the addition function", () => {
  it("should return the sum of 0 number", () => {
    expect(addition("")).toBe(0);
  });
});
