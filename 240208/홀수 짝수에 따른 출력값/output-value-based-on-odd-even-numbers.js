const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let N = parseInt(input)

const difSum = (n) => {
    if(n === 1) return 1
    if(n === 2) return 2
    return n + difSum(n -2)

    // difSum(1) = 1
    // difSum(2) = 2
    // difSum(3) = 3 + 1(diffSum(1))
    // 3 + difSum(1)
    
}

console.log(difSum(N))