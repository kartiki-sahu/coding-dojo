// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const fnCalled = cache.get(fn) || new Map();
    const keys = fnCalled.get("keys") || [];
    const value = fnCalled.get("value") || [];
    let cachedValue = -1;

    if (keys.length) {
      keys.forEach((cachedArgs, i) => {
        if (args.length === cachedArgs.length) {
          let isMatch = true;
          cachedArgs.forEach((a) => {
            if (areArrayDifferent(cachedArgs, args)) {
              isMatch = false;
              return;
            }
          });

          if (isMatch) {
            cachedValue = i;
            return;
          }
        }
      });

      if (cachedValue > -1) {
        return value[cachedValue];
      }
    }

    const result = fn(...args);
    keys.push(args);
    fnCalled.set("keys", keys);
    value.push(result);
    fnCalled.set("value", value);
    cache.set(fn, fnCalled);
    return result;
  };
}

function areArrayDifferent(arr1, arr2) {
  let areDifferent = false;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  arr1.forEach((i) => {
    if (arr1[i] !== arr2[i]) {
      areDifferent = true;
      return;
    }
  });
  return areDifferent;
}

let callCount = 0;
const memoizedSum = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// Total call count: 1
memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.

console.log(callCount); // 1
