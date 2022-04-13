import {
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
  valueInBits: bigint,
  fromUnit: DataSizeUnit,
  options?: SelectDataSizeUnitOptions,
) => DataSizeUnit;
