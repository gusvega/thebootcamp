//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Naive Approach | Not that great | O(N^2).... Dont use this one
function firstRecurringCharacter(input) {
    for(let i = 0; i < input.length; i++){
        for(let j = i + 1; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i]
            }
        }
    }
    return undefined
}

//Using Hash Tables | O(N)
function firstRecurringCharacter2(input){
    let map = {} // Objects are hash tables/maps!!
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        }else{
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined
}

//Bonus... What if we had this:
let myArray = [2,0,0,2,3,5,1,2,4]
//console.log(firstRecurringCharacter(myArray))
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter2(myArray))
