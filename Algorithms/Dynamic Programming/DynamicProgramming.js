// NOT MEMOIZED
function addTo80(n) {
    return n + 80
}

let calculationsNot = 0
let calculationsYes = 0

// O(2^n)
function fibonacci(n) {
    calculationsNot++
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// MEMOIZED using closure... to avoid a global scope
function memoizedAddTo80(n) {
    // Object = Hast table
    let cache = {}
    return function (n) {
        if (n in cache) {
            return cache[n]
        } else {
            console.log('Long time...')
            cache[n] = n + 80
            return cache[n]
        }
        console.log(cache)
    }
}

// Time complexity: O(N)
// Space Complexity: O(N)
function memoizedFibonacci(n) {
    // Hash table or Object
    let cache = {}
    return function fibonacci(n) {
        calculationsYes++
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            } else {
                console.log('Long time...')
                cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
                return cache[n]
            }
        }
    }
}

// Bottom up approach
function BottomUp_Fibonacci2(n){
    let answer = [0, 1]
    for (let i = 2; i <= n; i++){
        answer.push(answer[i - 2] + answer[i -1])
    }
    return answer.pop()
}

//NOT MEMOIZED
console.log('NOT MEMOIZED')
console.log(addTo80(50))
console.log(fibonacci(35))
console.log(fibonacci(35))
console.log('We did ' + calculationsNot + ' Calculations')

// MEMOIZED
console.log('MEMOIZED')
const memoized = memoizedAddTo80()

console.log('1: ', memoized(50))
console.log('2:', memoized(50))

const memoizedFib = memoizedFibonacci()
console.log(memoizedFib(35))
console.log(memoizedFib(35))
console.log('We did ' + calculationsYes + ' Calculations')

// Bottom up
console.log('BOTTOM UP')
console.log(BottomUp_Fibonacci2(35))
