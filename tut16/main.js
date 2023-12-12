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



function add(){
    let anum = document.querySelector('#anum')
    push(anum.value)
    anum.value = ''
    console.log(myArr)

}
function rem(){
    pop()
    anum.value = ''
    console.log(myArr)

}

function dis(){
    let mydiv = document.querySelector('#mydiv')
    mydiv.innerHTML = ''
    if(myArr.length==0){
        mydiv.innerHTML = '<p>Array is empty</p>'
    }
    else{
        for(let i of myArr){
            mydiv.innerHTML += `<p>${i}</p>`

        }
    }

}