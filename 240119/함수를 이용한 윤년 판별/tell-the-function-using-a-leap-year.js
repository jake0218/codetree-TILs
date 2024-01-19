// 윤년의 조건
// 1: 4의 배수 => True
// 2: 100의 배수 X => 100으로 나누면 0이면 false 
// 3: 4의 배수 && 100의 배수 && 400의 배수 => True
// 4: else false

const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let year = Number(input)

const isLeapYear = (year) => {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0
}

console.log(isLeapYear(year))