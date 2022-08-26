import { BigFloat, FormatFunction, FormatOptions } from '../types';

import { p10n } from './p10n';

export const format: FormatFunction = (
  { precision, value }: BigFloat,
  {
    bigintFormatOptions,
    numberFormatOptions,
    locale: inputLocale,
  }: FormatOptions = {},
) => {
  const mask = p10n(precision);
  const integralInt = value / mask;
  const fractionInt = value % mask;

  let [zero, decimal] = '0.';
  let integral = integralInt.toString();
  let fraction = fractionInt.toString();

  if (inputLocale) {
    const locale = typeof inputLocale === 'string' ? inputLocale : undefined;

    [zero, decimal] = (0.1).toLocaleString(locale, numberFormatOptions);

    integral = integralInt.toLocaleString(locale, bigintFormatOptions);
    fraction = fractionInt.toLocaleString(locale, {
      ...bigintFormatOptions,

      useGrouping: false,
    });
  }

  let result = integral;

  if (precision > 0) {
    result += `${decimal}${fraction.padStart(precision, zero)}`;
  }

  return result;
};
