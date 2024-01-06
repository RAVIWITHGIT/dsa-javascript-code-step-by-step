// ---------------------------- Insertion sort in javascript ---------------------------------------
// let arr = [12,11,13,5,6]

// function insertionSort(getarr){
//     let j,currentPostion;
//     for (let i = 1; i < getarr.length; i++) {
//         currentPostion = getarr[i]
//         j = i-1 
//         while(j>=0 && getarr[j]>currentPostion){
//             getarr[j+1] = getarr[j]
//             j--
    
//         }
//         getarr[j+1] = currentPostion
        
//     }

// }

// insertionSort(arr)
// console.log(arr)



/* ------------ Task

give this arr -->[15,20,14,3,9,11,0,8] , you sort this array but 14,3 not sort and add in last of array
expected output --> [0,8,9,11,15,20,14,3]

*/

let arr1 = [15,20,14,3,9,11,0,8]


function insertionsort(getarr){
    let j,currentValue;
    for (let i = 1; i < getarr.length; i++) {
        currentValue = getarr[i]
        j = i-1
        while (j>=0 && getarr[j]>currentValue){
            if(currentValue==14 ||currentValue==3){
                break

            }else{
                getarr[j+1] = getarr[j]
                j--

            }
        }
        getarr[j+1] = currentValue
        console.log(getarr)

        
    }
}
insertionsort(arr1)
console.log(arr1)