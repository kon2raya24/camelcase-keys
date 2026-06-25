import { describe, it, expect } from "vitest";
import { camelizeKeys } from "../camelizekeys";

describe("camelizeKeys", () => {
  it("should be a function", () => {
    expect(typeof camelizeKeys).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => camelizeKeys(null as any)).toThrow();
  });
});
