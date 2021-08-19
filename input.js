
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
  
  
var str=userInput[0];
var temp=" ";

for(var i=0;i<str.length;i++)
{
    if(i!=str.length)
     temp+=str.charAt(i)+',';

     
}

n=temp.replace(/.$/," ");

console.log(n.trim(""));

 // console.log(userInput);

  //end-here
});
