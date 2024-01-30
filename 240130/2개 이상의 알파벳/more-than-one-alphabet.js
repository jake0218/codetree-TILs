const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()


function countAlphabet (string) {
    
    let leng = string.length;
    for(let i =0; i < leng; i++) {
        if(string[i] !== string[0]) {
            return true
        }
    }
    return false
}

if(countAlphabet(input)) {
    console.log("Yes")
} else {
    console.log("No")
}