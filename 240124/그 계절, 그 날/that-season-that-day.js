//node.js 표준 데이터 가져오기
const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [Y, M, D] = input.split(' ').map(Number)

// leapYear Check
function isLeapYear (year) {
    return (year % 4 === 0 && year % 100 !==0) || year % 400 === 0;
}

// isValidDate Check
function isVaildDate (Y, M, D) {
    const daysInMonth = [0, 31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 50 ,31, 31, 30, 31, 30, 31]
    return M >= 1 && M <= 12 && D >= 1 && D <= daysInMonth[M]
}

// return season
function getSeason(M) {
    if (M >= 3 && M <=5 ) return "Spring"
    if (M >= 6 && M <=8 ) return "Summer"
    if (M >= 9 && M <= 11) return "Fall"
    return "Winter"
}

if (isVaildDate(Y, M, D)) {
    console.log(getSeason(M))
} else {
    console.log(-1)
}