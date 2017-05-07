const stringinator = require('../../stringinator');

describe('countChars()', () => {
  it('counts a no-dup string', () => {
    const str = 'ihavenodups';
    const expected = {
      'i': 1,
      'h': 1,
      'a': 1,
      'v': 1,
      'e': 1,
      'n': 1,
      'o': 1,
      'd': 1,
      'u': 1,
      'p': 1,
      's': 1
    };
    const counts = stringinator.countChars(str);
    expect(counts).toEqual(expected);
  });

  it('counts a string with duplicates', () => {
    const str = 'mississippi';
    const expected = {
      'm': 1,
      'i': 4,
      's': 4,
      'p': 2
    };
    const counts = stringinator.countChars(str);
    expect(counts).toEqual(expected);
  });
});