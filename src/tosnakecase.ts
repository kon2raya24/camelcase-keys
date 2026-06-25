export function toSnakeCase(str: string): string {
  if (!str || typeof str !== "string") throw new Error("Input must be a non-empty string");
  return str.replace(/([A-Z])/g, "_$1").replace(/[-\s]+/g, "_").toLowerCase().replace(/^_/, "");
}
