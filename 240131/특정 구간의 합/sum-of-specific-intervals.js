const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split('\n')
let [n, m] = input[0].split(' ').map(Number)
let A = input[1].split(' ').map(Number)

let paris = input.slice(2).map(pair => pair.split(' ').map(Number))

function sumOfRange(a1, a2) {
    let sum = 0;
    for( let i = a1 - 1; i < a2; i++) {
        sum += A[i]
    }
    return sum;
}

paris.forEach(pair => {
    console.log(sumOfRange(...pair))
})