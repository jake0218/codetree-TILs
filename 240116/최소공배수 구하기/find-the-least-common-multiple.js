const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getGCD(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function getLCM(n, m) {
    let gcd = getGCD(n, m);
    return (n * m) / gcd;
}

console.log(getLCM(12, 18));