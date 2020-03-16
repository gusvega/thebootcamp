const strings = ['a', 'b', 'c', 'd']

//Push - Adds to the end of the array
strings.push('e'); // O(1)

//Pop - Adds to the end of the array
strings.pop(); // O(1)

//unshift - Adds to the begining of the array
strings.unshift('x'); // O(N)

// splice - Adds at certain index (2)
strings.splice(2, 0, 'alien') // O(N)


console.log(strings)