const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
    /* END SOLUTION */
  });

  it('returns true for an array-like object', () => {
    // Your code goes here
    /* START SOLUTION */
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
    /* END SOLUTION */
  });

  it('returns false for a non-array-like object', () => {
    // Your code goes here
    /* START SOLUTION */
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
    /* END SOLUTION */
  });
});
