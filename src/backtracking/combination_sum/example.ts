function combinationSum1(candidates: number[], target: number): number[][] {
  const ans = [];

  const bt = (i: number, path: number[], sum: number): void => {
    if (sum >= target) {
      if (sum === target) ans.push([...path]);

      return;
    }

    for (let j = i; j < candidates.length; j++) {
      path.push(candidates[j]);
      bt(j, path, sum + candidates[j]);
      path.pop();
    }
  };

  bt(0, [], 0);

  return ans;
}
