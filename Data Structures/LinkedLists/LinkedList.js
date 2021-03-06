// 10-->5-->15
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 15,
//                 next: null
//             }
//         }
//     }
// }

//

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedLsit {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value){
        // Create new Node
        const newNode = new Node(value)

        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
        this.length++
        return this

    }

    printList(){
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value){
        // Check params
        if(index >= this.length){
            return this.append(value)
        }

        // Create a new Node
        const newNode = new Node(value)

        // Traverse Thought list
        const leader = this.traverseToIndex(index - 1)
        // Record the desired node's index
        const holdingPointer = leader.next
        // Point the leader to the new Node
        leader.next = newNode
        // Point the new Node to the holding Pointer
        newNode.next = holdingPointer
        // Increment the length of the list
        this.length++
        // Return the list
        return this.printList
    }

    delete(index){
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this.printList()

    }

    reverse(){
        if(!this.head.next){
            return this.head
        }

        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second){
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this.printList()

    }

    traverseToIndex(index){
        // Create a counter
        let counter = 0
        // Specify that the current node is the head
        let currentNode = this.head

        // Traverse through the list until the desired index is found
        while(counter !== index){
            // If this is not the desired index, go to the next node
            currentNode = currentNode.next
            // Increment counter by 1
            counter++
        }
        // Return the desired Node
        return currentNode
    }
}

let newLinkedList = new LinkedLsit(10)
newLinkedList.append(5)
newLinkedList.append(16)
newLinkedList.prepend(55)
newLinkedList.insert(1, 99)
console.log(newLinkedList.printList())
newLinkedList.delete(2)
console.log(newLinkedList.printList())
newLinkedList.reverse()
console.log(newLinkedList.printList())