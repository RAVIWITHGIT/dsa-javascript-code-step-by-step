// ----------------------------- Circular Queue using class ---------------------------------------

class Circular_queue{
    constructor(size){
        this.max = size;
        this.item = new Array(size);
        this.currentsize = 0
        this.front = -1
        this.Rear = -1
    }
    enqueue(val){
        if(this.currentsize!=this.max){
            if(this.Rear== this.max-1){
                this.Rear = 0
        
            }else{
                this.Rear++
            }
            this.item[this.Rear] = val
            this.currentsize++
            if(this.front == -1){
                this.front = this.Rear
            }
        }
    }
    dequeue(){
        if(this.currentsize!=0){
            this.item[this.front] = null
            if(this.front == this.max-1){
                this.front = 0
            }else{
                this.front++
            }
            this.currentsize--
        }else{
            this.front = -1;
            this.Rear = -1
            alert('queue is empty')
        }
    }

}



let ncir = new Circular_queue(5)
console.log(ncir)
ncir.enqueue(21)
ncir.enqueue(10)
ncir.enqueue(55)
ncir.dequeue()
ncir.dequeue()
console.log(ncir)