function fetchFlightsEx(from: string): Promise<string[]> {
  const graph = { A: ["B", "D"], B: ["C", "N", "Z"], D: ["E", "F"], F: ["S"] };

  const res: string[] = graph[from] || [];

  return Promise.resolve(res);
}

async function findPath(
  from: string,
  to: string,
  fetchFlights: typeof fetchFlightsEx
): Promise<string[]> {
  const getPath = async (from: string) => {
    const enabledPaths = await fetchFlights(from);

    if (enabledPaths.includes(to)) return Promise.resolve([from, to]);

    const currentPath = [from];

    for (let index = 0; index < enabledPaths.length; index++) {
      const point = enabledPaths[index];

      if (point) {
        const path = await getPath(point);

        if (path.includes(to)) currentPath.push(...path);
      }
    }

    return Promise.resolve(currentPath);
  };

  const path = await getPath(from);

  return path.length === 1 ? Promise.reject("No way") : Promise.resolve(path);
}

findPath("A", "N", fetchFlightsEx)
  .then((data) => console.log("AN", data))
  .catch(); // Promise.resolve(['A', 'B', 'N'])

findPath("A", "S", fetchFlightsEx)
  .then((data) => console.log("AS", data))
  .catch();
// Promise.resolve(['A', 'D', 'F', 'S'])

findPath("B", "S", fetchFlightsEx)
  .then((data) => console.log("ERROR", data))
  .catch((data) => console.log("ERROR", data));
