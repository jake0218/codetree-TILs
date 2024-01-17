const fs = require("fs")

function handleMakeNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

let number = handleMakeNumber(10,100)

function handleCheckFn(){
    if(number > 9 && number <100) {
        return console.log("Yes")
    } else {
        return console.log("No")
    }
}

handleCheckFn(number)