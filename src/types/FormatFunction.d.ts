type FormatOptions = {
  bigintFormatOptions?: BigIntToLocaleStringOptions;
  numberFormatOptions?: Intl.NumberFormatOptions;
  locale?: boolean | string;
};

type FormatFunction = (
  stringInt: string,
  postDecimalIndex: number,
  options?: FormatOptions,
) => string;
