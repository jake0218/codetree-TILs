const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, o, c] = input.split(' ');
let a = map(Number);
let c = map(Number);

let result;
switch(o) {
    case '+':
        result = a + c;
        break;
    case '-':
        result = a - c;
        break;
    case '*':
        result = a * c;
        break;
    case '/':
        result = Math.floor(a / c);
        break;
    default:
        result = false
}

console.log(result)