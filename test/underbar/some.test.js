const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    // Your code goes here
    /* START SOLUTION */
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
    /* END SOLUTION */
  });

  it('returns false if no number is odd', () => {
    // Your code goes here
    /* START SOLUTION */
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
    /* END SOLUTION */
  });

});