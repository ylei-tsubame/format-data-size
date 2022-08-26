import {
  BigFloat,
  ConversionTable,
  DataSizeUnit,
  DataSizeUnitSection,
  TargetDataSizeUnit,
} from '.';

export type SelectDataSizeUnitOptions = {
  conversionTable?: ConversionTable;
  toUnit?: TargetDataSizeUnit;
  units?: Readonly<DataSizeUnit[]>;
  unitSections?: Readonly<DataSizeUnitSection[]>;
  unitSectionLength?: Readonly<number>;
};

export type SelectDataSizeUnitFunction = (
  value: BigFloat,
  fromUnit: DataSizeUnit,
  options?: SelectDataSizeUnitOptions,
) => DataSizeUnit;
