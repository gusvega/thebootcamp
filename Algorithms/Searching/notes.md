Searching and trversal

// TREE
//       9
//   4       20
// 1   6  15    170

// What it looks like in a list/array : DFS
const array = [9, 4, 1, 6, 20, 15, 170]

// What it looks like in a list/array: BFS
const array = [9, 4, 20, 1, 6, 15, 170]

Best algorithms to find the Shortest paths?
- Bellman-Ford
    - can accomodate negative weights/numbers
    - can take a long time in terms of complexity
- Dijktras
    - faster
    - cant accommodate negatives

DFS and BFS dont record edges weights!!!
Bellman-Form or Dijktras do!!!

Exercise:

//If you know a solution is not far from the root of the tree: BFS

//If the tree is very deep and solutions are rare: BFS... DFS will take a long time

//If the tree is very wide: DFS... BFS will need too much memory

//If solutions are frequent but located deep in the tree: DPS

//Determining whether a path exists between two nodes: DPS is built for this

//Finding the shortest path: BFS is built for this