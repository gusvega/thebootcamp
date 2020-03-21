let myArray = [1,3,1,4,2,5,6,7,3,2]

// Space complexity: O(1)
// Time complexity: O(N^2)
function bubbleSort(array){
    const length = array.length
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if (array[j] > array[j + 1]){
                // Swap numbers
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

console.log(bubbleSort(myArray))
console.log(myArray)

