import { FormatFunction, FormatOptions } from '../types';

export const format: FormatFunction = (
  stringInt: string,
  fractionIndex: number,
  { bigintFormatOptions, numberFormatOptions, locale }: FormatOptions = {},
) => {
  let integral = stringInt.substring(0, fractionIndex);
  let fraction = stringInt.substring(fractionIndex);
  let decimal = '.';
  let zero = '0';

  if (locale) {
    const localeToPass = typeof locale === 'string' ? locale : undefined;
    const localeCharacters = (0.1).toLocaleString(
      localeToPass,
      numberFormatOptions,
    );
    const fractionLength = fraction.length;

    decimal = localeCharacters.charAt(1);
    zero = localeCharacters.charAt(0);
    integral = BigInt(integral).toLocaleString(
      localeToPass,
      bigintFormatOptions,
    );
    fraction = BigInt(fraction)
      .toLocaleString(localeToPass, {
        ...bigintFormatOptions,
        useGrouping: false,
      })
      .padStart(fractionLength, zero);
  }

  let result: string = integral === '' ? zero : integral;

  if (fraction.length > 0) {
    result += `${decimal}${fraction}`;
  }

  return result;
};
