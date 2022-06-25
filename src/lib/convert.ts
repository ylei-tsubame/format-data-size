import { ConvertFunction, ConvertOptions, DataSizeUnit } from '../types';

import { CONVERSION_TABLE } from '../consts';

export const convert: ConvertFunction = (
  value: bigint,
  unit: DataSizeUnit,
  { isReverse, precision: maxDividePrecision = 6 }: ConvertOptions = {},
) => {
  const unchangedValue: [bigint, string] = [value, ''];

  if (unit === 'b') {
    return unchangedValue;
  }

  const convertKey = `b-${unit}`;
  const convertMultiplier: bigint | undefined = CONVERSION_TABLE[convertKey];

  if (!convertMultiplier) {
    return unchangedValue;
  }

  if (isReverse) {
    return [value * CONVERSION_TABLE[convertKey], ''];
  }

  // Increase precision to ensure correct rounding.
  const shiftMultiplier = BigInt('1'.padEnd(maxDividePrecision + 2, '0'));
  const divided = (value * shiftMultiplier) / convertMultiplier;

  return [
    divided / shiftMultiplier,
    `${divided % shiftMultiplier}`.padStart(maxDividePrecision + 1, '0'),
  ];
};
