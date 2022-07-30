import { convert } from '../src/lib';

describe(`unit ${typeof convert} ${convert.name}`, () => {
  it('converts given value to the target unit correctly', () => {
    expect.assertions(3);

    expect(convert({ precision: 0, value: 8n }, 'B')).toStrictEqual({
      precision: 1,
      value: 10n,
    });

    expect(convert({ precision: 0, value: 2310798n }, 'Tbit')).toStrictEqual({
      precision: 13,
      value: 23107980n,
    });

    expect(convert({ precision: 2, value: 918273645n }, 'KiB')).toStrictEqual({
      precision: 6,
      value: 1120939508n,
    });
  });
});
