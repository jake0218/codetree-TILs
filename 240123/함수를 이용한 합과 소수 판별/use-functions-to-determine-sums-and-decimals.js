const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(' ').map(Number)

const isPrime = (n) => {
    if(n <= 1) return false;
    for(let i = 2; i * i <= n; i++){
        if(n % i === 0) return false; 
    }
    return true
}

const isEvenOfSum = (n) =>{
    let sum = 0;
    while(n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10)
    }
    return sum % 2 === 0
}

const countPrimes = (a, b) => {
    let count = 0;
    for(let i = a; i <= b; i++){
        if(isPrime(i) && isEvenOfSum(i)){
            count++
        }
    }
    return count
}

console.log(countPrimes(a, b))