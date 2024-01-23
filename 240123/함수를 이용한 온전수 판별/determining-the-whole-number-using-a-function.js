const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(' ').map(Number)

const checkOnjeonsu = (number) => {
    return !(number % 2 === 0 || number % 10 === 5 || (number % 3 === 0 && number % 9 !== 0))
}

const checkOnjeonsuFn = (a, b) => {
    let count = 0;
    for (let i = a; i <= b; i++){
        if(checkOnjeonsu(i)){
            count++
        }
    }
    return count
}

console.log(checkOnjeonsuFn(a,b))