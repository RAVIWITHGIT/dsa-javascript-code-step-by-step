//------------------***************  stack with class *********-------------------------------------
// ***********use push and pop method with class


// class Stack {
//     item = []
//     currentSize;
//     maxSize;
//     constructor(getMaxSize){
//         this.maxSize = getMaxSize
//         this.currentSize = this.item.length


//     }
//     push(getValue){
//         if(this.currentSize<this.maxSize){
//             this.item[this.currentSize] =getValue 
//             this.currentSize++
//         }else{
//             alert('array is full')
//         }

//     }
//     pop(){
//         if(this.currentSize==0){
//             alert('array is empty')
//         }else{
//             this.currentSize--
//             this.item.length = this.currentSize
//         }
//     }
//     display(){
//         return this.item
//     }


// }

// st1 = new Stack(5);
// console.log(st1)
// st1.push(21)
// st1.push(20)
// st1.push(9)
// st1.push(40)
// st1.push(100)
// console.log(st1.display(21))


// --------------------- reverse string using class------------------------------------------

// class ReverseStr{
//     myarr = []
//     currentSize;
//     s;
//     constructor(){
//         this.currentSize = this.myarr.length
//     }
//     push(getvalue){
//         this.myarr[this.currentSize] = getvalue
//         this.currentSize++
//     }
//     pop(){
//         this.s = this.myarr[this.currentSize-1]
//         this.currentSize -=1
//         this.myarr.length = this.currentSize
//         return this.s
//     }
//     reverse(item){
//         console.log(item)
//         for(let i of item){
//             this.push(i)
//         }
//         for (let  j= 0;  j< item.length; j++) {
//             item[j] = this.pop()
            
//         }
//     }

// }

// let str1 = 'ravi'
// str1 = str1.split('')

// let a = new ReverseStr()
// a.reverse(str1)
// console.log(str1.join(''))
