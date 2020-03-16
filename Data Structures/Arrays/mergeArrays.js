function mergeArrays(arr1, arr2){
    //Check
    // Create Pivot
    let pivot1 = 0
    let pivot2 = 0

    // Create new Array
    let newArray = []

    // Loop Through arr1
    while(pivot1 != arr1.length || pivot2 != arr2.length){
        if(arr1[pivot1] <= arr2[pivot2]){
            newArray.push(arr1[pivot1])
            pivot1++
        }else{
            newArray.push(arr2[pivot2])
            pivot2++
        }
    }

    //Return
    return newArray
    
}

let arr1 = [1,3,4,67,87]
let arr2 = [2, 5, 68, 88, 100]

console.log(mergeArrays(arr1, arr2))