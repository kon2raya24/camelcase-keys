export function toCamelCase(str: string): string {
  if (!str || typeof str !== "string") throw new Error("Input must be a non-empty string");
  return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");
}
