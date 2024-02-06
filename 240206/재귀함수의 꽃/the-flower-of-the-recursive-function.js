const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()

let N = parseInt(input)

function repeatBackward(N) {
    if(N >= 1) {
        process.stdout.write(`${N} `)
        repeatBackward(N - 1)
    }
    if(N > 0) {
        process.stdout.write(`${N} `)
    }
}

repeatBackward(N)