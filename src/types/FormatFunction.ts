export type FormatOptions = {
  bigintFormatOptions?: BigIntToLocaleStringOptions;
  numberFormatOptions?: Intl.NumberFormatOptions;
  locale?: boolean | string;
};

export type FormatFunction = (
  stringInt: string,
  fractionIndex: number,
  options?: FormatOptions,
) => string;
