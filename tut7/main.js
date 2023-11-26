// -------------------------- Merge two Array with Sorting in new Array -----------------------------

// this algorithm only work when merging array already  sort and new array sort using our algorighm

let fArray = [1,3,6,7,8,11,56]
let sArray = [2,4,5,9,10]

let nArray = []
let d1 = 0  //1
let d2 = 0
let d3 = 0

while (d1<fArray.length && d2<sArray.length){
    if(fArray[d1]<sArray[d2]){
        nArray[d3] = fArray[d1]
        d1++


    }else{
        nArray[d3] = sArray[d2]
        d2++
    }
    d3++

}
while(d1<fArray.length){
    nArray[d3] = fArray[d1]
    d1++
    d3++


}
console.log(nArray)