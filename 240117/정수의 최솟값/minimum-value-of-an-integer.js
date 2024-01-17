const fs = require("fs")
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);


const handleFind = () => {
    return Math.min(a, b, c)
}

console.log(handleFind())