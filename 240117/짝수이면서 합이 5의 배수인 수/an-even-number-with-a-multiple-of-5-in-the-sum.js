const fs = require("fs")
let number = Number(fs.readFileSync(0).toString().trim())

function handleCheckFn(number){
    const isEven = number % 2 === 0;
    const isSumOfDigit = Math.floor((number / 10) + (number % 10))
    const isCheckByFive = isSumOfDigit % 5 === 0

    return (isEven && isCheckByFive) ? "Yes" : "No";

}

console.log(handleCheckFn(number))