export const convertToNumber = (value: string): number | null =>
  isValid(Number(value)) ? Number(value) : null;

const isValid = (value: unknown): boolean =>
  typeof value === 'number' ? true : false;
