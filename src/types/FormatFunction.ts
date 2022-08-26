import { BigFloat } from './BigFloat';

export type FormatOptions = {
  bigintFormatOptions?: BigIntToLocaleStringOptions;
  numberFormatOptions?: Intl.NumberFormatOptions;
  locale?: boolean | string;
};

export type FormatFunction = (
  value: BigFloat,
  options?: FormatOptions,
) => string;
