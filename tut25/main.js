// ---------------->>>>>>>>>>>>>>> Selction Sort <<<<<<<<<<-------------------------------------

let myarr = [45,2,78,9,23,1]

function Selction_sort_with_asending(getarr){
    for (let i = 0; i < getarr.length; i++) {
        let mValue = i;
        for(let j = i+1; j<getarr.length;j++){
            if(getarr[j]<getarr[mValue]){
                mValue = j;
            }
        }
        let temp = getarr[i]
        getarr[i] = getarr[mValue]
        getarr[mValue] = temp
        
    }
}

Selction_sort_with_asending(myarr)
console.log("asending order",myarr)

// ------------

// function Selction_sort_with_dsending(getarr){
//     for (let i = 0; i < getarr.length; i++) {
//         let mValue = i;
//         for(let j=i+1; j<getarr.length; j++){
//             if(getarr[j]>getarr[mValue]){
//                 mValue = j
//             }

//         }
//         let temp = getarr[i]
//         getarr[i] = getarr[mValue]
//         getarr[mValue] = temp
        
//     }

// }

// Selction_sort_with_dsending(myarr)
// console.log("desending order",myarr)