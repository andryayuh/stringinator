const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
    /* END SOLUTION */
  });

  it('returns the first 2 elements of an array', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
    /* END SOLUTION */
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    // Your code goes here
    /* START SOLUTION */
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
    /* END SOLUTION */
  });
});