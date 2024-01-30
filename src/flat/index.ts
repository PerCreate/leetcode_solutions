type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) return arr;

  const result: MultiDimensionalArray = [];

  const makeFlat = (currArr: MultiDimensionalArray, depth: number) => {
    for (let i = 0; i < currArr.length; i += 1) {
      const elem = currArr[i];

      if (typeof elem === "object" && depth > 0) makeFlat(elem, depth - 1);
      else {
        result.push(elem);
      }
    }
  };

  makeFlat(arr, n);

  return result;
};
