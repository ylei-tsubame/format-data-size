type CreateConversionTableOptions = {
  existingTable?: ConversionTable;
  unitSectionLength?: number;
  units?: DataSizeUnit[];
};

type CreateConversionTableFunction = (
  options?: CreateConversionTableOptions,
) => ConversionTable;
