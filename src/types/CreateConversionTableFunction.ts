import { ConversionTable, DataSizeUnit } from '.';

export type CreateConversionTableOptions = {
  existingTable?: ConversionTable;
  unitSectionLength?: Readonly<number>;
  units?: Readonly<DataSizeUnit[]>;
};

export type CreateConversionTableFunction = (
  options?: CreateConversionTableOptions,
) => ConversionTable;
