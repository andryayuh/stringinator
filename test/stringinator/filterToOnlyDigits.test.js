const stringinator = require('../../stringinator');

describe('filterToOnlyDigits()', () => {
  it('filters to only digits when given a mixed alphanumeric string', () => {
    const result = stringinator.filterToOnlyDigits('d8f848g84838cd8f');
    expect(result).toEqual('8848848388');
  });

  it('filters to a blank string when given no digits', () => {
    const result = stringinator.filterToOnlyDigits('one two three four five');
    expect(result).toEqual('');
  });
});