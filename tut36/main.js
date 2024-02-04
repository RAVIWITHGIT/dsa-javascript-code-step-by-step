// --------------->>>>>>>>>>> Traversing and update in Linked List <<<<<<<<<<<<<<<<<<<<--------------

class List{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.tail = this.head;
        this.size = 1;
    }

    appendData(newData){
        let newNode = {
            value:newData,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.size +=1
    }
    traversing(){
        let counter = 0;
        let currentnode = this.head
        while(counter<this.size){
            counter++
            console.log(currentnode)
            currentnode = currentnode.next

        }
    }
    update(getindex,getdata){
        let counter = 0;
        let currentnode = this.head
        while(counter<this.size){
            counter++
            if(counter==getindex){
                currentnode.value = getdata;
            }
            currentnode = currentnode.next
        }
    }
}

let list = new List(100)
list.appendData(200)
list.appendData(300)
list.appendData(400)
list.appendData(500)
list.traversing()
list.update(3,1000)
list.traversing()
console.log(list)