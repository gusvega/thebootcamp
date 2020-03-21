let myArray = [1,3,1,4,2,5,6,7,3,2]

// Space Complexity: O(N^2)
// Time Complexity: O(1)
function SelectionSort(array){
    let length = array.length

    for(let i = 0; i < length; i++){
        // Set current index as minimum
        let min = i
        let temp = array[i]

        for(let j = i + 1; j < length; j++){
            if(array[j] <= array[min]){
                // Update min if current is lower than what we had previously
                min = j
            }
        }
        array[i] = array[min]
        array[min] = temp
    }

    return array
}

console.log(SelectionSort(myArray))
console.log(myArray)