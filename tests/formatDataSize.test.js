import { formatDataSize } from '../src';

describe(`unit ${typeof formatDataSize} ${formatDataSize.name}`, () => {
  it('formats bytes to bits correctly', () => {
    expect.assertions(1);

    expect(formatDataSize(1024, { toUnit: 'b' })).toStrictEqual({
      value: '8192',
      unit: 'b',
    });
  });

  it('formats gigabytes to gibibytes correctly', () => {
    expect.assertions(1);

    expect(formatDataSize(1, { fromUnit: 'GB', toUnit: 'GiB' })).toStrictEqual({
      value: '0.93',
      unit: 'GiB',
    });
  });

  it('formats tebibytes to kilobytes correctly and returns result rounding to nearest 1/1000', () => {
    expect.assertions(1);

    expect(
      formatDataSize(2.76, { fromUnit: 'TiB', precision: 3, toUnit: 'kB' })
    ).toStrictEqual({
      value: '3034652092.662',
      unit: 'kB',
    });
  });

  it('formats < 1 fractions correctly', () => {
    expect.assertions(1);

    expect(
      formatDataSize(0.001, { fromUnit: 'TB', toUnit: 'GB' })
    ).toStrictEqual({
      value: '1',
      unit: 'GB',
    });
  });

  it('formats by auto-detecting the most approprate target unit', () => {
    expect.assertions(8);

    expect(formatDataSize(123098.456, { fromUnit: 'kB' })).toStrictEqual({
      value: '123.1',
      unit: 'MB',
    });

    expect(formatDataSize(0.00034, { fromUnit: 'TB' })).toStrictEqual({
      value: '340',
      unit: 'MB',
    });

    expect(formatDataSize(12)).toStrictEqual({
      value: '12',
      unit: 'B',
    });

    expect(formatDataSize(8000, { fromUnit: 'b' })).toStrictEqual({
      value: '8',
      unit: 'kbit',
    });

    expect(
      formatDataSize(8192, { fromUnit: 'Gibit', toUnit: 'byte' })
    ).toStrictEqual({
      value: '1.1',
      unit: 'TB',
    });

    expect(formatDataSize(11111, { fromUnit: 'YB' })).toStrictEqual({
      value: '11111',
      unit: 'YB',
    });

    expect(formatDataSize(1234.567, { toUnit: 'ibit' })).toStrictEqual({
      value: '9.65',
      unit: 'Kibit',
    });

    expect(formatDataSize(4321, { fromUnit: 'Mibit' })).toStrictEqual({
      value: '4.22',
      unit: 'Gibit',
    });
  });

  it('converts to specified locale correctly', () => {
    expect.assertions(2);

    expect(
      formatDataSize(1, {
        fromUnit: 'MB',
        locale: 'de',
        precision: 4,
        toUnit: 'GB',
      })
    ).toStrictEqual({
      value: '0,0010',
      unit: 'GB',
    });

    expect(
      formatDataSize(38475.0029, { fromUnit: 'GiB', locale: 'ar' })
    ).toStrictEqual({
      value: '٣٧٫٥٧',
      unit: 'TiB',
    });
  });

  it('handles invalid inputs', () => {
    expect.assertions(2);

    expect(formatDataSize('abcd')).toBeUndefined();

    expect(formatDataSize('abcdfa8sl274923')).toBeUndefined();
  });
});
