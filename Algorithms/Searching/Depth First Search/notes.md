- TREE
      9
  4       20
1   6  15    170

- Goes from 9 to 4 to 1... if not found, goes back to 4 then to 6... if not found, goes back to 9 and does the other side

backtracking algorithm

- Pros
    - Requires Less Memory
    - Does path exist?

- Downsides
    - Can get slow if the tree or graph is very deep

3 different orders
- inorder - [1,4,6,9,15,20,170]
- preorder - [9,4,1,6,20,15,170] ---- good to recreate trees 
- postorder - [1,6,4,15,170,20,9]
