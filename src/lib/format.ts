export const format: FormatFunction = (
  stringInt: string,
  postDecimalIndex: number,
  { bigintFormatOptions, numberFormatOptions, locale }: FormatOptions = {},
) => {
  let preDecimal = stringInt.substring(0, postDecimalIndex);
  let postDecimal = stringInt.substring(postDecimalIndex);
  let decimal = '.';

  if (locale) {
    const localeToPass = typeof locale === 'string' ? locale : undefined;

    preDecimal = BigInt(preDecimal).toLocaleString(
      localeToPass,
      bigintFormatOptions,
    );
    postDecimal = BigInt(postDecimal).toLocaleString(localeToPass, {
      ...bigintFormatOptions,
      useGrouping: false,
    });
    decimal = (0.1).toLocaleString(localeToPass, numberFormatOptions).charAt(1);
  }

  let result: string = preDecimal === '' ? '0' : preDecimal;

  if (postDecimal.length > 0) {
    result += `${decimal}${postDecimal}`;
  }

  return result;
};
