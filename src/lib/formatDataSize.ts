import { UNITS } from '../consts';

import { adjustPrecision, convert, format } from '.';

export const formatDataSize: FormatDataSizeFunction = (
  value: DataSizeValue | string,
  {
    fromUnit = 'B',
    locale,
    precision = 2,
    returnOnFailure,
    toUnit,
  }: FormatDataSizeOptions = {},
) => {
  console.log(`value=${value}, fromUnit=${fromUnit}, toUnit=${toUnit}`);

  const valueParts = value.toString().split(/\D/, 2);
  const valuePrecision = valueParts[1] ? valueParts[1].length : 0;

  console.log(`valueParts=${valueParts}, valuePrecision=${valuePrecision}`);

  let resultValue: bigint;
  let resultFraction = 0n;
  let resultUnit: DataSizeUnit;

  try {
    resultValue = BigInt(valueParts.join(''));
  } catch (error) {
    return returnOnFailure;
  }

  [resultValue] = convert(resultValue, fromUnit, { isReverse: true });

  console.log(`resultValue=${resultValue}:${typeof resultValue}`);

  if (toUnit) {
    resultUnit = toUnit;
  } else {
    const autoUnitIndex = Math.ceil(valueParts[0].length / 3) - 1;

    resultUnit = UNITS[autoUnitIndex];
  }

  console.log(`resultUnit=${resultUnit}:${typeof resultUnit}`);

  [resultValue, resultFraction] = convert(resultValue, resultUnit);

  console.log(`resultValue=${resultValue}:${typeof resultValue}`);
  console.log(`resultFraction=${resultFraction}:${typeof resultFraction}`);

  const resultValueString = resultValue.toString();
  const splitIndex = resultValueString.length - valuePrecision;

  let resultString = adjustPrecision(
    `${resultValueString}${resultFraction}`,
    splitIndex,
    precision,
  );

  resultString = format(resultString, splitIndex, { locale });

  console.log(`resultString=${resultString}:${typeof resultString}`);

  return {
    value: resultString,
    unit: resultUnit,
  };
};
