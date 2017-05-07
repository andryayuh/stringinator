const stringinator = require('../../stringinator');

describe('isOnlyDigits()', () => {
  it('returns true for a string of only digits', () => {
    expect(stringinator.isOnlyDigits('6503842941')).toBe(true);
  });

  it('returns false for a string that includes non-digits', () => {
    expect(stringinator.isOnlyDigits('650-384-2941')).toBe(false);
  });

  it('returns true for an empty string', () => {
    expect(stringinator.isOnlyDigits('')).toBe(true);
  });
});
