type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = {};

  return function (...args): number {
    const key = args.join(",");
    const cachedValue = cache[key];
    if (cachedValue !== undefined) {
      return cachedValue;
    }

    cache[key] = fn(...args);

    return cache[key];
  };
}

const sum = (a, b) => a + b;

const mSum = memoize(sum);

console.log(mSum(0, 0));
console.log(mSum(0, 0));
// console.log(mSum(1, 26));

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
