import { formatDataSize } from '../src';

describe(`unit ${typeof formatDataSize} ${formatDataSize.name}`, () => {
  it('formats bytes to bits correctly', () => {
    expect.assertions(1);

    expect(formatDataSize(1024, { toUnit: 'b' })).toStrictEqual({
      value: '8192.00',
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
      value: '1.00',
      unit: 'GB',
    });
  });

  it('formats by auto-detecting the most approprate target unit', () => {
    expect.assertions(7);

    expect(formatDataSize(123098.456, { fromUnit: 'kB' })).toStrictEqual({
      value: '123.10',
      unit: 'MB',
    });

    expect(formatDataSize(0.00034, { fromUnit: 'TB' })).toStrictEqual({
      value: '340.00',
      unit: 'MB',
    });

    expect(formatDataSize(12)).toStrictEqual({
      value: '12.00',
      unit: 'B',
    });

    expect(formatDataSize(8000, { fromUnit: 'b' })).toStrictEqual({
      value: '8.00',
      unit: 'kbit',
    });

    expect(
      formatDataSize(8192, { fromUnit: 'Gibit', toUnit: 'byte' })
    ).toStrictEqual({
      value: '1.10',
      unit: 'TB',
    });

    expect(formatDataSize(11111, { fromUnit: 'YB' })).toStrictEqual({
      value: '11111.00',
      unit: 'YB',
    });

    expect(formatDataSize(1234.567, { toUnit: 'ibit' })).toStrictEqual({
      value: '9.65',
      unit: 'Kibit',
    });
  });

  it('handles invalid inputs', () => {
    expect.assertions(2);

    expect(formatDataSize('abcd')).toBeUndefined();

    expect(formatDataSize('abcdfa8sl274923')).toBeUndefined();
  });
});
