const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let N = parseInt(input)

const fibonacci = (n) => {
    if(n === 1 || n === 2) {
        return 1
    }
    //fibonacci(3) === fibonacci(1) + fibonacci(2)
    //fibonacci(4) === fibonacci(2) + fibonacci(3)
    return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(N))