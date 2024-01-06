// ---------------------------- Insertion sort in javascript ---------------------------------------
let arr = [12,11,13,5,6]

function insertionSort(getarr){
    let j,currentPostion;
    for (let i = 1; i < getarr.length; i++) {
        currentPostion = getarr[i]
        j = i-1 
        while(j>=0 && getarr[j]>currentPostion){
            getarr[j+1] = getarr[j]
            j--
    
        }
        getarr[j+1] = currentPostion
        
    }

}

insertionSort(arr)
console.log(arr)