const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      /* START SOLUTION */
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
      /* END SOLUTION */
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      /* START SOLUTION */
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
      /* END SOLUTION */
    });

  });
});