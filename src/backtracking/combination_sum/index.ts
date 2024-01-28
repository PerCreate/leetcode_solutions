function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  const uniqCombinations: { [digitCount: number]: number[][] } = {};

  const count = (currentSum: number, currCandidatesD: number[]) => {
    if (currentSum > target) return;

    const currCandidates = [...currCandidatesD];
    const digitsCount = currCandidates.length;

    if (currentSum === target) {
      if (
        uniqCombinations[digitsCount] &&
        uniqCombinations[digitsCount]?.some(
          (digitsArr) => !isUniqArray(currCandidates, digitsArr)
        )
      )
        return;

      uniqCombinations[digitsCount] = [
        ...(uniqCombinations[digitsCount] || []),
        currCandidates,
      ];
      result.push(currCandidates);

      return;
    }

    for (let i = 0; i < candidates.length; i += 1) {
      const currNum = candidates[i];

      if (currNum) {
        currentSum += currNum;
        currCandidates.push(currNum);
        count(currentSum, currCandidates);
        currentSum -= currNum;
        currCandidates.pop();
      }
    }
  };

  count(0, []);

  return result;
}

function isUniqArray(curr: number[], target: number[]) {
  if (curr.length !== target.length)
    throw new Error("length of two array must be equal");

  const currMap: { [d: number]: number } = {};
  const targetMap: { [d: number]: number } = {};

  for (let index = 0; index < curr.length; index++) {
    const elemC = curr[index];
    const elemT = target[index];

    if (elemC) {
      if (currMap[elemC] !== undefined) {
        currMap[elemC] += 1;
      } else {
        currMap[elemC] = 1;
      }
    }

    if (elemT) {
      if (targetMap[elemT] !== undefined) {
        targetMap[elemT] += 1;
      } else {
        targetMap[elemT] = 1;
      }
    }
  }

  return Object.entries(targetMap).some(
    ([digit, digitCount]) => currMap[digit] !== digitCount
  );
}
