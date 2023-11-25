// ---------------------- searching element in array----------------------
// let myArray = [3,4,2,5,6,1,9,8]
// let findElement = 5
// let getindex = null

// for (let i = 0; i < myArray.length; i++) {
//     if(findElement==myArray[i]){
//         getindex = i
//         console.log('find')
//     }
    
// }
// console.log('index is',getindex)


// we can find element using built in function ---> indexof(),this is give match index
// console.log(myArray.indexOf(findElement))

// -------------------------------------------------- solve searching element using second method
// let myArray = [3,4,2,5,6,1,9]
// myArray.sort()
// let findNum = 1
// let f = 0
// let getvalue = 'sorry'
// let l = myArray.length

// for (let i = 0; i < myArray.length; i++) {
//     let med = Math.floor((f+l)/2)
//     console.log(med)
//     if(myArray[med]==findNum){
//         getvalue = 'find'
//         break
//     }
//     else if(findNum>myArray[med]){
//         f = med+1
//     }
//     else if(findNum<myArray[med]){
//         l = med-1
//     }
    
    
// }

// console.log(getvalue)


