type Fn = (...params: any) => any;

interface Trie {
  val?: any;
  map: Map<any, Trie>;
}

function memoize(fn: Fn): Fn {
  const results: Map<any, Trie> = new Map();

  let voidResolved = false;
  let voidResult: any = null;

  return function (...params: any) {
    let currentMap = results;

    // For empty params use specific variables
    if (params.length === 0) {
      if (!voidResolved) {
        const result = fn(...params);
        voidResult = result;
        voidResolved = true;
      }
      return voidResult;
    }

    for (let i = 0; i < params.length; i++) {
      const param = params[i];

      const trie = currentMap.get(param);

      if (i === params.length - 1) {
        let result: any;
        if (!trie) {
          result = fn(...params);
          const newTrie = {
            val: result,
            map: new Map(),
          };
          currentMap.set(param, newTrie);
        } else {
          if (!("val" in trie)) {
            trie.val = fn(...params);
          }
          result = trie.val;
        }

        return result;
      }

      if (!trie) {
        const newTrie = {
          map: new Map(),
        };
        currentMap.set(param, newTrie);
      }
      currentMap = currentMap.get(param).map;
    }
  };
}

const m1 = memoize(function (a, b) {
  return a + b;
});

const m2 = memoize(function (a, b) {
  return { ...a, ...b };
});

const m3 = memoize(function (a, b) {
  return { ...a, ...b };
});

console.log(m1({}, {}));
console.log(m1({}, {}));
console.log(m1({}, {}));

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
