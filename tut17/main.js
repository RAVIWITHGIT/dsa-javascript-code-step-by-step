// -------------------------- Reverse String With Stack in javascript------------------------------

let arr = []
let currentSize = 0

function push(newValue){
    arr[currentSize] = newValue
    currentSize++
}




function pop(){
    if(arr.length>0){
        let rArr = arr[currentSize-1]
        currentSize -=1
        arr.length = currentSize
        return rArr

    }
}


let str = 'ravi'
str = str.split('')

function revers(getArr){
    // for(let i of getArr){
    //     push(i)
    // }
    for (let i = 0; i < getArr.length; i++) {
        // console.log(pop())
        // getArr[j] = pop()
        push(getArr[i])
  
    }
    for (let j = 0; j < getArr.length; j++) {
        getArr[j] = pop()
  
    }
}

revers(str)
console.log(str.join(''))

