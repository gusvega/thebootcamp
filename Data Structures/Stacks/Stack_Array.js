class Stack{
    constructor(){
       this.array = []
    }

    peek(){
        return this.array[this.array.length - 1]
    }

    push(value){
        this.array.push(value)
        return this
    }

    pop(){
        this.array.pop()
        return this
    }

    isempty(){

    }
}

let newStack = new Stack()
// console.log(newStack.peek())
newStack.push('Google')
newStack.push('Google2')
newStack.push('Googl3')
newStack.pop()
newStack.peek()
newStack.pop()
console.log(newStack)
newStack.pop()
console.log(newStack)


