const stringinator = require('../../stringinator');

describe('dedup()', () => {
  it('de-duplicates a string with duplicates', () => {
    const str = 'mississippi';
    expect(stringinator.dedup(str)).toEqual('misp');
  });

  it('is a no-op on a string with no duplicates', () => {
    const str = 'ihavenodups';
    expect(stringinator.dedup(str)).toEqual(str);
  });
});