/*
1. Understand Debugger
2. How js works(Call Stack Main)
3. Head recursion
4. Tail Recursion

*/


// Debugger help to understand how code execute
// To Debugger, you first need to go to the Sources area in the terminal. And there you have to select the js file

function colors() {
    let data = 20
    console.log(data)
    if (false) {
        console.log('condtion true')
    } else {
        console.log('sorry')
    }
}

function days() {
    colors()
}


function fruits() {
    days()
}

function topFunction() {
    fruits()
}

// topFunction()


// -----------------
// function myfun(x){
//     console.log(x)   //Head Recursion
//     if(x>0){
//         myfun(x-1)
//     }
// }
// myfun(5)

// function myfun(x){
//     if(x>0){
//         myfun(x-1)
//     }
//     console.log(x)   //Tail Recursion
// }
// myfun(5)







