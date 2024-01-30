const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(' ').map(Number)

function onChangeValues(a, b) {
    if(a < b) {
        a += 10
        b *= 2
    } else {
        b += 10
        a *= 2
    }
    return [a, b]
}

const [newA, newB] = onChangeValues(a, b)
console.log(newA, newB)