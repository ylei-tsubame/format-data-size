type CreateConversionTableOptions = {
  units?: DataSizeUnit[];
  existingTable?: ConversionTable;
};

type CreateConversionTableFunction = (
  options?: CreateConversionTableOptions,
) => ConversionTable;
