const stringinator = require('../../stringinator');

describe('first()', () => {
  it('gets the first char by default', () => {
    expect(stringinator.first('purple')).toEqual('p');
  });

  it('gets the first 4 chars', () => {
    expect(stringinator.first('purple', 4)).toEqual('purp');
  });
});
