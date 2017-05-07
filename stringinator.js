const _ = require('./underbar');

const first = function(str, n) {
  // Your code goes here
  /* START SOLUTION */
  return _.first(str, n);
  /* END SOLUTION */
};

const last = function(str, n) {
  // Your code goes here
  /* START SOLUTION */
  return _.last(str, n);
  /* END SOLUTION */
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
  /* START SOLUTION */
  return _.reject(str, ch => ch === target).join('');
  /* END SOLUTION */
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  /* START SOLUTION */
  return _.some(str, ch => ch === target);
  /* END SOLUTION */
};

const isOnlyDigits = function(str) {
  // Your code goes here
  /* START SOLUTION */
  return _.every(str, ch => !isNaN(parseInt(ch, 10)));
  /* END SOLUTION */
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
  /* START SOLUTION */
  return _.filter(str, ch => !isNaN(parseInt(ch, 10))).join('');
  /* END SOLUTION */
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  /* START SOLUTION */
  return _.map(obj, item => truncateString(item, maxLength));
  /* END SOLUTION */
};

const countChars = function(str) {
  // Your code goes here
  /* START SOLUTION */
  return _.reduce(str, (counts, ch) => {
    counts[ch] = counts[ch] ? counts[ch] + 1 : 1;
    return counts;
  }, {});
  /* END SOLUTION */
};

const dedup = function(str) {
  // Your code goes here
  /* START SOLUTION */
  return _.uniq(str).join('');
  /* END SOLUTION */
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};