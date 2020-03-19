----- hash tables, hash maps, maps, unordered maps, objects : all are the same
Objects are hash tables in javascript
- Key value pairs
- use keys as index for hash maps
- needs to have a hash function

Hash Function
- function that generates a value
-  works only one way

Hash Collision
- when the hash function inserts multiple values into the same spaces. creating linked lists. no that great

Great for:
- fast lookups **
- Direct Access
- fast inserting/deleting: O(1)
- flexible keys
** good collision resolution needed

downsides:
- unordered
- slow key iteration


