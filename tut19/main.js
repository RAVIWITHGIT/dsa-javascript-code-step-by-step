// ---------------------- Queue in javascript -------------------------------------

// Queue work on FIFA --> mean First In and First Out 
// so we discuss how  element add in start in  array and how remove element from start

// previous tutorial which is stack data structure, we discuss how add element in start and remove from last


let arr = []

let currentSize= arr.length
let maxSize = 5

function enqueue(getelement){
    if(currentSize>=maxSize){
        alert( ` we can only add ${maxSize} in array`)
    }else{
        arr[currentSize] = getelement
        currentSize++
    }
}

function dequeue(){
    if(currentSize>0){
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i+1]
        }
        currentSize--
        arr.length = currentSize

    }
    else{
        alert('sorry array is empty')
    }

}

enqueue(21)
enqueue(40)
enqueue(10)
enqueue(23)
enqueue(83)


dequeue()
dequeue()
dequeue()
dequeue()
console.log(arr)