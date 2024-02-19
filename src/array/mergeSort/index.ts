let counter = 0;

function merge(left: any[], right: any[]) {
  let arr: any[] = [];
  console.log(left, right);
  while (left.length && right.length) {
    counter += 1;
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function mergeSort(arr: any[]): any[] {
  if (arr.length < 2) return arr;

  const halfLength = arr.length / 2;

  const leftArr = arr.splice(0, halfLength);

  return merge(mergeSort(leftArr), mergeSort(arr));
}

// console.log(merge([10, 11, 12], [1, 2, 3, 4, 5]));
console.log(
  mergeSort([
    10, 1, 2, 11, 22, 3, 4, 5, 12, 10, 1, 2, 11, 22, 3, 4, 5, 12, 10, 1, 2, 11,
    22, 3, 4, 5, 12, 10, 1, 2, 11, 22, 3, 4, 5, 12,
  ]),
  counter
);
