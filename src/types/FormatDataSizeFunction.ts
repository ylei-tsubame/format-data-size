import { DataSize, DataSizeUnit, PrecisionControl } from '.';

export type FormatDataSizeInputValue = bigint | number | string;

export type FormatDataSizeOptions = {
  fromUnit?: DataSizeUnit;
  locale?: boolean | string;
  precision?: PrecisionControl;
  toUnit?: DataSizeUnit;
};

export type FormatDataSizeFunction = (
  value: FormatDataSizeInputValue,
  options?: FormatDataSizeOptions,
) => DataSize | undefined;
