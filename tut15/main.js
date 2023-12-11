// -----------------------Stack Data Structure In Python ------------------------------------

// here we understand how remove last element and add element in last in array

// ------ add element in array in last
let myArr = []
let currentSize = 0
let max = 5

function push(arrElement){
    // console.log('ss',currentSize)
    if(currentSize>=max){
        alert(`maximum element add only ${max}`)
    }
    else{
        myArr[currentSize] = arrElement
        currentSize = myArr.length
    }
}
push(20)
push(22)
push(23)
push(30)
push(33)
// push(40)
// push(40)
// push(40)

console.log('push',myArr)


// ------ remove element in array in last
function pop(){
    console.log('curentsize',currentSize)
    currentSize-=1
    if(currentSize>=0){
        myArr.length = currentSize

    }
    else{
        alert('array is empty')
    }
}

pop()
pop()
pop()
pop()
pop()
pop()
console.log('pop',myArr)