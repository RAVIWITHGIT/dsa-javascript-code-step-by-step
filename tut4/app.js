// ---------------------- remove element in array -------------------------------
let myArray = [3,4,5,6,5,4,5,6,8,7]
let position = 6

console.log(myArray)
for(let i = position;i<myArray.length-1; i++){
    myArray[i] = myArray[i+1]
}

myArray.length = myArray.length-1
console.log(myArray)


