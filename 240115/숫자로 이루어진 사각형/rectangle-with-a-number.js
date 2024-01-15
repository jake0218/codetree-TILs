function printRect(n) { 
    let number = 1;

    for(let i = 0; i < n; i++) {
        let str = ""
        for(let j = 0; j < n; j++){
            str += number + " "
            number = (number % 9 === 0 ? 1 : number +1)
        }
        console.log(str)
    }
}


const fs = require("fs");
let rowNum = Number(fs.readFileSync(0).toString().trim());


printRect(rowNum);