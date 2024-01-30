interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function <T>(fn) {
  const result: Record<string, T[]> = {};

  for (let i = 0; i < this.length; i += 1) {
    const item: T = this[i];
    const key: string = fn(item);

    if (result[key]) (result[key] as T[]).push(item);
    else result[key] = [item];
  }

  return result;
};

const fn = function (item) {
  return item.id;
};

const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

console.log(array.groupBy(fn));
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
