const stringinator = require('../../stringinator');

describe('removeChar()', () => {
  it('removes a target char', () => {
    expect(stringinator.removeChar('bubbles', 'u')).toEqual('bbbles');
  });
});
