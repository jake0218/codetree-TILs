const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
let [a, o, c] = input.split(' ');

a = Number(a);
c = Number(c);

let result;
switch(o) {
    case '+':
        result = `${a} ${o} ${c} = ${a + c}`
        break;
    case '-':
        result = `${a} ${o} ${c} = ${a - c}`
        break;
    case '*':
        result = `${a} ${o} ${c} = ${a * c}`
        break;
    case '/':
        result = `${a} ${o} ${c} = ${Math.floor(a / c)}`
        break;
    default:
        result = 'False'
}

console.log(result)