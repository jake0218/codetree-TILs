const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split('\n')

let N = parseInt(input[0])
let numbers = input[1].split(' ').map(Number)

const applyAbsolute = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = Math.abs(arr[i])
    }
}

applyAbsolute(numbers)
console.log(numbers.join(' '));