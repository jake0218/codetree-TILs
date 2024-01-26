const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split('\n')
let N = parseInt(input[0])
let numbers = input[1].split(' ').map(Number)

function devideEvenNumbers(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arr[i] /= 2
        }
    }
}

devideEvenNumbers(numbers)
console.log(numbers.join(' '))