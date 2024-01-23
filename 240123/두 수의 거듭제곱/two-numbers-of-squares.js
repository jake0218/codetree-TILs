const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(' ').map(Number)


const squareFn = (a, b) => {
    return a**b
}

console.log(squareFn(a,b))