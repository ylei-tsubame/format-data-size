import {
  DataSize,
  DataSizeUnit,
  PrecisionControl,
  TargetDataSizeUnit,
} from '.';

export type FormatDataSizeInputValue = bigint | number | string;

export type FormatDataSizeOptions = {
  /**
   * Specifies the data unit of the provided value.
   *
   * @default 'B'
   */
  fromUnit?: DataSizeUnit;

  /**
   * Specifies the locale of the output. This only affects the numbers,
   * grouping characters, and decimal character.
   *
   * - When `false` or not set, no localization will happen.
   * - When `true`, the output will be localized using system default.
   * - When `string`, it should be a BCP 47 language tag supported by
   * toLocaleString(). The difference here is this `locale` property doesn't
   * accept a `string[]` yet.
   *
   * @default undefined
   */
  locale?: boolean | string;

  /**
   * Specifies the result's precision.
   *
   * - When `number`, the resulting value will be rounded to the specified
   * number of places after the decimal. Provide `0` to round to the nearest
   * integer.
   * - When `object`, this will contain a `min` and `max` to specify the
   * precision range. Precision of the resulting value will be restricted to
   * within the given range. It's possible to only supply either the minimum
   * or maximum.
   *
   * @default 2
   */
  precision?: PrecisionControl;

  /**
   * Specifies which unit or type of units to format the input to.
   *
   * - When given the short form of a data size unit, the resulting value
   * will be repesented in the given unit.
   * - When given one of `byte`, `ibyte` (binary), `bit`, or `ibit` (binary),
   * the resulting value will be the most reasonable within the given type of
   * units.
   *
   * @example
   * formatDataSize(1234.567, { toUnit: 'ibit' });
   * // => { value: '9.65', unit: 'Kibit' }
   *
   * @default undefined
   */
  toUnit?: TargetDataSizeUnit;
};

/**
 * Returns formatted data size representation in object form.
 *
 * @param value - Value to be formatted.
 *
 * @returns Object containing the result value and unit.
 */
export type FormatDataSizeFunction = (
  value: FormatDataSizeInputValue,
  options?: FormatDataSizeOptions,
) => DataSize | undefined;
