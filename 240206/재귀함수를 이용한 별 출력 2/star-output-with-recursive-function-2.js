const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()

let N = input.split(' ').map(Number)

function repeatStarBackward(N) {
    if(N >= 1) {
        process.stdout.write('* '.repeat(N) + '\n')
        repeatStarBackward(N - 1)
    }   
    if(N > 0) {
        process.stdout.write('* '.repeat(N) + '\n')
    }
}

repeatStarBackward(N)