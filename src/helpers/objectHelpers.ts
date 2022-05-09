export function makeUppercase(value: string): string {
  return value.toUpperCase();
}

export function replaceSpaces(value: string): string {
  return value.replace(/\s/g, "_");
}

export function limitLength(len: number, str: string): string {
  return str.substring(0, len);
}
