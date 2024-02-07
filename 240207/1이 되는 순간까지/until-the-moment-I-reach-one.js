const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()
let N = parseInt(input)

const countOperation = (N, count = 0) => {
    if(N === 1) {
        return count
    } else if (N % 2 === 0) {
        return countOperation(N / 2, count + 1)
    } else {
        return countOperation(Math.floor(N / 3), count + 1)
    }
}

console.log(countOperation(N))