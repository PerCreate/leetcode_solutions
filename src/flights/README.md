решить задачу поиска кратчайшего пути

const graph = { A:[B, D], B:[C, N, Z], D:[E, F], F: [S] };

findPath('A', 'N', fetchFlights) // Promise.resolve(['A', 'B', 'N'])
findPath('A', 'S', fetchFlights) // Promise.resolve(['A', 'D', 'F', 'S'])
findPath('B', 'S', fetchFlights) // Promise.reject(new Error('No way))

findPath(from: string): Promise<string[]>;
