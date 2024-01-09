// ----------*************** Check string are Anagram  *****************-----------------------------

function anagram(str1,str2){
    let myobj = {}
    if(str1.length!=str2.length){
        return false
    }else{
        for (let i of str1) {
            if(myobj[i]){
                myobj[i]++
            }else{
                myobj[i] = 1
            }
            
        }
        for(let i of str2){
            if(myobj[i]){
                myobj[i]--
            }else{
                return false
            }
        }
        return true
    }

}
console.log(anagram('ravi','avri'))

