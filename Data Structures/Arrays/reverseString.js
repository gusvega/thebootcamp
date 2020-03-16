// Create a function that reverses a string
// 'Hi, how are you!'

function reverse(str){
    // Check
    if (!str || str.length < 2 || typeof str != 'string'){
        return 'Not a valid input'
    }

    let myArray = [];

    for(let i = str.length - 1; i >= 0; i--){
        console.log(str[i]);
        myArray.push(str[i]);
    }

    return myArray.join('');
}

function reverse2(str){
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('')

const reverse4 = str => [...str].reverse().join('');

myString = 'Hi, how are you!'
console.log(reverse(myString))
console.log(reverse2(myString))
console.log(reverse3(myString))
console.log(reverse4(myString))

