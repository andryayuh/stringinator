const stringinator = require('../../stringinator');

describe('last()', () => {
  it('gets the last char by default', () => {
    expect(stringinator.last('purple')).toEqual('e');
  });

  it('gets the last 5 chars', () => {
    expect(stringinator.last('purple', 5)).toEqual('urple');
  });
});
