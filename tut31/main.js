// ----------************ Maximum Occurring Character In String ************------------------------


let str = "hello my name is ravi lakshaaaaaakar";
let myobj = {}
let maxoccur = ''
for(let i=0; i<str.length; i++){
    let key = str[i]
    if(!myobj[key]){
        myobj[key] = 0
    }
    myobj[key]++
    if(maxoccur=='' || myobj[key]>myobj[maxoccur]){
        maxoccur = key
    }
}
console.log(myobj)
console.log('max occur',maxoccur)