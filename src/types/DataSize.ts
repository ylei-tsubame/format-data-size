export type DataSizeUnit =
  | 'B'
  | 'KiB'
  | 'MiB'
  | 'GiB'
  | 'TiB'
  | 'PiB'
  | 'EiB'
  | 'ZiB'
  | 'YiB'
  | 'kB'
  | 'MB'
  | 'GB'
  | 'TB'
  | 'PB'
  | 'EB'
  | 'ZB'
  | 'YB'
  | 'b'
  | 'Kibit'
  | 'Mibit'
  | 'Gibit'
  | 'Tibit'
  | 'Pibit'
  | 'Eibit'
  | 'Zibit'
  | 'Yibit'
  | 'kbit'
  | 'Mbit'
  | 'Gbit'
  | 'Tbit'
  | 'Pbit'
  | 'Ebit'
  | 'Zbit'
  | 'Ybit';

export type DataSizeUnitSection = 'bit' | 'byte' | 'ibit' | 'ibyte';

export type DataSize = {
  value: string;
  unit: DataSizeUnit;
};
