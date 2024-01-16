const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getLCM(n,m) {
    let lcm = 1;

    while(true) {
        if((lcm % n === 0)&&(lcm % m === 0)){
            break
        }
        lcm ++
    }
    return lcm
}

console.log(getLCM(n,m))