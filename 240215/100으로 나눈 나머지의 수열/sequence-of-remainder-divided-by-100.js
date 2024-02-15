const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()
let N = parseInt(input)


const sequenceByHundred = (n) => {
    if(n === 1) return 2
    else if(n === 2) return 4
    else return (sequenceByHundred(n-1) * sequenceByHundred(n-2)) % 100
}

console.log(sequenceByHundred(N))