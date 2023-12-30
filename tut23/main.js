// ----------------->>>>>>>>>>>> Binary Search Alogrithm <<<<<<<<<<<<<<------------------------------

// note ==> Binary Search Algorithm work only sorted Array

let arr = [1, 2, 3, 4, 5, 6, 7]

let findValue = 7
let position = undefined

let s = 0
let e = arr.length - 1

while (s <= e) {
    let med = Math.floor((s + e) / 2)
    if (arr[med] == findValue) {
        position = med
        break
    }
    else if (arr[med] < findValue) {
        s = med + 1
    } else {
        e = med - 1
    }

}

console.log(position)