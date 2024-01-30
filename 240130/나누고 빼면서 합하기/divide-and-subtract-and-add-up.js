const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split('\n')
let [n, m] = input[0].split(' ').map(Number)
let A = input[1].split(' ').map(Number)

function onChangeElements(A, m) {
    let sum = 0;

    while(m > 1) {
        sum += A[m - 1];
        if(m % 2 === 0) {
            m /= 2
        } else {
            m -= 1
        }
    }
    sum += A[0]
    return sum
}

console.log(onChangeElements(A, m))