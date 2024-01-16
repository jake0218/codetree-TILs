const fs = require("fs");
let [num1, num2] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i = 1; i <= Math.min(num1,num2); i++) {
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

console.log(getGCD(12,18))