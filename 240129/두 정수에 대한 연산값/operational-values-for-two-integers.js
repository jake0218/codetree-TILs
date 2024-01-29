const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, b] = input.split(' ').map(Number)

//조건1: a, b 중 큰 수에 +25, 작은수에 x2
//----> 하나를 큰 수로 가정하고 푼다


// Fn
function modifyValues(a, b) {
    if(a > b) {
        a += 25;
        b *= 2;
    } else {
        b += 25;
        a *=2;
    }
    return [a, b]
}

const [newA, newB] =modifyValues(a, b)
console.log(newA, newB)