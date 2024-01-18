const fs = require("fs")

// 조건0: a, b 생성
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(" ").map(Number)

// 조건1: 소수인지 확인
function isPrime(number) {
    if(number <=1 ) return false;
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false
    }
    return true
}


// 메인 로직
function sumPrimes(a, b) {
    let sum = 0;
    for(let i = a ; i <=b ; i++) {
        if(isPrime(i)){
            sum += i
        }
    }
    return sum
}

console.log(sumPrimes(a,b))