export function toKebabCase(str: string): string {
  if (!str || typeof str !== "string") throw new Error("Input must be a non-empty string");
  return str.replace(/([A-Z])/g, "-$1").replace(/[\s_]+/g, "-").toLowerCase().replace(/^-/, "");
}
