// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use a for loop

// O(N)
function findFactorialRecursive(number) {
    // base case
    if(number === 1){
        // Return when done
        return number
    }

    // Recursive Case
    // lower and lower until we hit the base case
    return number * findFactorialRecursive(number - 1);
}


// O(N)
function findFactorialIterative(number) {
    let answer = 1

    // Start at 2
    for(let i = number; i > 1; i--){
        answer = answer * i
    }

    return answer;
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))