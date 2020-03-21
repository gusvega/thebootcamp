let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let sortedRainbow = rainbow.sort();

function binarySearch(sortedArray, elToFind) {
    var lowIndex = 0;
    var highIndex = sortedArray.length - 1;
    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (sortedArray[midIndex] == elToFind) {
            return midIndex;
        } else if (sortedArray[midIndex] < elToFind) {
            lowIndex = midIndex + 1;
        } else {
            highIndex = midIndex - 1;
        }
    }
    return null;
}

//Recursive Implementation
var recursiveBinarySearch = function (array, target, min, max) {
    var tArray = array.slice()
    if (min === undefined){
        min = 0
    } 
    if (max === undefined){
        max = array.length - 1
    }
    
    var guess = Math.floor(((max - min) / 2) + min)
    if (max <= min && tArray[guess] !== target){
        return null
    } 
    else if (tArray[guess] === target) {
        return guess
    }
    else if (tArray[guess] < target){
        return binarySearch(tArray, target, guess + 1, max)
    } 
    else{
        return binarySearch(tArray, target, min, guess - 1)
    } 
};

console.log(binarySearch(exampleArray, 13))

console.log(binarySearch(sortedRainbow, "green"))
console.log(recursiveBinarySearch(exampleArray, 13))