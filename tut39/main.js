// ------------->>>>>>>>>>>> linked list with search node <<<<<<<<<<<<<<<<<<<<----------------------


class list{
    constructor(data){
        this.head ={
            value:data,
            next:null
        }
        this.tail = this.head
    }
    append(data){
        let newnode = {
            value:data,
            next:null
        }
        this.tail.next = newnode
        this.tail = newnode
    }
    searchnode(data){
        let result = undefined
        let letnode = this.head
        let loop = true
        while(loop){
            letnode = letnode.next
            loop = !!letnode
            if(loop && letnode.value===data){
                loop = false
                result = letnode
            }

        }
        console.log(result)
    }
    searchnode_with_postion(postion){
        let currentNode = 1
        let result = undefined
        let letnode = this.head
        let loop = true
        while(loop){
            if(currentNode===postion){
                result = letnode
                loop = false
            }
            letnode = letnode.next
            loop = !!letnode
            currentNode++


        }
        console.log(result)
    }
}


let linkedlist = new list(100)
linkedlist.append(200)
linkedlist.append(300)
linkedlist.append(400)
linkedlist.append(500)
linkedlist.append(600)
linkedlist.append(700)
linkedlist.searchnode(600)
linkedlist.searchnode_with_postion(4)
console.log(linkedlist)