const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    // Your code goes here
    /* START SOLUTION */
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
    /* END SOLUTION */
  });

  it('returns the index of a value at the end of an array', () => {
    // Your code goes here
    /* START SOLUTION */
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'baz')).toBe(2);
    /* END SOLUTION */
  });

  it('returns -1 for a missing value', () => {
    // Your code goes here
    /* START SOLUTION */
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'quux')).toBe(-1);
    /* END SOLUTION */
  });

  it('returns the first matching index when multiple matches in array', () => {
    // Your code goes here
    /* START SOLUTION */
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar')).toBe(1);
    /* END SOLUTION */
  });

  it('starts searching at the given offset', () => {
    // Your code goes here
    /* START SOLUTION */
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar', 2)).toBe(3);
    /* END SOLUTION */
  });

});