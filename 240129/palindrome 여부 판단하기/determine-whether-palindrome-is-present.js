const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()

function isPalindrome(string) {
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[string.length - 1 - i]) {
            return "Yes"
        } else {
            return "No"
        }
    }
}

console.log(isPalindrome(input))