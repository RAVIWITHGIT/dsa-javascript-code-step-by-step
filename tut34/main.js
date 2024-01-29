// ----------------------------- Set Data Structure -------------------------------------------------

/*
1. set is similar to array 
2. set not store duplicate value but array store duplicate value
3. in array we find length using .leangth() method . in this way , we use the .size() to find the length of the Set Data struture   
*/

let data = new Set(["ravi","lakshakar","ravi"])

//---------- add element in Set
data.add("ranu")
data.add({name:"shiv"})


// ------- check element is present or not
console.log(data.has("ravi"))

// ------- find size of Set Data Structue
console.log(data.size)

// -------- delete one element
// data.delete("lakshakar")

// ------- get all value
// console.log(data.values())
// console.log(data.keys())
// console.log(data.entries())

// -------clear Set 
// data.clear()


// console.log(data)


// for(x of data){
//     console.log(x)
// }


// data.forEach((val)=>{
//     console.log(val)
// })