const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
    /* END SOLUTION */
  });

  it('returns the last 2 elements of an array', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
    /* END SOLUTION */
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
    /* END SOLUTION */
  });
});