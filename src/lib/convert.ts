import { BIGINT_ZERO, CONVERSION_TABLE } from '../consts';

const convert: ConvertFunction = (
  value: bigint,
  unit: DataSizeUnit,
  { isReverse }: ConvertOptions = {},
) => {
  const unchangedValue: [bigint, bigint] = [value, BIGINT_ZERO];

  if (unit === 'b') {
    return unchangedValue;
  }

  const convertKey = `b-${unit}`;
  const convertMultiplier: bigint | undefined = CONVERSION_TABLE[convertKey];

  if (!convertMultiplier) {
    return unchangedValue;
  }

  if (isReverse) {
    return [value * CONVERSION_TABLE[convertKey], BIGINT_ZERO];
  }

  return [value / convertMultiplier, value % convertMultiplier];
};

export default convert;
