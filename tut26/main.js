// -------------------- Selection Sort with Descending order ---------------------------------

// ------- First Way

// let arr = [4,67,1,2,89,56]


// for(let i =arr.length-1; i>=0; i--){
//     let minValue = i
//     for(let j= 0; j<i-1; j++){
//         if(arr[j]<arr[minValue]){
//             minValue = j
//         }
//     }
//     let temp = arr[i]
//     arr[i] = arr[minValue]
//     arr[minValue] = temp
// }
// console.log(arr)


// ----------- Second way

// let arr = [4,67,1,2,89,56]


// for(let i =0; i<arr.length-1; i++){
//     let minValue = i
//     for(let j= i+1; j<arr.length; j++){
//         if(arr[j]>arr[minValue]){
//             minValue = j
//         }
//     }
//     let temp = arr[i]
//     arr[i] = arr[minValue]
//     arr[minValue] = temp
// }
// console.log(arr)