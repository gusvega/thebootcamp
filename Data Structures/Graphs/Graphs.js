// Methods to represent graphs

// Edge List
// connections between nodes
const graph = [[0, 2],[2, 3],[2, 1],[1, 3]]

// Adjecency List
// Indeces representing the nodes... [2].. index/node 0 is connected to index/node 2
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjecent Matix : Using Arrays
// Indeces representing nodes, and value 1 represents connectivity
const graph3 = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]

// Adjecent Matix : Using Objects
// Indeces representing nodes, and value 1 represents connectivity
const graph3 = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}