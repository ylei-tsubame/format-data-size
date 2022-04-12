import {
  adjustPrecision,
  convert,
  format,
  sanitizeDataSizeUnit,
  selectDataSizeUnit,
} from '.';

export const formatDataSize: FormatDataSizeFunction = (
  value: DataSizeValue | string,
  { fromUnit = 'B', locale, precision = 2, toUnit }: FormatDataSizeOptions = {},
) => {
  console.log(`value=${value},fromUnit=${fromUnit},toUnit=${toUnit}`);

  const valueParts = value.toString().split(/\D/, 2);
  const valuePrecision = valueParts[1] ? valueParts[1].length : 0;
  const valueString = valueParts.join('');

  console.log(`valueParts=${valueParts},valuePrecision=${valuePrecision}`);

  let resultValue: bigint;
  let resultFraction = '';

  try {
    resultValue = BigInt(valueString);
  } catch (error) {
    return undefined;
  }

  const { unit: sanitizedFromUnit, unitIndex: fromUnitIndex } =
    sanitizeDataSizeUnit(fromUnit, 'B');

  const resultUnit = selectDataSizeUnit(
    valueString,
    valuePrecision,
    sanitizedFromUnit,
    fromUnitIndex,
    {
      toUnit,
    },
  );

  console.log(`resultUnit=${resultUnit}:${typeof resultUnit}`);

  [resultValue] = convert(resultValue, sanitizedFromUnit, { isReverse: true });

  console.log(`resultValue=${resultValue}:${typeof resultValue}`);

  [resultValue, resultFraction] = convert(resultValue, resultUnit, {
    precision: typeof precision === 'number' ? precision : precision?.max,
  });

  console.log(`resultValue=${resultValue}:${typeof resultValue}`);
  console.log(`resultFraction=${resultFraction}:${typeof resultFraction}`);

  const resultValueString = resultValue.toString();
  let fractionIndex = resultValueString.length - valuePrecision;
  let resultString;

  ({ stringInt: resultString, fractionIndex } = adjustPrecision(
    `${resultValueString}${resultFraction}`,
    fractionIndex,
    precision,
  ));

  resultString = format(resultString, fractionIndex, { locale });

  console.log(`resultString=${resultString}:${typeof resultString}`);

  return {
    value: resultString,
    unit: resultUnit,
  };
};
