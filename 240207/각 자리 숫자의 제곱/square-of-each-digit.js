const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()

let N = parseInt(input)


const squareNumber = (N) => {
    if(N === 0) {
        return 0 
    } else {
        let digit = N % 10;
        let square = digit * digit
        return square + squareNumber(Math.floor(N/10))
    }
}

console.log(squareNumber(N))