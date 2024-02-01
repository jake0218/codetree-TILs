// node.js 표준데이터
const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()
let N = input.split(' ').map(Number)


function printHelloWorld (N) {
    if(N === 0) {
        return
    }

    printHelloWorld(N-1)
    console.log("HelloWorld")
}

(printHelloWorld(N))