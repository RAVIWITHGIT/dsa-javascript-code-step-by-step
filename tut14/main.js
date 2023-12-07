// -------------------- How Reverse Array using Recursion ---------------------------------------
let myArr = [1,2,3,4,5]
let i = 0
function outerfun(getArr,start,end){
    console.log(getArr)
    let temp = getArr[start]
    getArr[start] = getArr[end]
    getArr[end] = temp
    if(start<=end){
        outerfun(getArr,start+1,end-1)

    }

}

outerfun(myArr,0,myArr.length-1)
// console.log(myArr)


// ----------- built in method --> reverse() method
myArr.reverse()
// console.log(myArr)