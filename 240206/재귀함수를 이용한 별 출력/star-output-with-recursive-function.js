const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let N = parseInt(input)

function printStars(N) {
    if(N > 0) {
        printStars(N - 1)
        console.log('*'.repeat(N))
    }
}

printStars(N)