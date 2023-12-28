// -------------------------------- Leaner Search in javascript ----------------------------------


// let arr = [1,2,3,4,5,6,7]

// let find = 6
// let postion = undefined

// for(let i= 0;i<arr.length;i++){
//     if(arr[i]==find){
//         console.log('yes this number present in array')
//         postion = i
//         break
//     }
// }
// console.log(postion)


// ---------------------- search with dom

let myinput = document.getElementById('myinput')

function find(){
    let arr = [1,2,3,4,5,6,7]
    let find = myinput.value
    let postion = undefined

    for(let i= 0;i<arr.length;i++){
        if(arr[i]==find){
            postion = i
            break
        }
    }
    if(postion){
        alert(`yes this element present in ${postion} position`)
    }else{
        alert('sorry element is not find')
    }
    myinput.value = ''

}