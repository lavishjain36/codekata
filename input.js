// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //LOGIC HERE
  
  
var num=userInput[0];

temp=parseInt(num);
console.log(temp);


});
