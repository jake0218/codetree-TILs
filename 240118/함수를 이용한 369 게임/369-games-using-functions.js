const fs = require("fs")

// 조건 0: a와 b사이의 숫자를 센다.
// 조건 1: 3,6,9 숫자가 있어야 한다. (3의 배수와는 다른 개념)
// 조건 2: 3의 배수인지 확인한다.

//조건0: a,b 만들기
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(" ").map(Number)

//조건1: 3,6,9 포함 확인
function contain369(number) {
    let str = number.toString();
    return str.includes('3') || str.includes('6') || str.includes('9')
}

//조건2: 3의 배수 확인
function isMultipleOf3(number){
    return number % 3 === 0;
}


// 메인 로직
function countMagicNumbers(a, b) {
    let count = 0
    for (let i = a; i <= b; i++) {
        if(contain369(i) || isMultipleOf3(i)){
            count++
        }
    }
    return count
}

console.log(countMagicNumbers(a, b))