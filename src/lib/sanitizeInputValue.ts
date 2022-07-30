import { BigFloat } from '../types';

export const sanitizeInputValue = (value: unknown): BigFloat => {
  const valueParts = String(value).split(/\D/, 2);
  const valueFractionLength = valueParts[1]?.length ?? 0;
  const valueString = valueParts.join('');

  if (valueString.length === 0) {
    throw Error('Value is blank.');
  }

  return {
    value: BigInt(valueString),
    precision: valueFractionLength,
  };
};
