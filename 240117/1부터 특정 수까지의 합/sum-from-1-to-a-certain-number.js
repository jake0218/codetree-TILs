function devideFn(number) {
    let answer = 0;
    for(let i =0; i <= number; i++){
        answer += i
    }
    return Math.trunc((answer / 10))
}


const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [rowNum, colNum] = input.map(Number);

console.log(devideFn(rowNum))