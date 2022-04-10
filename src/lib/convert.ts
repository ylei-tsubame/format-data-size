import { conversionTable } from '../singletons';

export const convert: ConvertFunction = (
  value: bigint,
  unit: DataSizeUnit,
  { isReverse }: ConvertOptions = {},
) => {
  const unchangedValue: [bigint, bigint] = [value, 0n];

  if (unit === 'b') {
    return unchangedValue;
  }

  const convertKey = `b-${unit}`;
  const convertMultiplier: bigint | undefined = conversionTable[convertKey];

  if (!convertMultiplier) {
    return unchangedValue;
  }

  if (isReverse) {
    return [value * conversionTable[convertKey], 0n];
  }

  return [value / convertMultiplier, value % convertMultiplier];
};
