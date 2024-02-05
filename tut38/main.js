// ----------------->>>>>>>>>>> Linked list with insert node <<<<<<<<<<<<<<-------------------------

class list{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.tail = this.head
        this.size = 1
    }
    append(newdata){
        let newNode = {
            value:newdata,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size +=1;
    }
    traversing(){
        let count = 1;
        let currentNode = this.head;
        while(count<this.size){
            console.log(currentNode)
            currentNode = currentNode.next;
            count++
        }
    }
    inserNode(value,index){
        let currentNode = this.head
        let count = 1
        while(count<index-1){
            count++
            currentNode = currentNode.next
        }
        let nextnode = currentNode.next
        currentNode.next = {
            value:value,
            next:nextnode
        }

    }
}

let linkedlist = new list(100)
linkedlist.append(200)
linkedlist.append(300)
linkedlist.append(400)
linkedlist.append(500)
linkedlist.append(600)
linkedlist.append(700)
linkedlist.inserNode(3000,3)
linkedlist.traversing()
console.log(linkedlist)