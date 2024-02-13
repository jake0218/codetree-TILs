const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()
let N = parseInt(input)

const calculateCount = (n) => {
    if(n === 1)  return 0
    if(n % 2 === 0) {
        return calculateCount(n / 2) + 1
    } else {
        return calculateCount(n * 3 + 1) + 1
    }
}

console.log(calculateCount(N))