function subsets(nims: number[]): number[][] {
  const result: number[][] = [];

  const count = (i: number, current: number[]) => {
    result.push(current);

    if (current.length === nims.length) return;

    for (let index = i; index < nims.length; index++) {
      const element = nims[index];

      if (element !== undefined && !current.includes(element)) {
        current.push(element);
        count(index, [...current]);
        current.pop();
      }
    }
  };

  count(0, []);

  return result;
}
