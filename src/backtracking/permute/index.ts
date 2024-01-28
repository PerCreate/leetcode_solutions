function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const length = nums.length;

  const count = (current: number[]) => {
    if (current.length === length) {
      result.push(current);

      return;
    }

    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];

      if (element !== undefined && !current.includes(element)) {
        current.push(element);

        count([...current]);

        current.pop();
      }
    }
  };

  count([]);

  return result;
}

console.log(permute([0, 1]));
