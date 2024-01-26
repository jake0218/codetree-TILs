const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [n, m] = input.split(' ').map(Number)

function Swap(n, m) {
    return [m, n]
}

[n, m] = Swap(n, m)
console.log(n, m)