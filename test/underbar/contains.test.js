const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    // Your code goes here
    /* START SOLUTION */
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
    /* END SOLUTION */
  });

  it('returns false if an array does not contain the target', () => {
    // Your code goes here
    /* START SOLUTION */
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
    /* END SOLUTION */
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here
    /* START SOLUTION */
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
    /* END SOLUTION */
  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here
    /* START SOLUTION */
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
    /* END SOLUTION */
  });

});