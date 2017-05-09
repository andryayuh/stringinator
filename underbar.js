// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  // Your code goes here
  /* START SOLUTION */
  return val;
  /* END SOLUTION */
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  // Your code goes here
  /* START SOLUTION */
  return n === 1 ? array[0] : array.slice(0, n);
  /* END SOLUTION */
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  // Your code goes here
  /* START SOLUTION */
  return n === 1 ? array[array.length - 1] : array.slice(Math.max(0, array.length - n));
  /* END SOLUTION */
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(arr, target, fromIndex=0) {
  // Hint: it's not the most efficient solution but you can and should use each() for this learning exercise.
  // The code reuse is nice and it avoids off-by-one errors from using for-loops.
  // Your code goes here
  /* START SOLUTION */
  let result = -1;
  each(arr, function(item, index) {
    if (index >= fromIndex && result === -1 && item === target) {
      result = index;
    }
  });
  return result;
  /* END SOLUTION */
};

const isArrayLike = function(obj) {
  // Your code goes here
  /* START SOLUTION */
  const length = obj['length'];
  return typeof length === 'number' && length >= 0;
  /* END SOLUTION */
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  // Your code goes here
  /* START SOLUTION */
  if (isArrayLike(obj)) {
    for (let index = 0; index < obj.length; index++) {
      callback(obj[index], index, obj);
    }
  } else {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }
  /* END SOLUTION */
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  // Your code goes here
  /* START SOLUTION */
  const results = [];
  each(obj, (currentValue, currentIndexOrKey, obj) => {
    results.push(callback(currentValue, currentIndexOrKey, obj));
  });
  return results;
  /* END SOLUTION */
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  // Your code goes here
  /* START SOLUTION */
  return map(obj, item => item[key]);
  /* END SOLUTION */
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  // Your code goes here
  /* START SOLUTION */
  let accumulator = initialValue;
  let initializing = accumulator === undefined;
  each(obj, (currentValue, currentIndexOrKey, iteratedObj)  => {
    if (initializing) {
      initializing = false;
      accumulator = currentValue;
    } else {
      accumulator = callback(accumulator, currentValue, currentIndexOrKey, iteratedObj);
    }
  });
  return accumulator;
  /* END SOLUTION */
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  // Your code goes here
  /* START SOLUTION */
  return reduce(obj, (wasFound, item) => {
    return wasFound || item === target;
  }, false);
  /* END SOLUTION */
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  // Your code goes here
  /* START SOLUTION */
  return reduce(obj, (allPassed, item) => {
    return allPassed && !!callback(item);
  }, true);
  /* END SOLUTION */
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  // Your code goes here
  /* START SOLUTION */
  return reduce(obj, (anyPassed, item) => {
    return anyPassed || !!callback(item);
  }, false);
  /* END SOLUTION */
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  // Your code goes here
  /* START SOLUTION */
  const result = [];
  each(obj, item => {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result;
  /* END SOLUTION */
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  // Your code goes here
  /* START SOLUTION */
  return filter(arr, item => !callback(item));
  /* END SOLUTION */
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  // Your code goes here
  /* START SOLUTION */
  const foundItems = {};
  return filter(obj, item => {
    return !(item in foundItems) && (foundItems[item] = true);
  });
  /* END SOLUTION */
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
