// ---------------------------------indirect Recursion ---------------------------------------------

// indirect recursion mean - if two functions are called inside each other then it is called indirect Recursion

// let money = 500
// let totalapple = 0

// function buyApple(x){
//     console.log(x)
//     if(x>0){
//         buyMore(x)
//     }else{
//         console.log("i don't have more money",totalapple)
//     }

// }

// function buyMore(x){
//     buyApple(x-10)
//     console.log('buy more',x)
// }

// buyApple(money)


// ---------------------

// let money = 500
// let totalapple = 0

// function buyApple(x){
//     if(x>0){
//         console.log(x,'totalapple',totalapple)
//         buyMore(x)
//     }else{
//         console.log("i don't have more money",totalapple)
//     }

// }

// function buyMore(x){
//     totalapple++
//     buyApple(x-50)
//     // console.log('buy more',x)
// }

// buyApple(money)


// ----------
// function myfun(x){
//     if(x>0){
//         myfun(x-1)
//     }
//     console.log(x)
// }
// myfun(5)