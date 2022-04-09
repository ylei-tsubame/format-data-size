type FormatDataSizeOptions = {
  fromUnit?: DataSizeUnit;
  locale?: boolean | string;
  precision?: PrecisionControl;
  returnOnFailure?: unknown;
  toUnit?: DataSizeUnit;
};

type FormatDataSizeFunction = (
  value: DataSizeValue | string,
  options?: FormatDataSizeOptions,
) => DataSize | unknown;
