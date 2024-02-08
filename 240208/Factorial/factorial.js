const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let N = parseInt(input)

const factorial = (n) => {
    if(n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
        // factorial(0) => 1
        // factorial(1) => 1 * factorial(0)
        // factorial(2) => 2 * factorial(1)
    }
}

console.log(factorial(N))