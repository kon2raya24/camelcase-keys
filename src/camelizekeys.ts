
// Type exports for consumers
// Add specific types as needed
/**
 * camelizeKeys
 * @param obj
 * @param any>
 */
export function camelizeKeys(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[toCamelCase(key)] = obj[key];
    }
  }
  return result;
}
