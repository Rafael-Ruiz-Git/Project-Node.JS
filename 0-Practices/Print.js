// const operations = require("./module.js");
const {add, multiply} = require( "./module.js")


function printMessage(message){
  console.log(message)
};

printMessage("Hello, World");

// console.log("Sum: ", operations.add(3,5));
// console.log("Sum: ", operations.multiply(3,5));

console.log("Sum: ", add(3,5));
console.log("Sum: ", multiply(3,5));