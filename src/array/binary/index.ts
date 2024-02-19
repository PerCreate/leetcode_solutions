function binarySearch(nums: number[], target: number): number {
  if (nums.length === 1 && nums[0] === target) return 0;

  let index = 0;

  while (nums.length) {
    const middleIndex = Math.floor(nums.length / 2);
    const middle = nums[middleIndex];

    if (!middle) return -1;

    if (middle === target) return middleIndex + index;

    if (middle > target) {
      nums = nums.slice(0, middleIndex);
    }

    if (middle < target) {
      index += middleIndex + 1;
      nums = nums.slice(middleIndex + 1);
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 90], 90));
