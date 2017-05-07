const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return _.reject(str, ch => ch === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, ch => ch === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, ch => !isNaN(parseInt(ch, 10)));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str, ch => !isNaN(parseInt(ch, 10))).join('');
};

const truncateString = function(val, maxLength) {
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString
  return _.map(obj, item => truncateString(item, maxLength));
};

const countChars = function(str) {
  return _.reduce(str, (counts, ch) => {
    counts[ch] = counts[ch] ? counts[ch] + 1 : 1;
    return counts;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str).join('');
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