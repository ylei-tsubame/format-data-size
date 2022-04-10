import { conversionTable } from '../singletons';

export const convert: ConvertFunction = (
  value: bigint,
  unit: DataSizeUnit,
  { isReverse, precision: maxDividePrecision = 6 }: ConvertOptions = {},
) => {
  const unchangedValue: [bigint, bigint] = [value, 0n];

  if (unit === 'b') {
    return unchangedValue;
  }

  const convertKey = `b-${unit}`;
  const convertMultiplier: bigint | undefined = conversionTable[convertKey];

  console.log(`key=${convertKey},multiplier=${convertMultiplier}`);

  if (!convertMultiplier) {
    return unchangedValue;
  }

  if (isReverse) {
    return [value * conversionTable[convertKey], 0n];
  }

  // Increase precision to ensure correct rounding.
  const shiftMultiplier = BigInt('1'.padEnd(maxDividePrecision + 2, '0'));
  const divided = (value * shiftMultiplier) / convertMultiplier;

  return [divided / shiftMultiplier, divided % shiftMultiplier];
};
