import { describe, it, expect } from "vitest";
import { toCamelCase } from "../tocamelcase";

describe("toCamelCase", () => {
  it("should be a function", () => {
    expect(typeof toCamelCase).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => toCamelCase(null as any)).toThrow();
  });
});
