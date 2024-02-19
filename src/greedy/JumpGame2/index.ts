function jump(
  nums: number[],
  currentIndex: number = 0,
  jumps: number = 0
): number {
  if (nums.length === 1) return 0;
  if (nums.length === 2 && nums[0] >= 1) return 1;
  if (currentIndex + nums[currentIndex] >= nums.length - 1) return jumps + 1;

  const possibleJumps = nums[currentIndex];
  const index = getIndexMaxNumber(nums, currentIndex + 1, possibleJumps);

  return jump(nums, index, jumps + 1);
}

function getIndexMaxNumber(nums: number[], index: number, possible: number) {
  let max = -Infinity;
  let maxIndex = index;

  for (let j = index; j < nums.length && possible > 0; j += 1, possible -= 1) {
    if (nums[j]) {
      const count = j - index + nums[j];

      if (count > max) {
        max = count;
        maxIndex = j;
      }
    }
  }

  return maxIndex;
}
