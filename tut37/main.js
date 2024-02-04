// ---------------->>>>>>>>>>>>> Remove Node in Linked List <<<<<<<<<<<<<<<-------------------------

class list{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.tail = this.head;
        this.size = 1
    }
    appendNode(addNode){
        let newNode = {
            value:addNode,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size +=1
    }
    traversing(){
        let currentPostion = 1
        let currentNode = this.head
        while(currentPostion<this.size){
            console.log(currentNode)
            currentNode = currentNode.next
            currentPostion++

        }
    }
    removeNode(index){
        let currentnode = 1
        let letNode = this.head
        if(index==1){
            this.head = this.head.next
        }else{
            while(currentnode<index-1){
                letNode = letNode.next
                currentnode++
            }
            let nextNode = letNode.next.next
            letNode.next = nextNode

        }

        

    }
}

let linkedlist = new list(100)
linkedlist.appendNode(200)
linkedlist.appendNode(300)
linkedlist.appendNode(400)
linkedlist.removeNode(4)
linkedlist.traversing()
console.log(linkedlist)