// -------------------->>>>>>>>>>>> Linked list <<<<<<<<<<<<<<<--------------------------------------


// ---------------->>>>>>>>>> Linked List with add element
/*
1. The linked list has two part 
    I. Head Part --> starting part of linked list
    II. tail Part --> last part of linked list

2. The data stored in the linked list remainss in the form of a node

3. Every Node see in Object form

3. There are two parts inside the node 
    I. value --> store value
    II. next --> store next node address
*/


class List{
    constructor(data){
        this.head = {
            value:data,
            next:null,
        }
        this.tail = this.head;
    }
    appendNode(newData){
        let newNode = {
            value:newData,
            next:null,
        }
        this.tail.next = newNode
        this.tail = newNode
    }
}

let list = new List(200);
list.appendNode(300)
// list.appendNode(400)
// list.appendNode(500)
// list.appendNode(600)
// list.appendNode(700)
// list.appendNode(800)
console.log(list)



//  ------------------------
// let obj = {}
// function createLinklist(data){
//     obj["head"] = {
//         value:data,
//         next:null
//     }
//     obj["tail"] = obj.head
//     console.log(obj)
// }

// function addNode(newData){
//     let newNode = {
//         value:newData,
//         next:null

//     }
//     obj.tail.next = newNode
//     obj.tail = newNode
//     console.log(obj)
// }

// createLinklist(100)
// addNode(200)