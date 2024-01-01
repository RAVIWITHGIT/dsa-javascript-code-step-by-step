// ------------>>>>>>>>>>>>>>> Binary Search with Recursive Approach <<<<<<<<<<<<<<<<----------------

let arr = [3,4,5,45,78,90]

let s = 0
let e = arr.length-1

let find = 78
let position = undefined

function BinarySearch_with_Recursive(arr,s,e){
    let med = Math.floor((s+e)/2)
    if(arr[med]==find){
        position = med
        return true
    }
    else if(arr[med]<find){
        BinarySearch_with_Recursive(arr,med+1,e)
    }else{
        BinarySearch_with_Recursive(arr,s,med-1)
    }

}

BinarySearch_with_Recursive(arr,s,e)
console.log("postion of find value is ",position)