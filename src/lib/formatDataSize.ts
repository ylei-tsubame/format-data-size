import {
  FormatDataSizeFunction,
  FormatDataSizeInputValue,
  FormatDataSizeOptions,
} from '../types';

import {
  adjustPrecision,
  convert,
  format,
  sanitizeDataSizeUnit,
  selectDataSizeUnit,
} from '.';

export const formatDataSize: FormatDataSizeFunction = (
  value: FormatDataSizeInputValue,
  { fromUnit = 'B', locale, precision = 2, toUnit }: FormatDataSizeOptions = {},
) => {
  const valueParts = value.toString().split(/\D/, 2);
  const valuePrecision = valueParts[1] ? valueParts[1].length : 0;
  const valueString = valueParts.join('');

  let resultValue: bigint;
  let resultFraction = '';

  if (valueString === '') {
    return undefined;
  }

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

  [resultValue] = convert(resultValue, sanitizedFromUnit, { isReverse: true });

  [resultValue, resultFraction] = convert(resultValue, resultUnit, {
    precision: typeof precision === 'number' ? precision : precision?.max,
  });

  const resultValueString = resultValue.toString();
  let fractionIndex = resultValueString.length - valuePrecision;
  let resultString;

  ({ stringInt: resultString, fractionIndex } = adjustPrecision(
    `${resultValueString}${resultFraction}`,
    fractionIndex,
    precision,
  ));

  resultString = format(resultString, fractionIndex, { locale });

  return {
    value: resultString,
    unit: resultUnit,
  };
};
