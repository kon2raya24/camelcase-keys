import { describe, it, expect } from "vitest";
import { toKebabCase } from "../tokebabcase";

describe("toKebabCase", () => {
  it("should be a function", () => {
    expect(typeof toKebabCase).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => toKebabCase(null as any)).toThrow();
  });
});
