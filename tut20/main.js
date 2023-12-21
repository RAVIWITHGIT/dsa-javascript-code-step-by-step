// --------------------------Operation of queue Data Structure--------------------------------------

/*
1. we discuss front , Rear and isEmpty Data Structure
   I Front --> Starting value
   II Rare --> Last value
   III isEmpty --> check array is empty or not

*/

// ------------- without using html

// let arr = []

// let currentSize = arr.length
// let maxSize = 5;

// function enqueue(getValue){
//     if(currentSize<maxSize){
//         arr[currentSize]  = getValue
//         currentSize++

//     }else{
//         alert('array is full')
//     }

// }

// function dequeue(){
//     if(isEmpty()){
//         alert('array is already empty')
//     }else{
//         for (let i = 0; i < arr.length; i++) {
//             arr[i] = arr[i+1]
            
//         }
//         currentSize--
//         arr.length = currentSize
//     }

// }

// function display(){
//     console.log(arr)
// }

// function front(){
//     if(isEmpty()){
//         alert('sorry array is empty')
//     }
//     else{
//         console.log(arr[0])

//     }

    
// }

// function Rear(){
//     if(isEmpty()){
//         alert('sorry array is empty')
//     }
//     else{
//         console.log(arr[currentSize-1])

//     }
    
// }

// function isEmpty(){
//     if(currentSize<=0){
//         return true
//     }
//     else{
//         return false
//     }
// }


// --------------- with atteched html
let arr = []

let currentSize = arr.length
let maxSize = 5;

function enqueue(){
    let addValue = document.getElementById('addValue')
    if(currentSize<maxSize){
        arr[currentSize]  = addValue.value
        currentSize++

    }else{
        alert('array is full')
    }
    addValue.value = ''

}

function dequeue(){
    if(isEmpty()){
        alert('array is already empty')
    }else{
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i+1]
            
        }
        currentSize--
        arr.length = currentSize
    }

}

function display(){
    console.log(arr)
}

function front(){
    if(isEmpty()){
        alert('sorry array is empty')
    }
    else{
        console.log(arr[0])

    }

    
}

function Rear(){
    if(isEmpty()){
        alert('sorry array is empty')
    }
    else{
        console.log(arr[currentSize-1])

    }
    
}

function isEmpty(){
    if(currentSize<=0){
        return true
    }
    else{
        return false
    }
}

