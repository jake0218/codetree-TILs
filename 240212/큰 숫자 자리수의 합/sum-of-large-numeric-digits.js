const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let product = input[0] * input[1] * input[2]

function sumOfDigits(n) {
    if(n === 0) return 0
    return n % 10 + sumOfDigits(Math.floor(n/10))    
}

console.log(sumOfDigits(product))