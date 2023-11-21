// ------------------------ Array traversing -----------------------------
// array traversing and array iterastion is same . this is only diffrent name but manally big company use array traversing keyword use 


// let arr = [3,4,5,4,3,2,3,4,5,6]
// for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]}  <br/>`);
    
// }


// ------------------------- Array accessing -----------------------------
// let arr = [3,4,5,4,3,2,3,4,5,6]
// document.write(arr[5])


// ----------------------- Array accessing with dom
let arr = [3,4,5,4,3,2,3,4,5,6]

function access() {
    let myinput = document.getElementById('myinput').value
    if ((myinput<arr.length && myinput>=0) &&  typeof parseInt( myinput) == 'number' ) {
        alert(arr[myinput])
        
    }
    else if(myinput>= arr.length){
        alert('sorry out of index')

    }
    else if(myinput<0){
        alert('sorry your index number is less then zero')
    }
    else{
        alert('sorry not a number')
    }

    
}

