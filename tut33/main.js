// -------------->>>>>>>>>>>> Map object in Data Structure <<<<<<<<<<<<<<<<<<<<<--------------------

/*
1. Map object same as normal object
2. major diffrence of Map object and object is -->
    I. object key always is string
    II. Map object key is any Data type exa- string,bool,num etc.

*/


// let data = new Map();
// console.log(data)

// -----------
let data = new Map([
    ["name","ravi"],
    [true,"yes"],
    [100,'hundred']
])
// console.log(data)

// -------- check key is present
// console.log(data.has("name"))

// ------- get value using key
// console.log(data.get(100))

// ------- get size of map object
// console.log(data.size)


// -------- clear map
// data.clear()
// console.log(data)

// --------- delete specific key value
// data.delete(true);
// console.log(data)


// ---------- access key value using for of loop
// for(let i of data){
//     console.log(i)
// }

// --------- access key value using for each loop
// data.forEach((value,key)=>{
//     console.log(value,key)
// })

