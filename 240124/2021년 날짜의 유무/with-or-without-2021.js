const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [M, D] = input.split(' ').map(Number)

const isVaildDate = (M, D) => {
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if( M < 1 || M > 12) {
        return false
    }

    if( D < 1 || D > daysInMonth) {
        return false
    }

    return true
}

console.log(isVaildDate(M, D) ? "Yes" : "No")