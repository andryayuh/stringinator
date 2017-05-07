const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.identity(null)).toBe(null);
    /* END SOLUTION */
  });

  it('returns the number if given a number', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.identity(5)).toBe(5);
    /* END SOLUTION */
  });

  it('returns the same array if given an array', () => {
    // Your code goes here
    /* START SOLUTION */
    const val = [1, 2, 3];
    expect(_.identity(val)).toBe(val);
    /* END SOLUTION */
  });

  it('returns the same object if given an object', () => {
    // Your code goes here
    /* START SOLUTION */
    const val = {
      'foo': 'bar'
    };
    expect(_.identity(val)).toBe(val);
    /* END SOLUTION */
  });
});