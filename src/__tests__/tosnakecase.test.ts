import { describe, it, expect } from "vitest";
import { toSnakeCase } from "../tosnakecase";

describe("toSnakeCase", () => {
  it("should be a function", () => {
    expect(typeof toSnakeCase).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => toSnakeCase(null as any)).toThrow();
  });
});
