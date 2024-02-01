const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let N = parseInt(input)

// 1 ~ N 까지 출력하는 재귀함수
function asendingNumber(N) {
    if(N > 1){
        asendingNumber(N-1)
    }
    process.stdout.write(`${N} `)
}

// N ~ 1 까지 출력하는 재귀함수
function desendingNumber(N) {
    process.stdout.write(`${N} `)
      if(N > 1){
        desendingNumber(N-1)
    }
}

asendingNumber(N)
process.stdout.write(`\n`)
desendingNumber(N)