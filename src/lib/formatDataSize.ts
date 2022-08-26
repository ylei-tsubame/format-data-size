import {
  BigFloat,
  FormatDataSizeFunction,
  FormatDataSizeInputValue,
  FormatDataSizeOptions,
} from '../types';

import {
  clamp,
  convert,
  format,
  round,
  sanitizeDataSizeUnit,
  sanitizeInputValue,
  sanitizePrecision,
  selectDataSizeUnit,
  trimEnd,
} from '.';

export const formatDataSize: FormatDataSizeFunction = (
  value: FormatDataSizeInputValue,
  { fromUnit = 'B', locale, precision, toUnit }: FormatDataSizeOptions = {},
) => {
  let result: BigFloat;

  try {
    result = sanitizeInputValue(value);
  } catch (error) {
    return undefined;
  }

  const { max: pMax, min: pMin } = sanitizePrecision(precision);
  const { unit: sanitizedFromUnit } = sanitizeDataSizeUnit(fromUnit, 'B');

  result = convert(result, sanitizedFromUnit, { isReverse: true });

  const resultUnit = selectDataSizeUnit(result, sanitizedFromUnit, {
    toUnit,
  });

  result = convert(result, resultUnit);
  result = round(result, {
    toPrecision: clamp(result.precision, pMin, pMax),
  });
  result = trimEnd(result, pMin);

  const resultString = format(result, { locale });

  return {
    value: resultString,
    unit: resultUnit,
  };
};
