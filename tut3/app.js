// ------------------- insert element in array without remove any element of array --------------



// ----- solve without any built-in function
// let myArray = [100,200,400,500,600]
// let newElement = 300
// let newPosition = 2

// console.log(myArray)
// for (let i = (myArray.length)-1; i >=0; i--) {
//     if(i>=newPosition){
//         myArray[i+1] = myArray[i]
//         if(i==newPosition){
//             myArray[newPosition] = newElement
//         }

//     }
    
// }
// console.log(myArray)



// ----------- solve with built in function
// note - we can insert element into array in one line by using the splice function . above we have tried to understand in what way the splice function will be working

// let myArray = [100,200,400,500,600]
// let newElement = 300
// let newPosition = 2
// console.log(myArray)
// myArray.splice(newPosition,0,newElement)
// console.log(myArray)