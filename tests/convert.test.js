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

  it('reverse converts given value to the target unit correctly', () => {
    expect.assertions(3);

    const reverse = { isReverse: true };

    expect(convert({ precision: 8, value: 4n }, 'B', reverse)).toStrictEqual({
      precision: 8,
      value: 32n,
    });

    expect(
      convert({ precision: 2, value: 3421n }, 'GiB', reverse)
    ).toStrictEqual({ precision: 2, value: 29386166239232n });

    expect(convert({ precision: 1, value: 25n }, 'KiB', reverse)).toStrictEqual(
      { precision: 1, value: 204800n }
    );
  });
});
