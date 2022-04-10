type FormatDataSizeOptions = {
  fromUnit?: DataSizeUnit;
  locale?: boolean | string;
  precision?: PrecisionControl;
  toUnit?: DataSizeUnit;
};

type FormatDataSizeFunction = (
  value: DataSizeValue | string,
  options?: FormatDataSizeOptions,
) => DataSize | undefined;
