// ------------------------- MERGE TWO ARRAY ------------------------------------
// let fArray = [22,33,66,77,89]
// let sArray = [66,90,21,67,76,37]

// let nArray = []
// for (let i = 0; i < fArray.length; i++) {
//     nArray[i] = fArray[i]

// }
// for (let j = 0; j < sArray.length; j++) {
//     nArray[fArray.length+j] = sArray[j]

// }

// console.log(nArray)


// ------------------------- merge two array using built in array
// let fArray = [22,33,66,77,89]
// let sArray = [66,90,21,67,76,37]
// let nArray = [...fArray,...sArray]
// console.log(nArray)

// let fArray = [22,33,66,77,89]
// console.log(...fArray)
// console.log([...fArray])



// ----------------------- reverse array using built in function
// let fArray = [22,33,66,77,89]
// console.log(fArray.reverse())


// ------------------------- MERGE TWO ARRAY and sort new array

// ----- merge two array
let fArray = [22,33,66,77,89]
let sArray = [66,90,21,67,76,37]

let nArray = []
for (let i = 0; i < fArray.length; i++) {
    nArray[i] = fArray[i]

}
for (let j = 0; j < sArray.length; j++) {
    nArray[fArray.length+j] = sArray[j]

}

// ---- sort manually


for (let i = 0; i < nArray.length; i++) {
    for (let j = 0; j < nArray.length-1-i; j++) {
        let temp = 0
        if(nArray[j]<nArray[j+1]){
    
        }
        else{
            temp = nArray[j] 
            nArray[j] = nArray[j+1]
            nArray[j+1] = temp
    
        }
        
    }
    
}
console.log(nArray)